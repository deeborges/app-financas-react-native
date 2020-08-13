export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
  width: 80px;
  height: 80px;
  margin: 15px 0;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
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

export const SubmitButton = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  width: 90%;
  border-radius: 8px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #131313;
`;
export const Link = styled.TouchableOpacity`
  margin: 15px 0;
`;
export const LinkText = styled.Text`
  color: #fff;
`;