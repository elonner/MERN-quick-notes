import { useState } from 'react';
import * as notesApi from '../../utilities/notes-api';

export default function NoteForm({ user, notes, setNotes }) {
    const [note, setNote] = useState('');
    const [error, setError] = useState('');


    function handleChange(e) {
        setNote(e.target.value);
        setError('');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const userId = user._id;
        try {
            const newNote = await notesApi.addNote({text: note, user: userId});
            setNotes([...notes, newNote]);
            setNote('');
        } catch (err) {
            setError('Sign Up Failed - Try Again');
        }
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <textarea value={note} onChange={handleChange} name="note" cols="30" rows="10"></textarea>
                <button type='submit'>Add Note</button>
            </form>
            <p>{error}</p>
        </>
    )
}