import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  modal_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#00000059',
  },
  modalView: {
    width: '80%',
    minHeight: '20%',
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalHeader: {
    width: '100%',
    position: 'absolute',
    padding: 5,
    borderColor: '#00000012',
    borderBottomWidth: 1,
  },
  modalBody: {
    width: '100%',
    marginVertical: 30,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  modalFooter: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 2,
    margin: 5,
  },
  addButtonView: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
  },
  primary: {
    backgroundColor: "#2196F3",
  },
  secondary: {
    backgroundColor: "#adb5bd",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textInput: {
    minHeight: 30,
    width: '60%',
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: '#00000012',
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  flatListView: {
    flex: 1,
    margin: 10,
  },
  flatList: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00000012',
  },
  item: {

    padding: 10,
    width: "100%",
    flexDirection:'row',
    backgroundColor: "#a0e",
    borderBottomWidth: 1,
    borderBottomColor: '#00000012',
  },
  lineThrough: { textDecorationLine: 'line-through' },
  selectedBg: { backgroundColor: "#a9e", }
});