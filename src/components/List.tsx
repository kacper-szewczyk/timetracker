import React from "react";
import { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { fetchTasks, getTasks } from "../store/common";
import { useAppDispatch } from "../store/helpers";
import ListItem from "./ListItem";

const List = () => {
  const list = useSelector(getTasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tasks</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => <ListItem title={item.title} />}
        keyExtractor={(item) => item.id}
      />
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
});

export default List;
