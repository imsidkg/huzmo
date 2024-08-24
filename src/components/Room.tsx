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
    <LiveblocksProvider publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCK_SECRET!}>
    <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback = {<div>Loading ....</div>}>
            {() => children}
        </ClientSideSuspense>
    </RoomProvider>
        </LiveblocksProvider>
  )
}

export default Room