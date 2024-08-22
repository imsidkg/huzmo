import React from 'react'

interface BoardListProps {
    orgId: string;
    query: {
      search?: string;
      favourites?: string;
    };
  }

const BoardList = ({ orgId, query }: BoardListProps) => {
  return (
  
    <div>  {JSON.stringify(query)}</div>
  )
}

export default BoardList