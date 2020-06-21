import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h2>Not Discord <span role="img" aria-label="emoji">💬</span></h2>
      <h4>Made by iamshm with <span role="img" aria-label="emoji">❤️</span></h4>
      <h5> <a className="link" href="https://www.linkedin.com/in/suraj99/" target="_blank"><LinkedInIcon color="primary" /></a> <a href="https://github.com/iamshm" target="_blank"><GitHubIcon color="primary" /> </a>
        <a href="https://www.instagram.com/iam__shm/" target="_blank"><InstagramIcon color="primary" /> </a>
      </h5>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h3>
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h3>
            </div>
          </div>
        )
        : null
    }
  </div >
);

export default TextContainer;