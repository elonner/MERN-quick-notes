import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <Link to='/notes'>Notes</Link>
            &nbsp;|&nbsp;
            <Link to ='/logout'>Log Out</Link>
            <Routes>
              {/* Route components in here */}
              <Route path="/logout" element={<UserLogOut user={user} setUser={setUser} />} />
              <Route path="/notes" element={<NotesPage user={user} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
