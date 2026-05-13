const PinArchiveNote = ({ note, onPin, onArchive }) => {
  return (
    <div className={`note-card ${note.isPinned ? 'pinned' : ''}`}>
      <div className="actions">

 <button onClick={() => onPin(note.id)}

          className={note.isPinned ? 'active' : ''}
        >
          📌 {note.isPinned ? 'Pinned' : 'Pin'}
          
        </button>
 <button onClick={() => onArchive(note.id)}

          className={note.isArchived ? 'archived' : ''} >

          📦 {note.isArchived ? 'Unarchive' : 'Archive'}

        </button>
      </div>
      <h3>{note.title}</h3>

      <p>{note.content}</p>
    </div>
  );
};

export default PinArchiveNote;
