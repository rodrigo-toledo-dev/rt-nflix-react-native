import React from "react";

import {
  Container,
  HeaderApplication,
  ApplicationText,
  GroupMenu,
  MenuItem
} from "./styles";

import { Text, StatusBar } from "react-native";

const Main = () => (
  <Container>
    <StatusBar barStyle="light-content" backgroundColor="#212529" />
    <HeaderApplication>
      <ApplicationText>RT NaFlix ReactNative</ApplicationText>
      <ApplicationText>aa</ApplicationText>
    </HeaderApplication>
    <GroupMenu>
      <MenuItem>
        <Text>Teste</Text>
      </MenuItem>
      <MenuItem>
        <Text>Teste</Text>
      </MenuItem>
    </GroupMenu>
  </Container>
);

export default Main;
