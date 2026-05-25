import { Tabs } from 'expo-router'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import useTheme from '@/hooks/useTheme';

const TabsLayout = () => {
    const { colors } = useTheme();
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textMuted,
            tabBarStyle: {
                backgroundColor: colors.bg,
                borderTopWidth: 1,
                borderTopColor: colors.border,
                height: 90,
                paddingBottom: 30,
                paddingTop: 10
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "600"
            },
            headerShown: false
        }}>
            <Tabs.Screen name='index'
                options={{
                    title: "Todos",
                    tabBarIcon: ({ color, size }) => <Ionicons name="flash-outline" size={size} color={color} />
                }} />

            <Tabs.Screen name='settings'
                options={{ title: "Settings", tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} /> }} />
        </Tabs>
    )
}

export default TabsLayout
