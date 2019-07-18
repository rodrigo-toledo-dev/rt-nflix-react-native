import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: #212529;
  padding: 10px;
  display: flex;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderGroupMenu = styled.View`
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  align-items: center;
  align-content: space-between;
  display: flex;
`;

export const HeaderMenuItem = styled.View`
  background: #fcfcfc;
  width: 80px;
`;

export const ApplicationText = styled.Text`
  color: #fed136;
  font-family: "Kaushan Script, sans-serif";
  font-size: 30px;
`;
