import React from 'react'
import Info from './Info'
import Toolbar from './Toolbar'

type Props = {
    boardId : string
}

const Canvas = ({boardId}: Props) => {
  return (
  <div>
    {boardId}
     <Info/>
     <Toolbar/>
  </div>
  )
}

export default Canvas