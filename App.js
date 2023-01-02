
import { StyleSheet, View, FlatList, Button, } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const  [modalIsVisible,setModalVisible] =  useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalVisible(true);
  }

  function endAddGoalHandler(){
    setModalVisible(false);
  }

  function addGoalHandler(enterdGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enterdGoalText, id: Math.random().toString() }]);
      endAddGoalHandler();
  };


  function deleteGoHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>

      <Button title='Add New Goal'  color='#a065ec' onPress={startAddGoalHandler}/>

      <GoalInput   visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {

          return (
            <GoalItem
              onDeleteItem={deleteGoHandler}
              text={itemData.item.text} 
              id={itemData.item.id}
              />
          );
        }}

          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />


      </View>

    </View>
    </>
    //Flex Box example
    // <View style={{ padding: 50, flexDirection: 'row', width: '80%', height: 300, justifyContent: 'space-around', alignItems: 'stretch' }}>
    //   <View
    //     style={{
    //       backgroundColor: 'red',
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Text>1</Text>
    //   </View>

    //   <View
    //     style={{
    //       backgroundColor: 'blue',
    //       flex: 3,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Text>2</Text>
    //   </View>

    //   <View
    //     style={{
    //       backgroundColor: 'green',
    //       flex:2 ,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Text>3</Text>
    //   </View>

    // </View>




  );
}




const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:"#1e085a"
  },

  goalsContainer: {
    flex: 5,
  },




});
