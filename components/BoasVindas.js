// /components/BoasVindas.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BoasVindas = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EntendaCustos')}>
        <Text style={styles.buttonText}>Comece por aqui</Text>
      </TouchableOpacity>

      {/* Botão para navegar para a tela "Sobre" */}
      <TouchableOpacity style={[styles.button, styles.aboutButton]} onPress={() => navigation.navigate('Sobre')}>
        <Text style={styles.buttonText}>Sobre o App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  aboutButton: {
    backgroundColor: '#03DAC6', // Cor diferente para o botão "Sobre"
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BoasVindas;