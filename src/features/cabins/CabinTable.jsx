
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";


const CabinTable = () => {
  // const {
  //   isLoading,
  //   data: cabins,
  //   error,
  // } = useQuery({
  //   queryKey: ["cabins"],
  //   queryFn: getCabins,
  // });
  const { isLoading, error, cabins } = useCabins();
  if (isLoading) return <Spinner />;

  if (error) {
    return alert(error);
  }
  return (
    <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'> 
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body data={cabins} render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />} />
      {/* {cabins?.map((cabinData) => (
        <CabinRow key={cabinData.id} cabin={cabinData} />
      ))} */}
    </Table>
  );
};

export default CabinTable;
