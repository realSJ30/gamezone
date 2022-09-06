import React from "react";
import { View, Text,TouchableOpacity } from "react-native";


const Dummy = () => {
  return <View style={{flex: 1,alignItems: 'center'}}>
      <TouchableOpacity>
      <View style={{backgroundColor: 'rgba(0,0,0,0.2)',padding: 20,margin: 10}}>
        <Text>Download PDF</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{backgroundColor: 'rgba(0,0,0,0.2)',padding: 20,margin: 10}}>
        <Text>Download PDF</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{backgroundColor: 'rgba(0,0,0,0.2)',padding: 20,margin: 10}}>
        <Text>Download PDF</Text>
      </View>
      </TouchableOpacity>
  </View>;
};

export default Dummy;
