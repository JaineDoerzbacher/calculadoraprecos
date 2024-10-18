import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const EntendaCustos = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('CustoTotal');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Entenda seus Custos</Text>
      <Text style={styles.description}>
        Antes de definir o preço, é essencial conhecer todos os custos envolvidos no processo de produção ou aquisição de seus produtos. Isso inclui:
      </Text>
      <Text style={styles.description}>
        <Text style={styles.bold}>Custos Fixos:</Text> Aqueles que não variam de acordo com o número de unidades vendidas, como aluguel, contas de energia, internet, salários, seguros, etc.
      </Text>
      <Text style={styles.description}>
        <Text style={styles.bold}>Custos Variáveis:</Text> Custos diretamente relacionados à produção ou venda de cada unidade do produto, como matéria-prima, embalagem, frete, comissões de vendas, entre outros.
      </Text>
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
  bold: {
    fontWeight: 'bold',
  },
});

export default EntendaCustos;