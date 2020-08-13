import React from 'react';
import styled from 'styled-components/native';

import Header from '../Header';

const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

const Container = styled.View`
  margin: 30px;
`;

const Nome = styled.Text`
  font-size: 19px;
  color: #fff;
  font-style: italic;
`;

const Saldo = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

const Titulo = styled.Text`
  color: #00b94a;
`;

export default function Home() {
 return (
   <Background>
     <Header />
     <Container> 
      <Nome>
        Deyvison
      </Nome>
      <Saldo>
        R$ 123.00
      </Saldo>
      <Titulo>Ultimo lançam</Titulo>
     </Container>
   </Background>
  );
}