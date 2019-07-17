import React from 'react';

import { MaxContainer, HeaderApplication, GroupMenu, MenuItem } from './styles';

import {
  Text, Image, StyleSheet, Dimensions, View, StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <MaxContainer>
    <StatusBar barStyle="light-content" backgroundColor="#212529" />
    <HeaderApplication>
      RT NFlix ReactNative
    </HeaderApplication>
    <GroupMenu>
      <MenuItem>
        <Text>Teste</Text>
      </MenuItem>
      <MenuItem>
        <Text>Teste</Text>
      </MenuItem>
    </GroupMenu>
    <Image
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
      }}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.welcome}>Bem-vindo ao Template Básico!</Text>
    <Text style={styles.instructions}>Essa é a tela principal da sua aplicação =)</Text>
    <Text style={styles.instructions}>Você pode editar a tela no arquivo:</Text>
    <Text style={[styles.instructions, styles.fileName]}>src/pages/Main/index.js</Text>
  </MaxContainer>
);

export default Main;
