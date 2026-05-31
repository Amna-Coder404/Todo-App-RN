import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Ionicons } from '@expo/vector-icons';

const DangerZone = () => {
    const { colors } = useTheme();
    const settingStyle = createSettingsStyles(colors);

    const clearAllTodos = useMutation(api.todos.clearAllTodos);

    // This Will Reset Our App
    const handleDeleteTodo = () => {
        Alert.alert(" Reset App", "⚠️ This will delete ALL your todos permanently. This action cannot be undone.",
            [
                {
                    text: 'Cancel',
                    style: 'cancel',

                },
                {
                    text: 'Delete All',
                    onPress: async () => {
                        try {
                            const result = await clearAllTodos();
                            Alert.alert("App Reset",    `Successfully deleted ${result.deleteTodosCount} todo${result.deleteTodosCount === 1 ? "" : "s"}. Your app has been reset.`)
                        }
                        catch (error) {
                            console.log("Error deleting all todos", error);
                            Alert.alert("ERROR", "Failed to reset app")
                        }
                    },
                    style: "destructive"

                },
            ],
        );
    }


    return (
        <LinearGradient colors={colors.gradients.background} style={settingStyle.section}>
            <Text style={settingStyle.sectionTitleDanger}>Danger Zone</Text>

            <TouchableOpacity
                style={[settingStyle.actionButton, { borderBottomWidth: 0 }]}
                onPress={handleDeleteTodo}
                activeOpacity={0.7}>
                <View style={settingStyle.actionLeft}>
                    <LinearGradient colors={colors.gradients.danger} style={settingStyle.actionIcon}>
                        <Ionicons name='trash' size={18} color={"#fff"} />
                    </LinearGradient>
                    <Text style={settingStyle.actionTextDanger}>Reset App</Text>
                </View>
                <Ionicons name='chevron-forward' size={18} color={colors.textMuted}/>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default DangerZone
