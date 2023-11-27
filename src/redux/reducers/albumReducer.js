import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  albums: [],
}

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    fetchAlbums: (state,action) => {
      state.albums = [...action.payload];
    },
    addAlbum: (state,action) => {
      state.albums.push(action.payload)
    },
    updateAlbum: (state, action) => {
      let album=state.albums.filter((value)=>value.id===action.payload.id)[0]
      album.title=action.payload.title;
    },
    deleteAlbum: (state, action) => {
      console.log(action);
        let index=state.albums.findIndex((value)=>value.id===action.payload.id)
        state.albums.splice(index,1);
      },
  },
})

export const { fetchAlbums, addAlbum, updateAlbum, deleteAlbum } = albumSlice.actions
export const albumSelector = (state) => state.albumReducer;
export default albumSlice.reducer