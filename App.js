import { StatusBar } from "expo-status-bar";
import React from "react";
import user from "./app_component/user.component";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  Button,
} from "react-native";
import MainStackNavigator from "./routes/StackNavigator";

export default class App extends React.Component {
  render() {
    return <MainStackNavigator navigator={navigator} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
  },
  itm: {
    padding: 5,
    margin: 10,
    backgroundColor: "lightblue",
    fontWeight: "bold",
    alignItems: "center",
    color: "black",
  },
});
