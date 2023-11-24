import axios from 'axios';
import { useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';

const useFavorite = ({
    listingId, 
    currentUser
}) => {
  
    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(listingId);
    },[currentUser, listingId])

}

export default useFavorite;