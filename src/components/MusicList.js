import React from 'react';
import MusicItem from './MusicItem';

function MusicList({ musicList, editMusic, deleteMusic }) {
  return (
    <div>
      {musicList.map((music, index) => (
        <MusicItem
          key={index}
          index={index}
          music={music}
          editMusic={editMusic}
          deleteMusic={deleteMusic}
        />
      ))}
    </div>
  );
}

export default MusicList;
