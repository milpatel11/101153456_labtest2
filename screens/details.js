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

export default class details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      uid: null,
      name: null,
      phone: null,
      email: null,
      website: null,
      username: null,
    };
    this.getUsers();
  }
  getUsers = async () => {
    let urlUsers = "https://jsonplaceholder.typicode.com/users";
    let req = await fetch(urlUsers);
    let res = await req.json();
    this.setState({
      userData: res,
    });
    for (let i = 0; i < res.length; i++) {
      if (this.state.userData[i].id == this.props.route.params.id) {
        await this.setState({
          name: this.state.userData[i].name,
          uid: this.state.userData[i].id,
          phone: this.state.userData[i].phone,
          email: this.state.userData[i].email,
          website: this.state.userData[i].website,
          username: this.state.userData[i].username,
        });
      }
    }
  };

  render() {
    return (
      <View>
        <Text>User Id : {this.state.uid}</Text>
        <Text>Name : {this.state.name}</Text>
        <Text>email : {this.state.email}</Text>
        <Text>phone : {this.state.phone}</Text>
        <Text>Website : {this.state.website}</Text>
        <Text>username : {this.state.username}</Text>
      </View>
    );
  }
}
