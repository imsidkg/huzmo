'use client'
import React, { ReactNode } from 'react'
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";

type Props = {}

const Room = ({children , roomId} : {children : ReactNode , roomId:string}) => {
    
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_eVXJd6Fv5EKE0IHSy0e3_efvNh5KG2ky2I__D2MlohjNhHoTDdR4I80abZlY4z7d"}>
    <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback = {<div>Loading ....</div>}>
            {() => children}
        </ClientSideSuspense>
    </RoomProvider>
        </LiveblocksProvider>
  )
}

export default Room