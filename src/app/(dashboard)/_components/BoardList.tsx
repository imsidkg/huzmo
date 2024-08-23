import React from 'react'
import EmptySearch from './EmptySearch';
import EmptyFavourites from './EmptyFavourites';
import EmptyBoard from './EmptyBoard';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

interface BoardListProps {
    orgId: string;
    query: {
      search?: string;
      favourites?: string;
    };
  }

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId, ...query });
    if (!data?.length && query.search) {
        return <EmptySearch/>
      }
    
      if (!data?.length && query.favourites) {
        return <EmptyFavourites/>
      }
    
      if (!data?.length) {
        return <EmptyBoard/>
      }
    
  return (
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
       
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavourite={board.isFavourite}
          />
        ))}
      </div>
  )
}

export default BoardList