import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [total, setTotal] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const totalAmount = parseFloat(total);
    const numPeople = parseInt(people);
    const tipPercent = parseFloat(tip) || 0;

    if (!totalAmount || !numPeople || numPeople <= 0) {
      setResult('Por favor, insira valores válidos.');
      return;
    }

    const tipValue = totalAmount * (tipPercent / 100);
    const finalAmount = totalAmount + tipValue;
    const perPerson = finalAmount / numPeople;

    setResult(`Cada pessoa deve pagar R$ ${perPerson.toFixed(2)}`);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>

      <Text style={styles.title}>DivApp - Dividir Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor total da conta (R$)"
        keyboardType="numeric"
        value={total}
        onChangeText={setTotal}
      />

      <TextInput
        style={styles.input}
        placeholder="Número de pessoas"
        keyboardType="numeric"
        value={people}
        onChangeText={setPeople}
      />

      <TextInput
        style={styles.input}
        placeholder="Taxa de serviço (%) - opcional"
        keyboardType="numeric"
        value={tip}
        onChangeText={setTip}
      />

      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {result && <Text style={styles.result}>{result}</Text>}
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },
});