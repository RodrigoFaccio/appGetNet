import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import {Container, Title, ViewInputs} from './styles';

const Login = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Login</Title>

      <ViewInputs>
        <Inputs placeholder="Email" />
        <Inputs placeholder="Senha" />
        <Button onPress={() => navigation.navigate('Ingressos')}>Entrar</Button>
      </ViewInputs>
    </Container>
  );
};

export default Login;
