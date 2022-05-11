import React from 'react';
import {TextInput, View} from 'react-native';

import {Container, Input} from './styles';

const Inputs = ({...rest}) => {
  return (
    <Container {...rest}>
      <Input {...rest} />
    </Container>
  );
};

export default Inputs;
