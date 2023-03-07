import { createElement } from 'react'
import { getTextAlign } from 'utils/fonts'
import { ToAbsoluteUrl } from 'utils/ToAbsoluteUrl'

export const Paragraph = ({
  textAlign = 'left',
  textColor,
  content,
}) => {
  return (
    <p
      className={`max-w-5-xl ${getTextAlign(
        textAlign
      )}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{
        __html: ToAbsoluteUrl(content),
      }}
    />
  )
}
