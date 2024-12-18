import React from "react";
import Stat from "./Stat";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";

const Stats = ({ bookings, confirmedStays,numDays,cabinCounts }) => {
  const numBookings = bookings?.length;
const sales= bookings?.reduce((acc, curr) => acc + curr?.totalPrice, 0);
const confirmedstays= confirmedStays?.length;
const Occupancyrate= confirmedStays?.reduce((acc, curr) => acc + curr?.numNights, 0)/(numDays*cabinCounts);

  return (
    <>
      <Stat title="Bookings" value={numBookings} color={"blue"} icon={<HiOutlineBriefcase/>}></Stat>
      <Stat title="Sales" value={sales} color={"green"} icon={<HiOutlineBanknotes/>}></Stat>
      <Stat title="Check ins" value={confirmedstays} color={"indigo"} icon={<HiOutlineCalendarDays/>}></Stat>
      <Stat title="Occupancy Rate" value={`${Math.round(Occupancyrate*100)}%`} color={"yellow"} icon={<HiOutlineChartBar/>}></Stat>
     
    </>
  );
};
export default Stats;