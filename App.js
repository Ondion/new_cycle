import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, TextInput } from 'react-native';
import { useState } from "react"

export default function App() {

  const [state, setState] = useState({ text: "refresh test" });
  const [counter, setCounter] = useState(0);

  return (
    <View style={ styles.container }>
      <ScrollView>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#456',
    alignItems: 'center',
    justifyContent: 'center',
  },
   textArea: {
    backgroundColor: 'white',
   }
});
