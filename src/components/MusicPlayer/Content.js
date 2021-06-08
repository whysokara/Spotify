/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

const Content = ({ Children }) => {
  return (
    <div className="Content" css={CSS}>
      {Children}
    </div>
  )
}

const CSS = css`
  width: calc(100% - 200px);
  padding: 20px;
  background: #121212;
`

export default Content
