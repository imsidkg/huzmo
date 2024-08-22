import React from 'react'
import Image from "next/image";
type Props = {}

const EmptyBoard = (props: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-favourites.svg" alt="Empty" height={140} width={140} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
       Start by creating your board for your organization
      </p>
    </div>
  )
}

export default EmptyBoard