import {React, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState(0)
  const [number, setNumber] = useState(0)
  const [guesses, setGuesses] = useState(1)
  const [text, setText] = useState("")

  useEffect(() => {
    startGame();
  }, [])

  const startGame = () => {
    const randomNumber = Math.floor(Math.random()*100) + 1
    setNumber(randomNumber)
    setGuesses(1)
    setText('Guess a number between 1 - 100')
  }

  const testGuess = () => {
    if(guess>number){
      setText('Your guess ' + guess + ' is too high' )
      setGuesses(guesses +1)
    } else if (guess<number){
      setText('Your guess ' + guess + ' is too low' )
      setGuesses(guesses +1)
    } else {
      Alert.alert('','You guessed the number in ' + guesses + ' guesses')
      startGame();
    }
    setGuess('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput style={styles.input} keyboardType="number-pad" value={guess} onChangeText={guess => setGuess(guess)}/>
      <View style={styles.button}>
        <Button title="Make a guess" onPress={testGuess} color='white' />
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
    justifyContent: 'center',
  },
  input: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    backgroundColor: 'black',
    margin: 15,
  },
  text: {
    fontSize: 15,
    margin: 10,
    fontWeight: 'bold'
  }
});
