import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import {RadioButton} from 'react-native-paper';
import {
  Container,
  ViewType,
  ViewTypePayment,
  TextOptions,
  ViewQuantidade,
  AddButton,
  TextQunatidade,
  ViewCheck,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const Payment = () => {
  const [number, setNumber] = useState(1);
  const [checked, setChecked] = React.useState('pista');
  const [checkedMetodo, setCheckedMetodo] = React.useState('dinheiro');
  const navigation = useNavigation();
  if (number < 0) {
    setNumber(0);
  }
  return (
    <Container>
      <ViewType>
        <ViewCheck onPress={() => setChecked('pista')}>
          <RadioButton
            value="pista"
            status={checked === 'pista' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('pista')}
          />
          <TextOptions>Pista</TextOptions>
        </ViewCheck>

        <ViewCheck onPress={() => setChecked('vip')}>
          <RadioButton
            value="vip"
            status={checked === 'vip' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('vip')}
          />
          <TextOptions>Vip</TextOptions>
        </ViewCheck>
      </ViewType>

      <ViewQuantidade>
        <ViewType>
          <TextOptions style={{fontSize: 25}}>Quantidade</TextOptions>
        </ViewType>

        <AddButton onPress={() => setNumber(number - 1)}>
          <Text style={{fontSize: 30}}>-</Text>
        </AddButton>
        <TextQunatidade>{number}</TextQunatidade>
        <AddButton onPress={() => setNumber(number + 1)}>
          <Text style={{fontSize: 30}}>+</Text>
        </AddButton>
      </ViewQuantidade>
      <ViewTypePayment />
      <View
        style={{
          height: 2,
          width: '90%',
          backgroundColor: 'grey',
          marginLeft: '5%',
        }}
      />
      <ViewType>
        <Text style={{fontSize: 30, marginBottom: 20, marginLeft: 69}}>
          Pagamento
        </Text>
        <ViewCheck onPress={() => setCheckedMetodo('dinheiro')}>
          <RadioButton
            value="pista"
            status={checkedMetodo === 'dinheiro' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMetodo('dinheiro')}
          />
          <TextOptions>Dinheiro</TextOptions>
        </ViewCheck>
        <ViewCheck onPress={() => setCheckedMetodo('debito')}>
          <RadioButton
            value="pista"
            status={checkedMetodo === 'debito' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMetodo('debito')}
          />
          <TextOptions>Debito</TextOptions>
        </ViewCheck>
        <ViewCheck onPress={() => setCheckedMetodo('credito')}>
          <RadioButton
            value="pista"
            status={checkedMetodo === 'credito' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMetodo('credito')}
          />
          <TextOptions>Credito</TextOptions>
        </ViewCheck>
      </ViewType>
      <View
        style={{
          height: 2,
          width: '90%',
          backgroundColor: 'grey',
          marginLeft: '5%',
        }}
      />
      <Button
        onPress={() => navigation.navigate('Produtos')}
        style={{marginLeft: '5%'}}>
        Confirmar
      </Button>
    </Container>
  );
};

export default Payment;
