import React, { useState } from 'react';

function MusicForm({ addMusic }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMusic({ title, artist });
    setTitle('');
    setArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título da Música"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artista"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button type="submit">Adicionar Música</button>
    </form>
  );
}

export default MusicForm;
    