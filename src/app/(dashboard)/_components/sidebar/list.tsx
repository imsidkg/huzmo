import { useOrganizationList } from "@clerk/nextjs";
import React from "react";

type Props = {};

const list = (props: Props) => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => {
        return <p key={mem.organization.id}>{mem.organization.name}</p>;
      })}
    </ul>
  );
};

export default list;
