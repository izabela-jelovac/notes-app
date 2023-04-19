function Note(id, text, date) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>Datum posljednje izmjene:{date}</small>
      </div>
    </div>
  );
}
export default Note;
