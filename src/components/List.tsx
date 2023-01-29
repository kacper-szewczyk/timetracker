import React from "react";
import { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  fetchActiveTask,
  fetchTasks,
  getActiveTask,
  getTasks,
} from "../store/common";
import { useAppDispatch } from "../store/helpers";
import ActiveItem from "./ActiveItem";
import AddNewTask from "./AddNewTask";
import ListItem from "./ListItem";

const List = () => {
  const list = useSelector(getTasks);
  const active = useSelector(getActiveTask);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchActiveTask());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      {active && <ActiveItem task={active} />}
      <FlatList
        style={styles.list}
        data={list}
        renderItem={({ item }) => <ListItem task={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.emptyElement}>
            <Text style={styles.emptyLabel}>
              No tasks, please add a new one
            </Text>
          </View>
        }
      />
      <AddNewTask />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  emptyElement: {
    alignItems: "center",
    marginTop: 60,
  },
  emptyLabel: {
    fontSize: 24,
  },
});

export default List;
