import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { AuthContext } from '../../contexts/auth';

const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  margin-bottom: 15px;
  width: 80px;
  height: 80px;
  margin: 15px 0;
`;

const AreaInput = styled.View`
  flex-direction: row;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.20)",
})`
  background: rgba(0, 0, 0, 0.2);
  width: 90%;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 17px;
`;

const SubmitButton = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  width: 90%;
  border-radius: 8px;
`;

const SubmitText = styled.Text`
  font-size: 20px;
  color: #131313;
`;

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { criarUsuario } = useContext(AuthContext);

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChange={(text) => setNome(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChange={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={senha}
            onChange={(text) => setSenha(text)}
          />
        </AreaInput>
        <SubmitButton onPress={() => criarUsuario(nome, email, senha)}> 
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
