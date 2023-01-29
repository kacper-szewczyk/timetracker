import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Task } from "../types/task";
import parseDate from "../utils/parseDate";

type ItemProps = { task: Task };

const ActiveItem = ({ task }: ItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.time}>{parseDate(task.time | 0)}</Text>
    </View>
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
