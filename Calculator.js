import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard } from 'react-native';


export default function Calculator({ navigation }) {

  const [result, setResult] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [data, setData] = useState([]);


  const sumValues = () => {
    let result = 0;
    result = parseInt(first) + parseInt(second);
    setResult(result);
    const text = `${first} + ${second} = ${result}`;
    setData([...data, text]);
    console.log(text);
    setFirst('');
    setSecond('');
    Keyboard.dismiss()
  };

  const decreaseValues = () => {
    let result = 0;
    result = parseInt(first) - parseInt(second);
    setResult(result);
    const text = `${first} - ${second} = ${result}`;
    setData([...data, text]);
    console.log(text);
    setFirst('');
    setSecond('');
    Keyboard.dismiss()
  };

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Result: {result}</Text>
    <TextInput keyboardType="numeric" style={styles.input}
      onChangeText={first => setFirst(first)} value={first} />
    <TextInput keyboardType="numeric" style={styles.input}
      onChangeText={second => setSecond(second)} value={second} />

    <View style={styles.calcButtons}>
      <Button onPress={sumValues} title="+" />
      <Button onPress={decreaseValues} title="-" />
      <Button
        title="History"
        onPress={() => navigation.navigate('History', { data })}
      />
    </View>

    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 10,
    },
    calcButtons: {
      flexDirection: 'row',
      gap: 20,
    },
    input : {
      width: 200, 
      borderColor: 'gray', 
      borderWidth: 1
    },
    header : {
      fontSize: 15,
      fontWeight: 'bold',
    },
  });