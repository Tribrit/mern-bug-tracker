import { useEffect, useState } from 'react';
import axios from 'axios';
import BugForm from '../components/BugForm';

export default function Home() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bugs').then(res => setBugs(res.data));
  }, []);

  return (
    <div>
      <h1>Bug Tracker</h1>
      <BugForm onBugCreated={(bug) => setBugs([...bugs, bug])} />
      <ul>
        {bugs.map(b => <li key={b._id}>{b.title} - {b.status}</li>)}
      </ul>
    </div>
  );
}
