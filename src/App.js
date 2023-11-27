import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from './components/navbar';
import { AlbumListPage } from './pages/albumsLIstPage';
import { UpdateAlbumPage } from './pages/UpdateAlbumPage';
import { AddAlbumPage } from './pages/addAlbumPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <AlbumListPage /> },
      {path:"add",element:<AddAlbumPage/>},
      {path:"update/:id",element:<UpdateAlbumPage/>},
      
    ]
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
