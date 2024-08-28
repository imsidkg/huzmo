'use client'
import React, { useMemo } from 'react'
import Info from './Info'
import Toolbar from './Toolbar'
import { useOthersMapped, useSelf, useStorage } from '@liveblocks/react/suspense'
import { connectionIdToColor } from '@/lib/utils'

type Props = {
    boardId : string
}

const Canvas = ({boardId}: Props) => {
  const myPresence = useSelf((me) => me.presence);
  const layerIds = useStorage((root) => root.layerIds);

  const selections = useOthersMapped((other) => other.presence.selection);
  const layerIdsToColorSelection = useMemo(() => {
    const layerIdsToColorSelection: Record<string, string> = {};

    for (const user of selections) {
      const [connectionId, selection] = user;

      for (const layerId of selection) {
        layerIdsToColorSelection[layerId] = connectionIdToColor(connectionId);
      }
    }

    return layerIdsToColorSelection;
  }, [selections]);

  return (
  <div>
    {boardId}
     <Info/>
     <Toolbar/>
  </div>
  )
}

export default Canvas