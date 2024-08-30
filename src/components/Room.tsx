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
    resolveUsers={async ({ userIds }) => {
      const usersData = await __getUsersFromDB__(userIds);

      return usersData.map((userData) => ({
        name: userData.name,
        avatar: userData.avatar.src,
      }));
    }}
    
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