import type { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { useApiMutation } from "../../hooks/useApiMutation";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { useRenameModal} from '../../store/useRenameModal'
import { ConfirmModal } from "./ConfirmModal";

interface ActionProp {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

const Actions = ({ children, side, sideOffset, id, title }: ActionProp) => {

    const {onOpen} = useRenameModal();
    const {mutate, isLoading} = useApiMutation(api.board.remove)
    

     
    function handleCopyLink () {
        navigator.clipboard.writeText(`${window.location.origin}/boards/${id}`).then(() => toast.success('Link Copied')).catch(() => 'Failed to copy the link')
    }


    function onDelete() {
        mutate({ id: id as Id<"boards">}).then(() => toast.success('Board Deleted Successfullly')).catch(() => toast.error("Failed to delete the board"))
    }
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
    <DropdownMenuContent
      onClick={(e) => e.stopPropagation()}
      side={side}
      sideOffset={sideOffset}
      className="w-60"
    >
      <DropdownMenuItem
        className="p-3 cursor-pointer"
        onClick={handleCopyLink}
      >
        <Link2 className="h-4 w-4 mr-2" />
        Copy board link
      </DropdownMenuItem>
      <DropdownMenuItem
        className="p-3 cursor-pointer"
        onClick={() => onOpen(id, title)}
      >
        <Pencil className="h-4 w-4 mr-2" />
        Rename
      </DropdownMenuItem>
      <ConfirmModal
        header="Delete board?"
        description="This will delete the board and all of its content"
        disabled={isLoading}
        onConfirm={onDelete}
      >
        <Button
          className="p-3 cursor-pointer w-full justify-start font-normal"
          variant="ghost"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </ConfirmModal>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
export default Actions;
