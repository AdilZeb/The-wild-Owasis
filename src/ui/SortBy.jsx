/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import Select from "./Select"

const SortBy = ({options}) => {
    const [serchParams,setSerchParams]= useSearchParams();
    const sortBy = serchParams.get("sortBy")|| "";
    function handleClick(e) {
        serchParams.set("sortBy",e.target.value);
        setSerchParams(serchParams);
    }
  return (
    <Select options={options} value={sortBy} type='white' onChange={handleClick}></Select>
  )
}

export default SortBy