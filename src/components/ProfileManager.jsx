import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileManager = () => {
  const [profiles, setProfiles] = useState([]);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    axios.get('/api/profiles')
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profiles!', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/profiles', { name, bio, contact })
      .then(response => {
        setProfiles([...profiles, response.data]);
      })
      .catch(error => {
        console.error('There was an error creating the profile!', error);
      });
  };

  return (
    <div>
      <h2>Profile Manager</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile._id}>{profile.name} - {profile.bio} - {profile.contact}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
          required
        />
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact"
          required
        />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default ProfileManager;
