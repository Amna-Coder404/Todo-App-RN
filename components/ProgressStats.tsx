import { View, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ProgressStats = () => {
    const { colors } = useTheme();
    const settingStlye = createSettingsStyles(colors);

    const todos = useQuery(api.todos.getTodos);
    const totalTodos = todos ? todos.length : 0;
    const completedTodos = todos ? todos.filter(todo => todo.isCompleted).length : 0;
    const activeTodos = totalTodos - completedTodos;


    return (
        <LinearGradient colors={colors.gradients.surface} style={settingStlye.section}>
            <Text style={settingStlye.sectionTitle}>Progress Stats</Text>
            <View style={settingStlye.statsContainer}>
                {/* TOTAL TODOS */}
                <LinearGradient colors={colors.gradients.background} style={[settingStlye.statCard, { borderLeftColor: colors.primary }]}>
                    <View style={settingStlye.statIconContainer}>
                        <LinearGradient colors={colors.gradients.primary} style={settingStlye.statIcon}>
                            <Ionicons name="list" size={20} color={"#fff"} />
                        </LinearGradient>
                    </View>

                    <View>
                        <Text style={settingStlye.statNumber}>{totalTodos}</Text>
                        <Text style={settingStlye.statLabel}>Total Todos</Text>
                    </View>
                </LinearGradient>

                {/* COMPLETED TODOS */}
                <LinearGradient colors={colors.gradients.background} style={[settingStlye.statCard, { borderLeftColor: colors.success }]}>
                    <View style={settingStlye.statIconContainer}>
                        <LinearGradient colors={colors.gradients.success} style={settingStlye.statIcon}>
                            <Ionicons name="checkmark-circle-sharp" size={20} color={"#fff"} />
                        </LinearGradient>
                    </View>

                    <View>
                        <Text style={settingStlye.statNumber}>{completedTodos}</Text>
                        <Text style={settingStlye.statLabel}>Completed</Text>
                    </View>
                </LinearGradient>

                {/* ACTIVE TODOS */}
                <LinearGradient colors={colors.gradients.background} style={[settingStlye.statCard, { borderLeftColor: colors.warning }]}>
                    <View style={settingStlye.statIconContainer}>
                        <LinearGradient colors={colors.gradients.warning} style={settingStlye.statIcon}>
                            <Ionicons name="time" size={20} color={"#fff"} />
                        </LinearGradient>
                    </View>

                    <View>
                        <Text style={settingStlye.statNumber}>{activeTodos}</Text>
                        <Text style={settingStlye.statLabel}>Active</Text>
                    </View>
                </LinearGradient>
            </View>
        </LinearGradient>
    )
}

export default ProgressStats