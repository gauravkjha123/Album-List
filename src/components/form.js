import FormStyle from "../style/form.style.module.css";
import { useRef, useState } from "react";

export const Form = ({ value, update = false, updateAlbumFn,addAlbumFn }) => {

  const [title, setTitle] = useState("");
  const titleRef = useRef();

  if (!title && value?.title) {
    setTitle(value.title);
  }
  const handleOnChange = () => {
    setTitle(titleRef.current.value);
  };
  const handleClick = () => {
    if (!titleRef.current.value && !title) {
      alert("Please Enter Title");
    }

    if (update) {
      updateAlbumFn({ id: value.id, title: title });
      return;
    }
    addAlbumFn({ title: title })
    return
  };
  return (
    <>
      <div className={FormStyle.container}>
        <h4>Id: {value?.id}</h4>
        <div className={FormStyle.inpcontainer}>
          Title :
          <input
            required
            value={title}
            ref={titleRef}
            onChange={handleOnChange}
            type="text"
            id="title-inp"
          />
        </div>
        <button onClick={handleClick} className={FormStyle.btn}>
          {update ? "Update" : "Create"}
        </button>
      </div>
    </>
  );
};
