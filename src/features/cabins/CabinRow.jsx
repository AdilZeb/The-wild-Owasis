/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateCabinForm from "./CreateCabinForm";
import { useDeletingCabin } from "./useDeletingCabin";
import { HiPencilSquare, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabins } from "./useCreateCabins";
import Table from "../../ui/Table";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
 
  const { isDeleting, deleteCabin } = useDeletingCabin();
  const { isCreating, createnewCabin } = useCreateCabins();
  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

  function handleDuplicate() {
    createnewCabin({
      name: `duplicate of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }
  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits upto {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>
          <Modal>
            <Modal.Open opens="edit">
              <button>
                <HiPencilSquare />
              </button>
              </Modal.Open>
              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>
              <Modal.Open opens="delete">

              <button
               
                >
                <HiTrash />
              </button>
                </Modal.Open>
                <Modal.Window name="delete">
                  <ConfirmDelete
                    resourceName={"cabin"}
                    onConfirm={() => deleteCabin(cabinId)}
                    disabled={isDeleting}
                  />
                </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
      {/* {edit && <CreateCabinForm cabinToEdit={cabin} />} */}
    </>
  );
};

export default CabinRow;
