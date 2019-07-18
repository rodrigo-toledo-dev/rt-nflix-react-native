import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: #212529;
  padding: 10px;
  display: flex;
`;

export const HeaderApplication = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ApplicationText = styled.Text`
  color: #fed136;
  font-family: "Kaushan Script Regular, sans-serif";
  font-size: 20px;
`;

export const GroupMenu = styled.View`
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  align-items: center;
  align-content: space-between;
  display: flex;
`;

export const MenuItem = styled.View`
  background: #fcfcfc;
  width: 80px;
`;
