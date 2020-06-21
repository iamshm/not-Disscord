import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Not Discord</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Start Chatting</button>
        </Link>
      </div>
      <div className="dialogueBar">
        <h1 className="dialogue">Made With </h1><FavoriteIcon className="heartIcon" color="secondary" />
      </div>
    </div>
  );
}
