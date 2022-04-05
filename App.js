import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, View, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.box}>
        <Text>Как дела?</Text>
      </View>

      <StatusBar style="auto" />

    </SafeAreaView>
  );
}


const simpleStyle = {
  backgroundColor: '#ddeeff',
  color: 'black'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  box:{
    backgroundColor: 'lightblue',
    width: '50%',
    height: '50%',
    opacity: 0.9,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#444',
    borderStyle: 'dotted',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '25%',
    left: '25%',
  }
});
