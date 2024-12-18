import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useRecentBookings() {
    const [useSerchParams] = useSearchParams();
    const numDays = !useSerchParams.get("last") ? 7 : Number(useSerchParams.get("last"));
    const queryDate = subDays(new Date(), numDays).toISOString();
    const { data: bookings, isLoading, error } = useQuery({
        queryKey: ["bookings", `last-${numDays}`],
        queryFn: () => getBookingsAfterDate(queryDate),
    });
    return { bookings, isLoading, error ,numDays};
}