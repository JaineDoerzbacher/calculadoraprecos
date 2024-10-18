import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Sobre = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.description}>
        Este aplicativo foi desenvolvido para ajudar você a entender melhor os custos envolvidos na produção ou aquisição de seus produtos. 
        Ele permite calcular o preço de venda sugerido com base nos custos fixos e variáveis, garantindo que você tenha uma margem de lucro adequada.
      </Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6200EE',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 20,
  },
});

export default Sobre;