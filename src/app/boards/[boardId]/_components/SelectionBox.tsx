"use client";

import { useSelectionBounds } from "@/hooks/useSelectionBounds";
import { useSelf, useStorage } from "@/liveblocks.config";
import { LayerType, Side, XYWH } from "@/types/canvas";
import { memo } from "react";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}

const HANDLE_WIDTH = 8;


const SelectionBox = (props: Props) => {
    const soleLayer = useSelf
  return (
    <div>SelectionBox</div>
  )
}

export default SelectionBox