'use client'
import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface Props {
 id : string ,
 name : string,
 imageUrl : string
}

const Item = ({id ,  name , imageUrl} : Props) => {
    
    const { organization} = useOrganization();
    const {setActive} = useOrganizationList();

    const isActive = organization?.id === id;

   const onClick = () => {
    if(!setActive) return null;

    setActive({organization : id})
   }
  
  return (
    <div className="aspect-square relative">
    <Image
      src={imageUrl}
      onClick={onClick}
      alt={name}
      fill
      className={cn(
        "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
        isActive && "opacity-100"
      )}
    />
  </div>
  );
};

export default Item;
