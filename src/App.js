import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  Pressable,
  Text,
  View,
  Modal,
  TextInput
} from 'react-native';

import styles from './assets/css/Styles.styles'

const App: () => Node = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [todoString, setTodoString] = useState(null);

  onChangeText = (data) => { setTodoString(data) };

  return (
    <SafeAreaView style={styles.container} >

      {/*  */}
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
                value={todoString}
              />
            </View>

            <View style={styles.modalFooter}>
              <Pressable
                style={[styles.button, styles.secondary]}
                onPress={() => {
                  setModalVisible(false)
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>


              <Pressable
                style={[styles.button, styles.primary]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </Modal>




      <View style={styles.addButtonView}>
        <Pressable
          style={[styles.button, styles.primary]}
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <Text style={styles.textStyle}>Add ToDo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;
