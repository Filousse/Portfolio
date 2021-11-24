import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";


const SocialNetwork = () => {

  const anim = () => {
    let navLinks = document.querySelectorAll('.social-network a');

    navLinks.forEach(link => {
      link.addEventListener('mouseover', (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate( ${attrX}px, ${attrY}px)`;
      })
      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
      })
    })
  }

  return (
    <div className="social-network">
      <ul className="content">
        <a href="https://github.com/Filousse" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-github"></i></li>
        </a>
        <a target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
              <CopyToClipboard text="brasseur.blz@gmail.com" className="hover">
                <li
                  className="fab fa-github"
                  style={{cursor: 'pointer'}}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  <i className="fas fa-at"></i>
                </li>
              </CopyToClipboard>
        </a>
        <a href="https://www.linkedin.com/in/thibault-brasseur-developpeurweb" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i class="fab fa-linkedin"></i></li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;