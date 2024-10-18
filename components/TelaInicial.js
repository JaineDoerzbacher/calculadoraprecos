import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TelaInicial = ({ navigation }) => {
  const handleSobre = () => {
    navigation.navigate('Sobre');
  };

  const handleVamosLa = () => {
    navigation.navigate('EntendaCustos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <Button title="Vamos lá!" onPress={handleVamosLa} />
      <Button title="Sobre" onPress={handleSobre} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' // Azul claro
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default TelaInicial;