import NavBarStyle from "../style/navbar.style.module.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAlbums } from "../redux/reducers/albumReducer";
import { useEffect } from "react";

export const NavBar = () => {
  const dispatch = useDispatch();
  const fetchAlbumsFromApi = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let albums = await res.json();
    dispatch(fetchAlbums(albums));
  };
  useEffect(() => {
    fetchAlbumsFromApi();
  }, []);
  return (
    <>
      <div className={NavBarStyle.navContainer}>
        <div className={NavBarStyle.navNameContainer}>
          <div className={NavBarStyle.firstHalfName}>
            <h2>Album</h2>
          </div>
          <div className={NavBarStyle.secondHalfName}>
            <h2>List</h2>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
