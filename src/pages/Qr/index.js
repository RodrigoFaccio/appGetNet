import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';
import QRCode from 'react-qr-code';
import {useState} from 'react/cjs/react.production.min';
const Qr = () => {
  const [valor, setValor] = useState('teste');
  return (
    <Container>
      <QRCode title="teste" value={valor} />
    </Container>
  );
};

export default Qr;
