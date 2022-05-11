import React from 'react';
import {View} from 'react-native';
import CardMenu from '../../components/CardMenu';
import {Container} from './styles';

const Menu = () => {
  return (
    <Container>
      <CardMenu title="Painel de controle" />
      <CardMenu title="Vender Ingresso" />
      <CardMenu title="Eventos" />
      <CardMenu title="Vender Bar" />
      <CardMenu title="Check In" />
      <CardMenu title="Relatorio " />
    </Container>
  );
};

export default Menu;
