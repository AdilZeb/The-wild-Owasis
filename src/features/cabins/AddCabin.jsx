import React, { useState } from "react";
import Button from "../../ui/Button";
import Model from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
const AddCabin = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModel(true)}>Add new cabin</Button>
      {isOpenModel && (
        <Model onClose={()=> setIsOpenModel(false)}>
          <CreateCabinForm onCancleModel={()=> setIsOpenModel(false)}></CreateCabinForm>
        </Model>
      )}
    </div>
  );
};

export default AddCabin;
