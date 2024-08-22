"use client";
import React from "react";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Hint } from "@/components/Hint";

type Props = {};

const NewButton = (props: Props) => {
  return (
    <Dialog>
    <DialogTrigger>
      <div className="aspect-square">
        <Hint
          label="Create organization"
          side="right"
          align="start"
          sideOffset={18}
        >
          <div className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
            <Plus className="text-white" />
          </div>
        </Hint>
      </div>
    </DialogTrigger>
    <DialogContent className="p-0  border-none max-w-[465px]">
      <CreateOrganization  routing="hash"/>
    </DialogContent>
  </Dialog>
  )
};

export default NewButton;
