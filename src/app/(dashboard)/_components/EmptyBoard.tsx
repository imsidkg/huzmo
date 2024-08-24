"use client";

import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { api } from "../../../../convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const EmptyBoard = () => {
  const router = useRouter()
  const {organization} = useOrganization();
  const create = useMutation(api.board.create);

  const handleClick = () => {
    if(!organization) return null;

    create({
      orgId : organization.id,
      title : 'Untitled' ,
    }).then((id) => {
      toast.success("Board created");
      router.push(`/boards/${id}`);
    })
    .catch(() => {
      toast.error("Failed to create board");
    });
  }
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty" height={110} width={110} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg" onClick={handleClick} >
          Create board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoard