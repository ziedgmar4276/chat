import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import chatMessage from '../../images/chat.svg';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
    
      <h2>connecte avec votre class <span role="img" aria-label="emoji">💬</span></h2>
      <img  id="svg"src={chatMessage} alt="svg" />
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;