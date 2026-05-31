import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';




const Performances = () => {
    const { colors, isDarkMode, toggleDarkMode } = useTheme();
    const settingStyle = createSettingsStyles(colors);

    const [isAutoSync, setIsAutoSync] = useState(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);



    return (
        <LinearGradient colors={colors.gradients.background} style={settingStyle.section}>
            <Text style={settingStyle.sectionTitle}>Preformance</Text>
            {/* DARK MOOD */}
            <View style={settingStyle.settingItem}>
                {/* Left */}
                <View style={settingStyle.settingLeft}>
                    <LinearGradient colors={colors.gradients.primary} style={settingStyle.settingIcon}>
                        <Ionicons name='moon' size={18} color={"#fff"} />
                    </LinearGradient>
                    <Text style={settingStyle.settingText}>Dark Mood</Text>
                </View>
                {/* Right */}
                <Switch
                    thumbColor={"#fff"}
                    trackColor={{ false: colors.border, true: colors.primary }}
                    onValueChange={toggleDarkMode}
                    value={isDarkMode}
                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                />
            </View>

            {/* NOTIFICATIONS */}
            <View style={settingStyle.settingItem}>
                {/* Left */}
                <View style={settingStyle.settingLeft}>
                    <LinearGradient colors={colors.gradients.warning} style={settingStyle.settingIcon}>
                        <Ionicons name='notifications' size={18} color={"#fff"} />
                    </LinearGradient>
                    <Text style={settingStyle.settingText}>Notifications</Text>
                </View>
                {/* Right */}
                <Switch
                    thumbColor={"#fff"}
                    trackColor={{ false: colors.warning, true: colors.primary }}
                    onValueChange={() => setIsNotificationsEnabled(prev => !prev)}
                    value={isNotificationsEnabled}
                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                />
            </View>


            {/* AUTO-SYNC */}
            <View style={settingStyle.settingItem}>
                {/* Left */}
                <View style={settingStyle.settingLeft}>
                    <LinearGradient colors={colors.gradients.success} style={settingStyle.settingIcon}>
                        <Ionicons name='repeat' size={18} color={"#fff"} />
                    </LinearGradient>
                    <Text style={settingStyle.settingText}>Auto Sync</Text>
                </View>
                {/* Right */}
                <Switch
                    thumbColor={"#fff"}
                    trackColor={{ false: colors.success, true: colors.primary }}
                    onValueChange={() => setIsAutoSync(prev => !prev)}
                    value={isAutoSync}
                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                />
            </View>
        </LinearGradient>
    )
}


export default Performances