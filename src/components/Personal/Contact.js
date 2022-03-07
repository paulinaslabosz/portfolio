import React from 'react';
import { Wrapper } from './Contact.styles.js';
import { ReactComponent as EmailIcon } from '../../assets/mailIcon.svg';
import { ReactComponent as GithubIcon } from '../../assets/githubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedinIcon.svg';

const Contact = () => (
  <Wrapper>
    <a href="mailto:pslabosz2@gmail.com">
      <EmailIcon />
    </a>
    <a href="https://github.com/paulinaslabosz" target="_blank" rel="noopener noreferrer">
      <GithubIcon />
    </a>
    <a href="https://www.linkedin.com/in/paulina-slabosz/" target="_blank" rel="noopener noreferrer">
      <LinkedinIcon />
    </a>
  </Wrapper>
);

export default Contact;
