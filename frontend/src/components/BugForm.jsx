import { useState } from 'react';
import axios from 'axios';

export default function BugForm({ onBugCreated }) {
  const [form, setForm] = useState({ title: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/bugs', form);
    onBugCreated(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <button type="submit">Report Bug</button>
    </form>
  );
}
