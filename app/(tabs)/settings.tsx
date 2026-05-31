import { createSettingsStyles } from '@/assets/styles/settings.styles';
import DangerZone from '@/components/DangerZone';
import Performances from '@/components/Performances';
import ProgressStats from '@/components/ProgressStats';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, version } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingScreen = () => {
  const { colors } = useTheme();
  const settingStyle = createSettingsStyles(colors);



  return (
    <LinearGradient colors={colors.gradients.background} style={settingStyle.container}>
      <SafeAreaView style={settingStyle.safeArea}>
        {/* HEADER */}
        <View style={settingStyle.header}>
          <View style={settingStyle.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingStyle.iconContainer}>
              <Ionicons name='settings' size={28} color={"#fff"} />
            </LinearGradient>
            <Text style={settingStyle.title}>Settings</Text>
          </View>
        </View>


        {/* PROGRESS STATS */}
        <ScrollView
          style={settingStyle.scrollView}
          contentContainerStyle={settingStyle.content}
          showsVerticalScrollIndicator={false}>

          {/* Progress Stats */}
          <ProgressStats />

          {/* PREFERENCE */}
          <Performances />

          {/*  DANGER ZONE*/}
          <DangerZone />

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SettingScreen