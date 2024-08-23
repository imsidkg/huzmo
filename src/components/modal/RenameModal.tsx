"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { useRenameModal } from '../../../store/useRenameModal'
import { useApiMutation } from "../../../hooks/useApiMutation";
import { api } from "../../../convex/_generated/api";

type Props = {}

const RenameModal = (props: Props) => {
  const {isOpen , onClose} = useRenameModal()
  const {mutate , isLoading} = useApiMutation(api.board.)

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();



  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>Edit board title</DialogHeader>
      <DialogDescription>Enter a new title for this board</DialogDescription>
      {/* <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          disabled={false}
          required
          maxLength={60}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Board title"
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button disabled={isLoading} type="submit">
            Save
          </Button>
        </DialogFooter>
      </form> */}
    </DialogContent>
  </Dialog>
  )
}

export default RenameModal