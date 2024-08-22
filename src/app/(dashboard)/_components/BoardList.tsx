import React from 'react'
import EmptySearch from './EmptySearch';
import EmptyFavourites from './EmptyFavourites';

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
        return <EmptySearch/>
      }
    
      if (!data?.length && query.favourites) {
        return <EmptyFavourites/>
      }
    
      if (!data?.length) {
        return <div> Nothing at all</div>
      }
    
  return (
  
    <div>  {JSON.stringify(query)}</div>
  )
}

export default BoardList