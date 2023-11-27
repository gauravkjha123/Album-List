import UpdateAlbumStyle from "../style/UpdateAndAddAlbum.stype.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAlbum } from "../redux/reducers/albumReducer";
import { Form } from "../components/form";
import { BackBtn } from "../components/backBtn";

export const AddAlbumPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addAlbumFn = async (album) => {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify(album),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let newAlbum = await res.json();
    dispatch(addAlbum(newAlbum));
    navigate("/");
  };

  return (
    <>
      <BackBtn />
      <div className={UpdateAlbumStyle.container}>
        <Form addAlbumFn={addAlbumFn} />
      </div>
    </>
  );
};
