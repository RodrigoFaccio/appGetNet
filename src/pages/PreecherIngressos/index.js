import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import {Container, ViewForm, Input} from './styles';
import QRCode from 'react-native-qrcode-svg';
const PreecherIngressos = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [gerar, setGerar] = useState(false);
  console.log(nome);
  console.log(cpf);

  return (
    <Container>
      <Text style={{fontSize: 30}}>Preencher ingressos</Text>

      <ViewForm>
        <Inputs
          placeholder="Nome"
          value={nome}
          onChageText={e => setNome(e.target.value)}
        />
        <Inputs
          placeholder="Cpf"
          value={cpf}
          onChageText={e => setCpf(e.target.value)}
        />
      </ViewForm>

      <Button onPress={() => setGerar(!gerar)}>Gerar ingressos</Button>
      {gerar && (
        <QRCode
          value={nome}
          size={250}
          color="black"
          backgroundColor="white"
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
      )}
    </Container>
  );
};

export default PreecherIngressos;
