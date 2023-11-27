import BackBtntyle from "../style/backBtn.style.module.css";
import { TiArrowBack } from "react-icons/ti";

import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteAlbum } from "../redux/reducers/albumReducer";
import { NavLink } from "react-router-dom";

export const BackBtn = ({ title = "Hello world", id }) => {
  const dispatch = useDispatch();
  const deleteAlbumFn = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    dispatch(deleteAlbum({ id: id }));
  };
  return (
  
      <NavLink to ="/" className={BackBtntyle.continer}>
      <TiArrowBack className={BackBtntyle.backIcon} />
      </NavLink>
   
  );
};
