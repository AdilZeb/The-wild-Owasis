
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
const AddCabin = () => {
  return <div>
    <Modal>
    <Modal.Open opens='cabin-form'>
      <Button >Add new Cabin</Button>
    </Modal.Open>
    <Modal.Window name='cabin-form'>
      <CreateCabinForm></CreateCabinForm>
    </Modal.Window>
  </Modal>
    </div>
};

// const AddCabin = () => {
//   const [isOpenModel, setIsOpenModel] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModel(true)}>Add new cabin</Button>
//       {isOpenModel && (
//         <Model onClose={()=> setIsOpenModel(false)}>
//           <CreateCabinForm onCancleModel={()=> setIsOpenModel(false)}></CreateCabinForm>
//         </Model>
//       )}
//     </div>
//   );
// };

export default AddCabin;
