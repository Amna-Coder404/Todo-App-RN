import { createSettingsStyles } from '@/assets/styles/settings.styles';
import ProgressStats from '@/components/ProgressStats';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, version } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingScreen = () => {
  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const settingStlye = createSettingsStyles(colors);

  const [isAutoSync, setIsAutoSync] = useState("");
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);


  return (
    <LinearGradient colors={colors.gradients.background} style={settingStlye.container}>
      <SafeAreaView style={settingStlye.safeArea}>
        {/* HEADER */}
        <View style={settingStlye.header}>
          <View style={settingStlye.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingStlye.iconContainer}>
              <Ionicons name='settings' size={28} color={"#fff"} />
            </LinearGradient>
            <Text style={settingStlye.title}>Settings</Text>
          </View>
        </View>


        {/* PROGRESS STATS */}
        <ScrollView
          style={settingStlye.scrollView}
          contentContainerStyle={settingStlye.content}
          showsVerticalScrollIndicator={false}>
          <ProgressStats />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SettingScreen