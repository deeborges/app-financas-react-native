import React, { useContext } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import styled from 'styled-components/native';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import HeaderToggle from '../../components/Header';

const Container = styled.View`
  flex: 1;
  background-color: #131313;
  align-items: center;
`;

const Nome = styled.Text`
  text-align: center;
  font-size: 28px;
  margin: 25px 0;
  color: #fff;
`;

const NewLink = styled.TouchableOpacity`
align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #00b94a;
  width: 90%;
`;

const NewLinkTest = styled.Text`
  color: #fff;
`;

const Logout = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #ed1b1b;
  width: 90%;
`;

export default function index() {
  const navigation = useNavigation();
  const { user, setUser, setLoading } = useContext(AuthContext);
  return (
    <Container>
      <HeaderToggle />
      <Nome>
        {user.nome}
      </Nome>
      <NewLink>
        <NewLinkTest> Registrar gastos</NewLinkTest>
      </NewLink>
      <Logout onPress={ async () => {
          await AsyncStorage.removeItem('token');
          setUser(null);
          setLoading(false)
          // navigation.navigate('Sign In')
        }}>
        <NewLinkTest >
          Sair
        </NewLinkTest>
      </Logout>
    </Container>
  )
}
