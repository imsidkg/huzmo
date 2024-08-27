
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import ToolButton from "./ToolButton";



type Props = {}

const Toolbar = (props: Props) => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-1 flex-col items-center shadow-md">
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() =>  }
          isActive={
           
          }
        />
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() =>
           
          }
          isActive={
            
          }
        />
        <ToolButton
          label="Sticky note"
          icon={StickyNote}
          onClick={() =>
          
            })
          }
          isActive={
          
          }
        />
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() =>
           
          }
          isActive={
         
          }
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() =>
            
            }
          
          isActive={
          
          }
        />
        <ToolButton
          label="Pen"
          icon={Pencil}
          onClick={() =>
          
            }
          
          isActive={}
        />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={undo}
          disabled={!canUndo}
        />
        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={redo}
          disabled={!canRedo}
        />
      </div>
    </div>
  );

}

export default Toolbar