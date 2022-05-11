import React from 'react';
import {Image, View} from 'react-native';

import {Container, TitleParty, Thumb} from './styles';
import fotoFesta from '../../assets/festa.jpg';
const CardEvent = ({nome, img, ...rest}) => {
  return (
    <Container {...rest}>
      {img && <Thumb source={fotoFesta} />}
      <TitleParty>{nome}</TitleParty>
    </Container>
  );
};

export default CardEvent;
