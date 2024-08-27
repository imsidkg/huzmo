import React from 'react'
import Cursor from './Cursor'
import { useOthersConnectionIds } from '@liveblocks/react/suspense'

type Props = {}

const CursorPresence = (props: Props) => {
    const ids = useOthersConnectionIds()
  return (
    <div>
       {ids.map((connectionId) => {
        return(
            <Cursor connectionId={connectionId}/>
        )
       })}
    </div>
  )
}

export default CursorPresence