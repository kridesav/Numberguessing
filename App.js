import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

let guesses;
let number;

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Guess a number between 1-100");

  const newGame = () => {
    number = Math.floor(Math.random() * 100) + 1;
    setOutput("Guess a number between 1-100");
    setInput("");
    guesses = 0;
  }

  useEffect(() => {
    newGame();
  }, []);

  const makeGuess = () => {
    const numInput = parseInt(input);
    guesses++;
    if (numInput === number) {
      Alert.alert(`You guessed the number in ${guesses} guesses!`);
      newGame();
    }
    else if (numInput > number) {
      setOutput(`Your guess ${input} is too high`);
    }
    else if (numInput < number) {
      setOutput(`Your guess ${input} is too low`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{output}</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={setInput}
        value={input}
        placeholder="Enter your guess"
        keyboardType='numeric'

      ></TextInput>
      <Button title="MAKE GUESS" onPress={makeGuess}>
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    margin: 10,
    textAlign: 'center',
  },
});
