import React, {useEffect, useState, useContext} from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import CardEvent from '../../components/CardEvent';
import {Divider} from '../../components/CardMenu/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import addButton from '../../assets/icons8-add-96.png';
import subButton from '../../assets/icons8-minus-96.png';

import {
  Container,
  ViewQuantidade,
  ViewType,
  TextOptions,
  AddButton,
  TextQunatidade,
  ValueText,
  ViewCart,
  ViewValorCart,
  ValorText,
  ViewQuantCart,
} from './styles';

import axios from 'axios';
import {CartContext} from '../../Context/Cart';
import {useFocusEffect} from '@react-navigation/native';
const Produtos = () => {
  const {addToCart, cartCont, valor, clearCart} = useContext(CartContext);
  const [festas, setFestas] = useState();
  const [number, setNumber] = useState(1);
  const [cart, setCart] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false);
  console.log('carrooo', cartCont);
  const [newFestas, setNewFestas] = useState();
  const festasAdd = [];

  if (number < 0) {
    setNumber(0);
  }
  useFocusEffect(
    React.useCallback(() => {
      clearCart();

      async function getParty() {
        const {data} = await axios.get(
          'https://eventimix.com.br/api/eventos_produtos.php',
        );
        setFestas(data.users);
      }

      getParty();
    }, []),
  );

  useEffect(() => {}, []);
  console.log('carttttt', cartCont.length);

  const handleChange = (item, d) => {
    const ind = festas.indexOf(item);
    const arr = festas;
    arr[ind].quant_cart += d;

    if (arr[ind].quant_cart === -1) {
      arr[ind].quant_cart = 0;
    }
    setLoadingCart(!loadingCart);

    setFestas([...arr]);
    addToCart(item, ind, d);
  };

  return (
    <Container>
      <FlatList
        style={{width: '100%', marginLeft: '5%'}}
        data={festas}
        renderItem={({item}) => {
          return (
            <>
              <ViewQuantidade>
                <ViewType>
                  <TextOptions>{item.produto}</TextOptions>
                  <ValueText>R${item.preco}</ValueText>
                </ViewType>
                <AddButton onPress={() => handleChange(item, -1)}>
                  <Image
                    style={{width: 30, height: 30, marginTop: 10}}
                    source={subButton}
                  />
                </AddButton>
                <TextQunatidade>{item.quant_cart}</TextQunatidade>
                <AddButton onPress={() => handleChange(item, +1)}>
                  <Image
                    style={{width: 30, height: 30, marginTop: 10}}
                    source={addButton}
                  />
                </AddButton>
              </ViewQuantidade>
              <Divider />
            </>
          );
        }}
      />

      <ViewCart>
        <ViewValorCart>
          <Text style={{color: 'white'}}>Finalizar</Text>
          <ValorText>R${valor}</ValorText>
        </ViewValorCart>
      </ViewCart>
    </Container>
  );
};

export default Produtos;
