import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { getShowTaskDetails, setShowTaskDetails } from "../store/common";
import { useAppDispatch } from "../store/helpers";
import parseDate from "../utils/parseDate";

const TaskDetails = () => {
  const task = useSelector(getShowTaskDetails);
  const dispatch = useAppDispatch();

  if (!task) {
    return null;
  }
  return (
    <SafeAreaView key={"item-details"} style={StyleSheet.absoluteFill}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.time}>{parseDate(task.time || 0)}</Text>
        <ScrollView style={styles.scrollView}>
          {task.records?.map((record, index) => (
            <View style={styles.record}>
              <Text style={styles.time}>{index + 1}. </Text>
              <Text style={[styles.time, styles.startedAt]}>
                {new Date(record.startedAt || 0).toLocaleString()}
              </Text>
              <Text style={[styles.time, styles.finishedAt]}>
                -{" "}
                {record.finishedAt
                  ? new Date(record.finishedAt || 0).toLocaleString()
                  : ""}
              </Text>
            </View>
          ))}
        </ScrollView>
        <Button onPress={() => dispatch(setShowTaskDetails(null))}>
          Close details
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    marginTop: 64,
    marginBottom: 16,
  },
  record: {
    flexDirection: "row",
  },
  time: {
    fontSize: 12,
    marginBottom: 16,
  },
  startedAt: {
    color: "green",
  },
  finishedAt: {
    color: "red",
    marginLeft: 4,
  },
  scrollView: {
    flex: 1,
  },
});

export default TaskDetails;
