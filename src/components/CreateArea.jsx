import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [boo, setboo] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {boo && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={() => {
            setboo(true);
          }}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={boo ? "3" : "1"}
        />
        <Zoom in={boo}>
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
