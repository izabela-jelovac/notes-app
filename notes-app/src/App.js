import "./App.css";
import Notes from "./Notes";
function App() {
  return (
    <div className="App">
      <button className="button-create-new-note" type="button">
        +create new note
      </button>
      <Notes></Notes>
    </div>
  );
}

export default App;
