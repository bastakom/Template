import { gql } from '@apollo/client'
import client from 'client'
import { BlockRender } from 'components/BlockRender'
import { MainMenu } from 'components/MainMenu'
import { cleanAndTransformBlocks } from 'utils/cleanAndTransformBlocks'
import { mapMainMenuItems } from 'utils/mapMainMenuItems'

export default function Home(props) {
  return (
    <div>
      <MainMenu items={props.menuMainItems} />
      <BlockRender blocks={props.blocks} />
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
        acfOptionsMenu {
          mainMenu {
            menuItems {
              menuItem {
                url
                page {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                link {
                  ... on Page {
                    id
                  }
                  ... on Post {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
  })
  const blocks = cleanAndTransformBlocks(
    data.nodeByUri.blocksJSON
  )
  return {
    props: {
      menuMainItems: mapMainMenuItems(
        data.acfOptionsMenu.mainMenu.menuItems
      ),
      blocks,
    },
  }
}
