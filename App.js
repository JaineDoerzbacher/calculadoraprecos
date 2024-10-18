import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BoasVindas from './components/BoasVindas';
import EntendaCustos from './components/EntendaCustos';
import CustoTotal from './components/CustoTotal';
import MargemLucro from './components/MargemLucro';
import ImpostosEncargos from './components/ImpostosEncargos';
import ResultadoFinal from './components/ResultadoFinal';
import Sobre from './components/Sobre'; // Importando a tela "Sobre"
import useCalculoPrecoVenda from './hooks/useCalculoPrecoVenda';

const Stack = createStackNavigator();

const App = () => {
  const [custoTotal, setCustoTotal] = useState(0);
  const [margemLucro, setMargemLucro] = useState(0);
  const [impostos, setImpostos] = useState(0);
  const precoVenda = useCalculoPrecoVenda(custoTotal, margemLucro, impostos);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoasVindas">
        <Stack.Screen name="BoasVindas" component={BoasVindas} />
        <Stack.Screen name="EntendaCustos" component={EntendaCustos} />
        
        {/* Use children instead of component prop */}
        <Stack.Screen name="CustoTotal">
          {(props) => <CustoTotal {...props} setCustoTotal={setCustoTotal} />}
        </Stack.Screen>
        
        <Stack.Screen name="MargemLucro">
          {(props) => <MargemLucro {...props} setMargemLucro={setMargemLucro} />}
        </Stack.Screen>
        
        <Stack.Screen name="ImpostosEncargos">
          {(props) => <ImpostosEncargos {...props} setImpostos={setImpostos} />}
        </Stack.Screen>
        
        <Stack.Screen name="ResultadoFinal">
          {(props) => <ResultadoFinal {...props} precoVenda={precoVenda} />}
        </Stack.Screen>
        
        <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre o App' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;