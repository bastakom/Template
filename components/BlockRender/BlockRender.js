import { Cover } from 'components/Cover'
import { Heading } from 'components/Heading'
import { Paragraph } from 'components/Paragraph'
import { theme } from 'theme'

export const BlockRender = ({ blocks }) => {
  return blocks.map((block) => {
    const {
      attributes: {
        content,
        level,
        textAlign,
        textColor,
        align,
      },
    } = block

    switch (block.name) {
      case 'core/heading': {
        return (
          <Heading
            key={block.id}
            textAlign={textAlign}
            content={content}
            level={level}
          />
        )
      }
      case 'core/paragraph': {
        return (
          <Paragraph
            key={block.id}
            textAlign={align}
            content={content}
            textColor={
              theme[textColor] ||
              block.attributes.style?.text?.color
            }
          />
        )
      }
      case 'core/cover': {
        return (
          <Cover
            key={block.id}
            background={block.attributes.url}
          >
            <BlockRender blocks={block.innerBlocks} />
          </Cover>
        )
      }

      default:
        return ''
    }
  })
}
