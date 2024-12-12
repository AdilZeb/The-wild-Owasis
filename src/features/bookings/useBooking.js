import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBooking() {
    const querClient= useQueryClient();
    const [serchParams] = useSearchParams();
    //Filtring
    const filterValue= serchParams.get('status');
    const filter= !filterValue || filterValue === 'all' ? null: {field: 'status', value :filterValue};
    //Sorting
    const sortByRaw= serchParams.get('sortBy');
    const [field,direction]= sortByRaw?.split('-') || ['startDate', 'desc'];
    const sortBy= {field, direction};
    //Pagination
    const page = !serchParams.get('page') ? 1 : Number(serchParams.get('page'));
const {isLoading, data:{data:bookings, count}={}}= useQuery({
    queryKey: ['bookings', filter, sortBy,page],
    queryFn:()=>getBookings({filter, sortBy,page}),
})
const pageCount= Math.ceil(count / PAGE_SIZE);
if(page < pageCount)
querClient.prefetchQuery({
    queryKey: ['bookings', filter, sortBy,page+1],
    queryFn:()=>getBookings({filter, sortBy,page:page+1}),
})
if(pageCount > 1)
    QueryClient.prefetchQuery({
        queryKey:['bookings',filter,sortBy,page-1],
        queryfn:()=> getBookings(filter,sortBy, page-1)
    })
return {isLoading, bookings ,count}; ;
}