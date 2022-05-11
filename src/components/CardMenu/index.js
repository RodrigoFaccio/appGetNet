import React from 'react';
import {View, Text} from 'react-native';

import {Container, Divider, Title} from './styles';

const CardMenu = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Divider />
    </Container>
  );
};

export default CardMenu;
