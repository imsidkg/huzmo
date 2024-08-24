'use client'
import React from 'react'
import Info from './Info'
import Toolbar from './Toolbar'
import { useSelf } from '@liveblocks/react/suspense'

type Props = {
    boardId : string
}

const Canvas = ({boardId}: Props) => {
  const myPresence = useSelf((me) => me.presence);
  return (
  <div>
    {boardId}
     <Info/>
     <Toolbar/>
  </div>
  )
}

export default Canvas