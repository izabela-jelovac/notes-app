import "./App.css";
import Note from "./Note";
import NotesList from "./NotesList";
import {nanoid} from 'nanoid';
import {useState} from 'react';
import Search from "./Search";
import Header from "./Header";
function App() {
  const[notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note!"
date: "13/04/2023"
  }
{
    id: nanoid()
    text: "This is my second note!"
    date: "15/04/2023"
  };
/* {
    id: nanoid()
    text: "This is my third note!"
    date: "17/04/2023"
  };
{
    id: nanoid()
    text: "This is my fourth note!"
    date: "19/04/2023"
  }; */]);
  const handleClick = (event) => {
    console.log("Click");
  };
  const[searchText, setSearchText]=useState("");
  const addNote = (text)=>{
    const date= new Date();
const newNote={
  id: nanoid,
  text: text,
  date: date.toLocaleDateString()
}
const newNotes=[...notes,newNotes]
setNotes(newNotes)
  }
  const deleteNote = (id)=>{
    const newNotes=notes.filter((note)=>note.id !==id);
    setNotes(newNotes);
  }
  return (
    <div className="container">
      <Header/>
      <Search handleSearchNote={setSearchText}/>
      <button
        className="button-create-new-note"
        type="button"
        onClick={handleClick}
      >
        +create new note
      </button>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      <Note/>
    </div>
  );
}

export default App;
