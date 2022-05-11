import React, {useContext} from 'react';
import {View} from 'react-native';
import AuthContext from '../Context/AuthProvider/LoginContext';
import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';

// import { Container } from './styles';

const Routes = () => {
  const {signed} = useContext(AuthContext);
  // SE O USUARIO EXISTIR EU MANDO ELE PARA UM NO ESQUEMA DE ROTAS
  //APP ROUTES SE EXISTIR E ATUH ROUTES SE NÃO
  return <AppRoutes />;
};

export default Routes;
