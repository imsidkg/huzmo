'use client'
import React, { ReactNode } from 'react'
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense, 
  
  } from "@liveblocks/react/suspense";
import { LiveList, LiveMap, LiveObject } from '@liveblocks/client';
import { Layer , Color } from '../../types/canvas';

type Props = {}

const Room = ({children , roomId} : {children : ReactNode , roomId:string}) => {
  
  return (
    //@ts-ignore
    <LiveblocksProvider 
    throttle={16}
    authEndpoint="/api/liveblocks-auth"
    
    >
    <RoomProvider id={roomId} initialPresence={{cursor : null , selection: []}}   initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList<string>(["user1", "user2"]),
      }}>
        <ClientSideSuspense fallback = {<div>Loading ....</div>}>
            {() => children}
        </ClientSideSuspense>
    </RoomProvider>
        </LiveblocksProvider>
  )
}

export default Room