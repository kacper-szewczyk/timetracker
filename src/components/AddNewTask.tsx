import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { AnimatedFAB, Button, TextInput } from "react-native-paper";
import { postNewTask } from "../store/common";
import { useAppDispatch } from "../store/helpers";

const AddNewTask = () => {
  const [extended, setExtended] = React.useState(true);
  const [inputVisible, setInputVisible] = React.useState(false);
  const [taskName, setTaskName] = React.useState("");
  const dispatch = useAppDispatch();

  const addNewTask = () => {
    dispatch(postNewTask(taskName));
    setInputVisible(false);
    setTaskName("");
  };

  return (
    <>
      {inputVisible && (
        <View style={styles.taskNameWrapper}>
          <TextInput
            style={styles.taskNameInput}
            defaultValue={taskName}
            onChangeText={setTaskName}
            placeholder={"Please provide the task name"}
          ></TextInput>
          <Button
            onPress={addNewTask}
            icon="plus-thick"
            mode="contained"
            disabled={taskName.length === 0}
          >
            Add
          </Button>
        </View>
      )}
      {!inputVisible && (
        <AnimatedFAB
          icon={"plus"}
          label={"Add new task"}
          extended={extended}
          onPress={() => setInputVisible(true)}
          animateFrom={"right"}
          iconMode={"static"}
          style={styles.addNewTaskFAB}
          onLongPress={() => setExtended(!extended)}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  taskNameWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 32,
    paddingTop: 16,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    bottom: 0,
  },
  taskNameInput: {
    flex: 1,
    marginRight: 8,
  },
  addNewTaskFAB: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
});

export default AddNewTask;
