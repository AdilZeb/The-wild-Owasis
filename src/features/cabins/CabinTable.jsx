
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";


const CabinTable = () => {
  // const {
  //   isLoading,
  //   data: cabins,
  //   error,
  // } = useQuery({
  //   queryKey: ["cabins"],
  //   queryFn: getCabins,
  // });
  const [serchParams] = useSearchParams();
  const { isLoading, error, cabins } = useCabins();
  if (isLoading) return <Spinner />;
  
  if (error) {
    return alert(error);
  }
  // filter 
  const  filterValue= serchParams.get('discount') || 'all'
  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if(filterValue === 'no-discount') filteredCabins= cabins.filter(cabin=> cabin.discount ===0);
  if(filterValue === 'with-discount') filteredCabins = cabins.filter(cabin => cabin.discount > 0);
  // sort By
  const sortBy = serchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier= direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
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
      <Table.Body data={sortedCabins} render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />} />
      {/* {cabins?.map((cabinData) => (
        <CabinRow key={cabinData.id} cabin={cabinData} />
      ))} */}
    </Table>
  );
};

export default CabinTable;
