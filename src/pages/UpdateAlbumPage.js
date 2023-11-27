import UpdateAlbumStyle from "../style/UpdateAndAddAlbum.stype.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateAlbum, albumSelector } from "../redux/reducers/albumReducer";
import { Form } from "../components/form";
import { BackBtn } from "../components/backBtn";

export const UpdateAlbumPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const { albums } = useSelector(albumSelector);
  const album = albums.filter((value) => value.id === Number(id))[0];
  const updateAlbumFn = async (album) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}`, {
      method: "PUT",
      body: JSON.stringify(album),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    dispatch(updateAlbum(album));
    navigate("/");
  };

  return (
    <>
    <BackBtn />
    <div className={UpdateAlbumStyle.container}>
      <Form value={album} update={true} updateAlbumFn={updateAlbumFn} />
    </div>
    </>
  );
};
