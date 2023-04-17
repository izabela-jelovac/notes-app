import "./App.css";
import Notes from "./Notes";
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
      <Notes></Notes>
    </div>
  );
}

export default App;
