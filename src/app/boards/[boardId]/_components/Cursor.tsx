import { useOther } from '@liveblocks/react/suspense'
import React, { memo } from 'react'

type Props = {
    connectionId : number
}

const Cursor = memo(({connectionId}: Props) => {
    const info = useOther(connectionId, (user) => user?.info);
    const cursor =  useOther(connectionId , (user) => user.presence.cursor);

    const name = info?.name || 'Teammate';
    if(!cursor ) return null;
     
    const {x , y } = cursor
    

  return (
    <div>Cursor</div>
  )
})

export default Cursor