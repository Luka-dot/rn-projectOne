import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId); // only keeping IDs that doesnt match goalId
    });
  };

  return (
    <View style={styles.screen}>      
      <GoalInput onAddGoal={addGoalHandler} />
        <FlatList data={courseGoals} renderItem={itemData => (
          <GoalItem 
            title={itemData.item.value} 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} />
      )} >          
      </FlatList>      
    </View>
  );
}

// styles.container
const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    backgroundColor: 'indigo',
    padding: 50,
    flex: 1
  }
  
});
