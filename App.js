import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import MarkedItem from './components/MarkedGoalList';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [markedGoals, setMarkedGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId); // only keeping IDs that doesn't match goalId
    });
  };

  const markHandler = (goalId) => {
    let goalToMark = courseGoals.find((goal) => goal.id === goalId)
    setMarkedGoals(currentMarkedGoals => [...currentMarkedGoals, goalToMark]);
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId); // only keeping IDs that doesn't match goalId
    });
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}> 
    <Button title="add new item" onPress={() => setIsAddMode(true)} />     
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} cancelAddGoal={cancelGoalHandler} />
        <FlatList data={courseGoals} renderItem={itemData => (
          <GoalItem 
            title={itemData.item.value} 
            id={itemData.item.id} 
            onDelete={removeGoalHandler}
            onMark={markHandler}
           />
      )} >          
      </FlatList>    
      <FlatList data={markedGoals} renderItem={itemData => (
        <MarkedItem 
          title={itemData.item.value} 
          id={itemData.item.id} 
          onDelete={removeGoalHandler}
          onMark={markHandler}
        />
      )}
      >
      </FlatList>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    backgroundColor: 'white',
    padding: 50,
    flex: 1
  }
  
});
