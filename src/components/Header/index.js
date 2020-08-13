import React from "react";
import Icon from "react-native-vector-icons/Feather";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  margin: 20px;
  width: 100%;
  height: 50px;
`;

const ButtonMenu = styled.TouchableWithoutFeedback`
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.toggleDrawer()}>
        <Icon name={'menu'} color="#fff" size={30}  style={{ margin: 20 }}/>
      </ButtonMenu>
    </Container>
  );
}
