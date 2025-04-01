import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Fetch notes from backend
  const fetchNotes = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/notes');
      const data = await res.json();
      console.log('Fetched notes:', data); // 👈 Add this
      setNotes(data);
    } catch (err) {
      console.error('Failed to fetch notes:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Submit new note
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body }),
      });
      if (res.ok) {
        setTitle('');
        setBody('');
        fetchNotes(); // refresh list
      }
    } catch (err) {
      console.error('Error adding note:', err);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>QuickNotes</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }}
        />
        <button
          type="submit"
          style={{
            marginTop: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#222',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add Note
        </button>
      </form>

      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id} style={{ marginBottom: '1rem' }}>
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
