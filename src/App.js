import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  Pressable,
  Text,
  View,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from 'react-native';

import styles from './assets/css/Styles.styles'

const App: () => Node = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [todoItemTitle, setTodoItemTitle] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onChangeText = (data) => { setTodoItemTitle(data) };
  const modalOnClose = () => { setModalVisible(false) }
  const modalOnOpen = () => { setModalVisible(true) }
  const addTodoList = () => {
    let obj = { id: `${todoList.length + 1}`, title: todoItemTitle, selected: false }
    setTodoList([...todoList, obj]);
    setTodoItemTitle('');
    modalOnClose();
  }
  const todoListRowClick = (id) => {
    let arr = [];
    todoList.map(data => {
      if (data.id == id)
        data.selected = !data.selected;

      arr.push(data);
    });
    setTodoList(arr);
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { todoListRowClick(item.id) }}>
        <View style={item.selected ? [styles.item, styles.selectedBg] : styles.item}>
          <Text>{item.selected ? '✓ ' : ''}</Text>
          <Text style={item.selected ? styles.lineThrough : ""} >{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  };
  const keyExtractor = (data) => `${data.id}`;

  return (
    <SafeAreaView style={styles.container} >

      {/* Modal start */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >

        <View style={styles.modal_container}>
          <View style={styles.modalView}>

            <View style={styles.modalHeader}>
              <Text style={styles.ModalHeaderTitle}>Add ToDo</Text>
            </View>

            <View style={styles.modalBody}>
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={todoItemTitle}
              />
            </View>

            <View style={styles.modalFooter}>
              <Pressable
                style={[styles.button, styles.secondary]}
                onPress={modalOnClose}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>


              <Pressable
                style={[styles.button, styles.primary]}
                onPress={addTodoList}
              >
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </Modal>

      <View style={styles.flatListView}>
        <FlatList
          style={styles.flatList}
          data={todoList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>



      <View style={styles.addButtonView}>
        <Pressable
          style={[styles.button, styles.primary]}
          onPress={modalOnOpen}
        >
          <Text style={styles.textStyle}>Add ToDo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;
