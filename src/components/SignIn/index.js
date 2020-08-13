import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Platform, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import {  
  AreaInput,
  Background,
  Container,
  Input,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText,
} from './style';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { user, signIn, loading, setLoading } = useContext(AuthContext);
  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo
          source={{
            uri:
              "https://img2.pngio.com/free-cash-icon-transparent-download-free-clip-art-free-clip-art-cash-symbol-png-1201_1202.png",
          }}
        />
        {loading ? <ActivityIndicator size="large" style={{ position: 'absolute'}} color="#00b94a" /> : null } 
        <AreaInput>
          <Input
            placeholder={'E-mail'}
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
        <SubmitButton onPress={() => {
          signIn(),
          setLoading(true)
        }}>
          <SubmitText>{loading ? 'Entrando...' : 'Acessar'}</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar conta gratuita</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
