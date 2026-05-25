import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'

const index = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Edit app as you want!</Text>
      <Text>hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}><Text>Toggle the mode</Text></TouchableOpacity>
    </View>
  )
}

export default index


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row"

  },
  content: {
    fontSize: 23
  }
})