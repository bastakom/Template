import { gql } from '@apollo/client'
import client from 'client'
import { BlockRender } from 'components/BlockRender'
import { cleanAndTransformBlocks } from 'utils/cleanAndTransformBlocks'

export default function Page(props) {
  const { title } = props

  return (
    <div>
      <BlockRender blocks={props.blocks} />
    </div>
  )
}

export const getStaticProps = async (context) => {
  const uri = `/${context.params.slug.join('/')}/`

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
    variables: {
      uri,
    },
  })
  const blocks = cleanAndTransformBlocks(
    data.nodeByUri.blocksJSON
  )
  return {
    props: {
      blocks,
      title: data.nodeByUri.title,
    },
  }
}

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            id
            slug
            uri
            title
          }
        }
      }
    `,
  })

  return {
    paths: data.pages.nodes.map((page) => ({
      params: {
        slug: page.uri
          .substring(1, page.uri.length - 1)
          .split('/'),
      },
    })),
    fallback: false,
  }
}
