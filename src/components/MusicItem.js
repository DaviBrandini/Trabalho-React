import React, { useState } from 'react';

function MusicItem({ index, music, editMusic, deleteMusic }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(music.title);
  const [artist, setArtist] = useState(music.artist);

  const handleSave = () => {
    editMusic(index, { title, artist });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
        </>
      ) : (
        <>
          <span>{music.title} - {music.artist}</span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => deleteMusic(index)}>Remover</button>
        </>
      )}
    </div>
  );
}

export default MusicItem;
