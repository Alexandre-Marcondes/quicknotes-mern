import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  // Fetch notes from backend
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/notes');
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error('Failed to fetch notes:', err);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>QuickNotes</h1>
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
              <strong>{note.title}</strong>
              <p>{note.body}</p>
              <small>{new Date(note.createdAt).toLocaleString()}</small>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
