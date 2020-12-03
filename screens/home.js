import { StatusBar } from "expo-status-bar";
import React from "react";
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

export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albunData: [],
    };

    this.getAlbums();
  }
  getAlbums = async () => {
    let urlAlbum = "https://jsonplaceholder.typicode.com/albums";
    let req = await fetch(urlAlbum);
    let res = await req.json();
    this.setState({
      albunData: res,
    });
  };

  renderItem = ({ item }) => (
    <View style={styles.itm}>
      <Button
        title={item.title}
        onPress={() =>
          this.props.navigation.navigate("Details", {
            id: item.id,
          })
        }
      />
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={this.state.albunData}
          renderItem={(item) => this.renderItem(item)}
        />
      </View>
    );
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
