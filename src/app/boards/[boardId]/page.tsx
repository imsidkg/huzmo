import React from 'react'
import Canvas from './_components/Canvas'
import Room from '@/components/Room'

interface Props  {
    params : {
        boardId : string
    }
}

const page = ({params}: Props) => {
  return (
    <div>
        <Room roomId={params.boardId}>

        <Canvas boardId =  {params.boardId}/>
        </Room>
    </div>
  )
}

export default page