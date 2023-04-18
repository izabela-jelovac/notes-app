import "./App.css";
import Note from "./Note";
import NotesList from "./NotesList";
function App() {
  const handleClick = (event) => {
    console.log("Click");
  };
  return (
    <div className="App">
      <button
        className="button-create-new-note"
        type="button"
        onClick={handleClick}
      >
        +create new note
      </button>
      <NotesList></NotesList>
      <Note></Note>
    </div>
  );
}

export default App;
