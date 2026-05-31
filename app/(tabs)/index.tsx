import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { useMutation, useQuery } from 'convex/react';
import React, { useState } from 'react';
import { Alert, FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Header from '@/components/Header';
import LoadingSpinner from '@/components/LoadingSpinner';
import TodoInput from '@/components/TodoInput';
import { Doc, Id } from '@/convex/_generated/dataModel';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";
import EmptyState from '@/components/EmptyState';



type Todo = Doc<"todos">

const index = () => {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);

  const [editingId, setEditingId] = useState<Id<"todos"> | null>(null);
  const [editText, setEditText] = useState("");

  const deleteTodo = useMutation(api.todos.deleteTodo);
  const toggleCompleted = useMutation(api.todos.toggleTodo);
  const updateTodo = useMutation(api.todos.updateTodo);

  const isLoading = todos === undefined;
  if (isLoading) return <LoadingSpinner />



  const handleToggleCompleted = async (id: Id<"todos">) => {
    try {
      await toggleCompleted({ id: id });
    }
    catch (error) {
      console.log("Error adding a todo", error);
      Alert.alert("Faild to add todo");
    }
  }


  const handleDeleteTodo = async (id: Id<"todos">) => {
    Alert.alert('Delete Todo', "Are you sure you want to delete todo?",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',

        },
        {
          text: 'Delete', onPress: () => deleteTodo({ id }),
          style: "destructive"

        },
      ]
    )

  }


  // const hanleUpdateTodo = async (id: Id<"todos">) => {
  //   await updateTodo({
  //     id: id,
  //     text: newTodo
  //   })
  // }



  // Todo List
  const renderTodoItem = ({ item }: { item: Todo }) => {
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >

          <TouchableOpacity style={homeStyles.checkbox} activeOpacity={0.7}
            onPress={() => handleToggleCompleted(item._id)}
          >
            <LinearGradient colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted} style={[
              homeStyles.checkboxInner,
              { borderColor: item.isCompleted ? "transpatent" : colors.border }
            ]}>
              {item.isCompleted && <Ionicons name='checkmark' size={18} color={"#fff"} />}

            </LinearGradient>
          </TouchableOpacity>

          {/* ----------- */}
          <View style={homeStyles.todoTextContainer}>
            <Text style={[homeStyles.todoText, item.isCompleted && {
              textDecorationLine: "line-through",
              color: colors.textMuted,
              opacity: 0.6
            }]}>{item.text}</Text>

            <View style={homeStyles.todoActions}>
              <TouchableOpacity onPress={() => { }} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.warning} style={homeStyles.actionButton}>
                  <Ionicons name='pencil' size={14} color={"#fff"} />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTodo(item._id)} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.danger} style={homeStyles.actionButton}>
                  <Ionicons name='trash' size={14} color={"#fff"} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          {/* -------------- */}
        </LinearGradient>

      </View>
    )
  }


  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={"default"} />
      <SafeAreaView style={homeStyles.safeArea}>

        <Header />
        <TodoInput />

        {/* Render Todos */}

        <FlatList

          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          style={homeStyles.todoList}
          contentContainerStyle={homeStyles.todoListContent}
          ListEmptyComponent={<EmptyState />}
          showsVerticalScrollIndicator={false}
        />

        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle Bg</Text>

        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient >
  )
}

export default index


// TODO : Replace ALret.alret into custom and reuseable package or componects