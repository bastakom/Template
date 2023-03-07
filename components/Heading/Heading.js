import { createElement } from 'react'
import {
  getFontSizeForHeading,
  getTextAlign,
} from 'utils/fonts'

export const Heading = ({ textAlign, level, content }) => {
  const tag = createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-2xl my-5 relative z-20 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  })

  return tag
}
