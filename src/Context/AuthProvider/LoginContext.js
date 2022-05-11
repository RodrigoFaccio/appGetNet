import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {View, ActivityIndicator} from 'react-native';

const AuthContext = createContext({signed: false, user: {}});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [remove, setRemove] = useState(false);

  const [loading, setLoading] = useState(true);

  function removeMatricular() {
    setRemove(!remove);
  }

  //VERIFICA SE A USUARIOS NO LOCAL STORAGE
  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@Juntou:user');

      await new Promise(resolve => setTimeout(resolve, 2000));

      //SE TIVER USUARIO ELE SETA O setUser
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else if (!storageUser) {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  //SALVA OS DADOS DO USUARIO NO LOCAL STORAGE

  async function signIn(data) {
    console.log('dataaa', data);

    await AsyncStorage.setItem('user', JSON.stringify(data));

    //SE OS DADOS EXISTIREM ELE SETA O setUser
    if (data) {
      setUser(data);
    }
  }

  //LOGOUT DO USUARIO
  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  //ESPERA A FUNCAO loadStorageData() ACABAR
  //E MOSTRA UMA TELA DE LOAD
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }
  // APOS O CARREGAMENTO ELE RETORNA O CONTEXT PROVIDER COM OS DADOS DO USUARIO
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
        removeMatricular,
        remove,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
