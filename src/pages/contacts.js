import React from "react";
import { View, Text } from "react-native";
import {Octicons} from  "@expo/vector-icons"


export default function Contacts() {
  return (
    <View>
      <View style={{marginLeft: 20}}>
        <Octicons name="plus" size={10} color="#000" />
      </View>
      <View>
        <Text>Contacts</Text>
      </View>
    </View>
  )
}