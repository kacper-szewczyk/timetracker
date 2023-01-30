import React from "react";
import { useId } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { setShowTaskDetails, startWorkingOnTask } from "../store/common";
import { useAppDispatch } from "../store/helpers";
import { Task } from "../types/task";
import parseDate from "../utils/parseDate";

type ItemProps = { task: Task };

const ListItem = ({ task }: ItemProps) => {
  const id = useId();
  const dispatch = useAppDispatch();
  return (
    <TouchableRipple
      onPress={() => dispatch(startWorkingOnTask(task.id))}
      onLongPress={() => dispatch(setShowTaskDetails(task))}
    >
      <View style={styles.item} key={`list-item-${id}`}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.time}>{parseDate(task.time || 0)}</Text>
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
  },
});

export default ListItem;
