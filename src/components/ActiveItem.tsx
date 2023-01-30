import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { stopWorkingOnTask } from "../store/common";
import { useAppDispatch } from "../store/helpers";
import { Task } from "../types/task";
import parseDate from "../utils/parseDate";

type ItemProps = { task: Task };

const ActiveItem = ({ task }: ItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <TouchableRipple
      style={styles.wrapper}
      onPress={() => dispatch(stopWorkingOnTask(task.id))}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.time}>{parseDate(task.time || 0)}</Text>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
  time: {
    fontSize: 12,
    color: "white",
  },
});

export default ActiveItem;
