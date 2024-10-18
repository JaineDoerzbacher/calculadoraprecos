import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultadoFinal = ({ route }) => {
  const { custoVariavel, custosFixos, numeroProdutos, margemLucro, impostos } = route.params;

  const custoTotal = parseFloat(custoVariavel) + parseFloat(custosFixos) / parseFloat(numeroProdutos);
  const precoVenda = custoTotal * (1 + parseFloat(margemLucro) / 100);
  const precoComImpostos = (custoTotal / (1 - parseFloat(impostos) / 100)) * (1 + parseFloat(margemLucro) / 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado Final</Text>
      <Text style={styles.result}>Custo Total do Produto: R$ {custoTotal.toFixed(2)}</Text>
      <Text style={styles.result}>Preço de Venda com Margem de Lucro: R$ {precoVenda.toFixed(2)}</Text>
      <Text style={styles.result}>Preço de Venda com Impostos e Lucro: R$ {precoComImpostos.toFixed(2)}</Text>
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
  result: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
});

export default ResultadoFinal;