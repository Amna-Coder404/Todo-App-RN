import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { createHomeStyles } from '@/assets/styles/home.styles';
import { SafeAreaView } from 'react-native-safe-area-context';


import { LinearGradient } from "expo-linear-gradient"
import Header from '@/components/Header';


const index = () => {
  const { toggleDarkMode, colors } = useTheme();
  const todos = useQuery(api.todos.getTodos);

  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={"default"} />
      <SafeAreaView style={homeStyles.safeArea}>

        <Header />
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle the mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default index


