import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { useSelector } from "react-redux";
import { getActiveTask, stopWorkingOnTask } from "../store/common";
import { useAppDispatch } from "../store/helpers";
import parseDate from "../utils/parseDate";

const ActiveItem = () => {
  const dispatch = useAppDispatch();
  const task = useSelector(getActiveTask);

  const [time, setTime] = useState(0);

  useEffect(() => {
    if (task) {
      setTime(task.time || 0);
      const currentTime = Date.now();
      const interval = setInterval(
        () => setTime((task.time || 0) + (Date.now() - currentTime) / 1000),
        1000
      );

      return () => clearInterval(interval);
    }
  }, [task]);

  if (!task) {
    return null;
  }

  return (
    <TouchableRipple
      style={styles.wrapper}
      onPress={() => dispatch(stopWorkingOnTask(task.id))}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.time}>{parseDate(time || 0)}</Text>
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
