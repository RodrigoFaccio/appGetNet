import React, {useEffect, useState, useContext} from 'react';
import {FlatList, View} from 'react-native';
import CardEvent from '../../components/CardEvent';
import {Divider} from '../../components/CardMenu/styles';

import {Container} from './styles';
import axios from 'axios';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {CartContext} from '../../Context/Cart';

const Ingressos = () => {
  const {addToCart, cartCont, valor, clearCart} = useContext(CartContext);

  const navigation = useNavigation();
  const [festas, setFestas] = useState();
  console.log(festas);
  useFocusEffect(
    React.useCallback(() => {
      clearCart();
      async function getParty() {
        const {data} = await axios.get(
          'https://eventimix.com.br/api/eventos.php',
        );
        console.log(data.users[0].evento);
        setFestas(data.users);
      }
      getParty();
    }, []),
  );

  return (
    <Container>
      <FlatList
        style={{width: '100%', marginLeft: '5%'}}
        data={festas}
        renderItem={({item}) => {
          console.log(item.evento);
          return (
            <>
              <CardEvent
                img={true}
                nome={item.evento}
                onPress={() => navigation.navigate('Payment', item)}
              />
              <Divider />
            </>
          );
        }}
      />
    </Container>
  );
};

export default Ingressos;
