import React from 'react'

interface BoardListProps {
    orgId: string;
    query: {
      search?: string;
      favourites?: string;
    };
  }

const BoardList = ({ orgId, query }: BoardListProps) => {
    const data= []
    if (!data?.length && query.search) {
        return <div> No item found</div>
      }
    
      if (!data?.length && query.favourites) {
        return <div> No fav found</div>
      }
    
      if (!data?.length) {
        return <div> Nothing at all</div>
      }
    
  return (
  
    <div>  {JSON.stringify(query)}</div>
  )
}

export default BoardList