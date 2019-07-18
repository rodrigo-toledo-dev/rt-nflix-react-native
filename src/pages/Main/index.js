import React from "react";

import {
  Container,
  HeaderApplication,
  FooterApplication,
  ApplicationText,
  GroupMenu,
  MenuItem
} from "./styles";

import { Text, StatusBar } from "react-native";

const Main = () => (
  <Container>
    <StatusBar barStyle="light-content" backgroundColor="#212529" />
    <HeaderApplication />
    <Menu />
    <Main>
    <LastReleased />
    <MostVoted />
    <Main />


  </Container>
);

export default Main;
