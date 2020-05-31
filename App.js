import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,  FlatList, TouchableOpacity} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
//import { setWorldAlignment } from 'expo/build/AR';

export default function App() {
  const [todos, settodos]=useState([
    {text:'buy coffee', key:'1'},
    {text:'create app', key:'2'},
    {text:'play on switch', key:'3'},
  ])

  const pressHandler=(key)=>{
    settodos((prevTodos)=>{
      return prevTodos.filter(todos=>todos.key!=key);
    });
  }
  return(
   <View style={styles.container}>
     <Header/>
     <View style={styles.content}>
      {/* todo from */}
      <View style={styles.list}>
        <FlatList
          data={todos} /* pass todos as the data for flat list*/
          renderItem={({item})=>(/*item passed into the function needs to be deconstructed by curly braces*/
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
        />
      </View>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content:{
    
    padding:40,
    

  },
  list:{
    marginTop:20,

  },
});
