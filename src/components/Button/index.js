import React from 'react';
import {View, Text} from 'react-native';

import {Container} from './styles';

const Button = ({...rest}) => {
  return (
    <Container {...rest}>
      <Text {...rest} style={{color: 'white', fontSize: 22}} />
    </Container>
  );
};

export default Button;
