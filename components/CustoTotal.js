import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, Alert } from 'react-native';

const CustoTotal = ({ navigation }) => {
  const [custoVariavel, setCustoVariavel] = useState('');
  const [custosFixos, setCustosFixos] = useState('');
  const [numeroProdutos, setNumeroProdutos] = useState('');

  const handleNext = () => {
    // Validação dos campos
    if (!custoVariavel || !custosFixos || !numeroProdutos) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos antes de continuar.');
      return;
    }

    // Navega para a próxima tela se todos os campos estiverem preenchidos
    navigation.navigate('MargemLucro', { custoVariavel, custosFixos, numeroProdutos });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Custo Total</Text>
      <Text style={styles.description}>
        O custo total de um produto é a soma dos custos variáveis por unidade mais a parte dos custos fixos atribuída a cada unidade.
      </Text>
      <Image source={require('../assets/formula_custo_total.png')} style={styles.image} />
      
      <TextInput
        style={styles.input}
        placeholder="Custo Variável Unitário (R$)"
        keyboardType="numeric"
        value={custoVariavel}
        onChangeText={setCustoVariavel}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Custos Fixos Totais (R$)"
        keyboardType="numeric"
        value={custosFixos}
        onChangeText={setCustosFixos}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Número de Produtos Vendidos"
        keyboardType="numeric"
        value={numeroProdutos}
        onChangeText={setNumeroProdutos}
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

export default CustoTotal;