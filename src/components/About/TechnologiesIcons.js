import React from 'react';
import { Wrapper } from './TechnologiesIcons.styles.js';
import HTML from '../../assets/TechnologiesIcons/html.svg';
import CSS from '../../assets/TechnologiesIcons/css.svg';
import GIT from '../../assets/TechnologiesIcons/git.svg';
import GITHUB from '../../assets/TechnologiesIcons/github.svg';
import JAVASCRIPT from '../../assets/TechnologiesIcons/javascript.svg';
import SASS from '../../assets/TechnologiesIcons/sass.svg';
import WEBPACK from '../../assets/TechnologiesIcons/webpack.svg';
import REACT from '../../assets/TechnologiesIcons/react.svg';

const TechnologiesIcons = () => (
  <Wrapper>
    <img src={HTML} alt="HTML icon" />
    <img src={CSS} alt="CSS icon" />
    <img src={JAVASCRIPT} alt="JavaScript icon" />
    <img src={REACT} alt="Vue.js icon" />
    <img src={SASS} alt="Sass icon" />
    <img src={WEBPACK} alt="Webpack icon" />
    <img src={GIT} alt="GIT icon" />
    <img src={GITHUB} alt="GitHub icon" />
  </Wrapper>
);

export default TechnologiesIcons;
