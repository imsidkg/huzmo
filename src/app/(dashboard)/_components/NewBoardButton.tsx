"use client";

// import { api } from "@/convex/_generated/api";
// import { useApiMutation } from "@/hooks/useApiMutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
  }

const NewBoardButton = ({orgId , disabled} : NewBoardButtonProps) => {
  return (
    <button
    // disabled={disabled || isLoading}
    // onClick={handleClick}
    className={cn(
      "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
    //   (disabled || isLoading) &&
        "opacity-65 hover:bg-blue-600 cursor-not-allowed"
    )}
  >
    <div />
    <Plus className="h-12 w-12 text-white stroke-1" />
    <p className="text-sm text-white font-light">New board</p>
  </button>
  )
}

export default NewBoardButton