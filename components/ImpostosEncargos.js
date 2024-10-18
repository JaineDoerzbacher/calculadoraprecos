import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, Alert } from 'react-native';

const ImpostosEncargos = ({ route, navigation }) => {
  const { custoVariavel, custosFixos, numeroProdutos, margemLucro } = route.params;
  const [impostos, setImpostos] = useState('');

  const handleNext = () => {
    // Validação dos campos
    if (!impostos) {
      Alert.alert('Erro', 'Por favor, preencha os impostos antes de continuar.');
      return;
    }

    // Navega para a próxima tela se o campo estiver preenchido
    navigation.navigate('ResultadoFinal', { custoVariavel, custosFixos, numeroProdutos, margemLucro, impostos });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Considere os Impostos e Encargos</Text>
      <Text style={styles.description}>
        Não esqueça de incluir no cálculo todos os impostos e taxas que podem incidir sobre a venda, como ICMS, ISS, PIS, COFINS, entre outros.
      </Text>
      <Image source={require('../assets/formula_impostos.png')} style={styles.image} />
      
      <TextInput
        style={styles.input}
        placeholder="Impostos (%)"
        keyboardType="numeric"
        value={impostos}
        onChangeText={setImpostos}
      />
      
      <Button title="Próximo" onPress={handleNext} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    marginBottom: 20,
    textAlign: 'justify',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6200EE',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default ImpostosEncargos;