import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ItemProps = { title: string };

const ListItem = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.time}>10m 15s</Text>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.time}>start</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9c2ff",
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  time: {
    fontSize: 12,
  },
});

export default ListItem;
