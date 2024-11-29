import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filte/sorting</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setOpen(true)}>Add new cabin</Button>
      </Row>
      {open && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
