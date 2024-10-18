import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, Alert } from 'react-native';

const MargemLucro = ({ route, navigation }) => {
  const { custoVariavel, custosFixos, numeroProdutos } = route.params;
  const [margemLucro, setMargemLucro] = useState('');

  const handleNext = () => {
    // Validação dos campos
    if (!margemLucro) {
      Alert.alert('Erro', 'Por favor, preencha a margem de lucro antes de continuar.');
      return;
    }

    // Navega para a próxima tela se o campo estiver preenchido
    navigation.navigate('ImpostosEncargos', { custoVariavel, custosFixos, numeroProdutos, margemLucro });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Defina a Margem de Lucro</Text>
      <Text style={styles.description}>
        A margem de lucro é o valor que você pretende ganhar sobre o custo de cada produto. A margem pode ser um valor percentual ou um valor fixo.
      </Text>
      <Image source={require('../assets/formula_margem_lucro.png')} style={styles.image} />
      
      <TextInput
        style={styles.input}
        placeholder="Margem de Lucro (%)"
        keyboardType="numeric"
        value={margemLucro}
        onChangeText={setMargemLucro}
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

export default MargemLucro;