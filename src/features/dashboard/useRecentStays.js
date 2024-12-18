import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import {  getStaysAfterDate } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useRecentStays() {
    const [useSerchParams] = useSearchParams();
    const numDays = !useSerchParams.get("last") ? 7 : Number(useSerchParams.get("last"));
    const queryDate = subDays(new Date(), numDays).toISOString();
    const { data: stays, isLoading, error } = useQuery({
        queryKey: ["stays", `last-${numDays}`],
        queryFn: () => getStaysAfterDate(queryDate),
    });
    const confirmStays = stays?.filter((stay) => stay.status === "checked-in" || stay.status === "checked-out");
    return { stays, isLoading, error, confirmStays };
}