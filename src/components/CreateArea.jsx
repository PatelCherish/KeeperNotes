import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  // Declare state variable for expanding input component
  const [isExpanded, setExpanded] = useState(false);

  // Declare state variable for note entered by user
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Update note to user input 
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // Submit note entered by user
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  // Expand note card
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" autoComplete="off">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;