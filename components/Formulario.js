import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import useCalculoPrecoVenda from '../hooks/useCalculoPrecoVenda';

const Formulario = ({ navigation }) => {
  const [custoProduto, setCustoProduto] = useState('');
  const [custosFixos, setCustosFixos] = useState('');
  const [custosVariaveis, setCustosVariaveis] = useState('');
  const [margemLucro, setMargemLucro] = useState('');
  const [impostos, setImpostos] = useState('');
  const [precoVenda, setPrecoVenda] = useState(null);
  const [error, setError] = useState(null);

  const { calcularPrecoVenda, calcularPrecoComImpostos } = useCalculoPrecoVenda(custoProduto, custosFixos, custosVariaveis, margemLucro, impostos);

  const handleCalcular = () => {
    const resultado = calcularPrecoVenda();
    if (resultado.error) {
      setError(resultado.error);
      setPrecoVenda(null);
    } else {
      setPrecoVenda(resultado.precoVenda);
      setError(null);
      navigation.navigate('ResultadoFinal', { resultado });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput style={styles.input} placeholder="Custo do Produto (R$)" keyboardType="numeric" value={custoProduto} onChangeText={setCustoProduto} />
      <TextInput style={styles.input} placeholder="Custos Fixos (R$)" keyboardType="numeric" value={custosFixos} onChangeText={setCustosFixos} />
      <TextInput style={styles.input} placeholder="Custos Variáveis (R$)" keyboardType="numeric" value={custosVariaveis} onChangeText={setCustosVariaveis} />
      <TextInput style={styles.input} placeholder="Margem de Lucro (%)" keyboardType="numeric" value={margemLucro} onChangeText={setMargemLucro} />
      <TextInput style={styles.input} placeholder="Impostos (%)" keyboardType="numeric" value={impostos} onChangeText={setImpostos} />
      <Button title="Calcular Preço de Venda" onPress={handleCalcular} />
      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6200EE',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Formulario;