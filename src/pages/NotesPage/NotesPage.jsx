import {useState, useEffect} from 'react';
import NoteForm from '../../components/NoteForm/NoteForm';
import * as notesApi from '../../utilities/notes-api';

export default function NotesPage({user}) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getNotes() {
          const notes = await notesApi.getNotes();
          setNotes(notes);
        }
        getNotes();
      }, []);

    return (
        <>
            {notes.length ? ( 
                <>
                    <h1>Notes</h1>
                </>
            ) : (
                <>
                    <h1>No Notes Yet</h1>
                </>
            )}
            <NoteForm user={user} notes={notes} setNotes={setNotes} />
            <ul>
                {notes.map(note => {
                    const noteDate = new Date(note.createdAt);
                    return <li key={Date.now()+Math.random()}>{note.text}, {noteDate.toLocaleDateString()}</li>;
                })}
            </ul>
        </>
    );
}