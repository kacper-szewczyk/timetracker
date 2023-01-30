import React from "react";
import { useId } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TouchableRipple } from "react-native-paper";
import { useSelector } from "react-redux";
import {
  getActiveTask,
  setShowTaskDetails,
  startWorkingOnTask,
  stopWorkingOnTask,
} from "../store/common";
import { useAppDispatch } from "../store/helpers";
import { Task } from "../types/task";
import parseDate from "../utils/parseDate";

type ItemProps = { task: Task };

const ListItem = ({ task }: ItemProps) => {
  const id = useId();
  const dispatch = useAppDispatch();
  const active = useSelector(getActiveTask);

  const isTaskActive = active && active.id === task.id;

  const onPressButton = () => {
    if (isTaskActive) {
      dispatch(stopWorkingOnTask(task.id));
    } else {
      dispatch(startWorkingOnTask(task.id));
    }
  };
  return (
    <TouchableRipple onPress={() => dispatch(setShowTaskDetails(task))}>
      <View style={styles.item} key={`list-item-${id}`}>
        <View>
          <Text style={styles.title}>{task.title}</Text>
          {!isTaskActive && (
            <Text style={styles.time}>{parseDate(task.time || 0)}</Text>
          )}
        </View>
        <Button
          onPress={onPressButton}
          mode="outlined"
          textColor="white"
          buttonColor={isTaskActive ? "red" : "green"}
        >
          {isTaskActive ? "Stop" : "Start"}
        </Button>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    borderStyle: "solid",
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  time: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default ListItem;
