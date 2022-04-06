import React from 'react';

// import { Container } from './styles';

interface Props {
  logo: string;
}

const Logo: React.FC<Props> = ({ logo }) => {
  return <img src={logo} alt="Pokedex React - Logo" />;
};

export default Logo;
