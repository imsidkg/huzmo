'use client'
import React, { useMemo, useState } from 'react'
import Info from './Info'
import Toolbar from './Toolbar'
import { useOthersMapped, useSelf, useStorage } from '@liveblocks/react/suspense'
import { connectionIdToColor } from '@/lib/utils'
import { useMutation } from 'convex/react'
import { CanvasMode ,CanvasState } from '../../../../../types/canvas'

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

  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const handleLayerPointerDown = useMutation(
    ({ self, setMyPresence }, e: React.PointerEvent, layerId: string) => {
      if (
        canvasState.mode === CanvasMode.Pencil ||
        canvasState.mode === CanvasMode.Inserting
      ) {
        return;
      }

      history.pause();
      e.stopPropagation();

      const point = pointerEventToCanvasPoint(e, camera);

      if (!self.presence.selection.includes(layerId)) {
        setMyPresence({ selection: [layerId] }, { addToHistory: true });
      }

      setCanvasState({
        mode: CanvasMode.Translating,
        current: point,
      });
    },
    [setCanvasState, camera, history, canvasState.mode]
  );

  return (
  <div>
    {boardId}
     <Info/>
     <Toolbar/>
  </div>
  )
}

export default Canvas