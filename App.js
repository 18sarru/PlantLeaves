/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Image,Button,TouchableOpacity} from 'react-native';



function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <StatusBar barStyle="dark-content"/>
    <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        
        <View style={styles.view}>
          <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => navigation.navigate('TopView')}>
            <Image source={require('/home/saratchandra/Downloads/PlantLeaves/topviewplant.jpg')}
            style={styles.tinyLogo}/>
            <Text style={styles.text}> Top View Plant</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => navigation.navigate('SideView')}>
            <Image source={require('/home/saratchandra/Downloads/PlantLeaves/sideviewplant.jpg')}
            style={styles.tinyLogo}/>
            <Text style={styles.text}> Side View Plant</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => navigation.navigate('Single')}>
            <Image source={require('/home/saratchandra/Downloads/PlantLeaves/singleleaf.jpg')}
            style={styles.tinyLogo}/>
            <Text style={styles.text}> Single Leaf</Text>
          </TouchableOpacity> 
        </View>
     </ScrollView>
     </SafeAreaView>
  );
}

function TopView() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TopView</Text>
      <Button title="Click Picture" />
      <Button title="Select from Gallery" />
    </View>
  );
}

function SideView() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SideView</Text>
    </View>
  );
}

function Single() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Single Leaf</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="TopView" component={TopView}/>
          <Stack.Screen name="SideView" component={SideView}/>
          <Stack.Screen name="Single" component={Single}/>
        
      </Stack.Navigator>
      </NavigationContainer>
    </> 
  );
};

const styles = StyleSheet.create({
  
  scrollView: {
    margin: 10,
    
  },
  statusBar:{
    alignItems:"center",
  },
  tinyLogo: {
    width: '95%',
    margin:10,
    height: 256,
    resizeMode:'cover',
    borderRadius: 10,
  },
  safeAreaView: {
    backgroundColor: '#254545',
  },
  view: {
    backgroundColor: '#3ddc84',
    margin: 10,
    borderRadius:10,
    borderColor:'#004d18',
    borderWidth:1,
  },
  button: {
    alignItems: "center",
    borderRadius:10,
  },
  text:{
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
    color:'#004d18'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
