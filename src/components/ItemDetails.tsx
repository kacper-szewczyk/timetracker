import React from "react";
import { useId } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { startWorkingOnTask } from "../store/common";
import { useAppDispatch } from "../store/helpers";
import { Task } from "../types/task";
import parseDate from "../utils/parseDate";

type ItemProps = { task: Task };

const ItemDetails = ({ task }: ItemProps) => {
  const id = useId();
  return (
    <View style={styles.wrapper} key={`item-details-${id}`}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.time}>{parseDate(task.time | 0)}</Text>
      {task.records.map((record) => (
        <View>
          <Text style={[styles.time, styles.startedAt]}>
            {parseDate(record.startedAt | 0)}
          </Text>
          <Text style={[styles.time, styles.finishedAt]}>
            {record.finishedAt ? parseDate(record.finishedAt | 0) : "-"}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  time: {
    fontSize: 12,
  },
  startedAt: {
    color: "green",
  },
  finishedAt: {
    color: "red",
  },
});

export default ItemDetails;
