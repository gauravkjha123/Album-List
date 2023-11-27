import CardStyle from "../style/card.Style.module.css";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteAlbum } from "../redux/reducers/albumReducer";
import { NavLink } from "react-router-dom";

export const Card = ({ title = "Hello world", id }) => {
  const dispatch = useDispatch();
  const deleteAlbumFn = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    dispatch(deleteAlbum({ id: id }));
  };
  return (
    <>
      <div className={CardStyle.CardContainer}>
        <div className={CardStyle.textContainer}>
          <h3>{title}</h3>
        </div>
        <div className={CardStyle.iconContainer}>
          <NavLink to={`/update/${id}`} className={CardStyle.editContainer}>
            <span>Update</span>
            <MdModeEditOutline />
          </NavLink>
          <div
            className={CardStyle.deleteContainer}
            onClick={() => {
              deleteAlbumFn(id);
            }}
          >
            <span>Delete</span>
            <MdDelete />
          </div>
        </div>
      </div>
    </>
  );
};
