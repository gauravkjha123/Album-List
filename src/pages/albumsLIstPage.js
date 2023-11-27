import AlbumListStyle from "../style/albumList.style.module.css";
import { Card } from "../components/card";
import { useSelector } from "react-redux";
import { albumSelector } from "../redux/reducers/albumReducer";
import { NavLink } from "react-router-dom";

export const AlbumListPage = () => {
  const { albums } = useSelector(albumSelector);
  
  return (
    <div className={AlbumListStyle.container}>
      <div className={AlbumListStyle.btnContainer}>
        <NavLink to="/add" className={AlbumListStyle.btn}>Add Album</NavLink>
      </div>
      <div className={AlbumListStyle.listContainer}>
        {albums.map((value, index) => (
          <Card key={index} title={value.title} id={value.id} />
        ))}
      </div>
    </div>
  );
};
