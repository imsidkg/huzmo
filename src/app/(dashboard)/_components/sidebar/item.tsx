'use client'
import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  name: string;
  imageUrl: string;
}

const item = ({ id, name, imageUrl }: Props) => {

    const {organization} = useOrganization();
    const {setActive} = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () =>{
        if (!setActive) return null;
        setActive({
            organization: id,
          });
    }
  return (
    <div>
      <Image
      src={imageUrl}
      alt= ''
      onClick={onClick}
      />
    </div>
  );
};

export default item;
