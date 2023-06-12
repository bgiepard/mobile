import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainView from "../components/MainView";
import Logo from '../assets/logo_monochromatyczne.svg'
import Battery from '../assets/battery.svg'
import {useState} from "react";
import {Image, Platform} from 'react-native';

const Home = () => {
  const [status, setStatus] = useState(false);

  return (
   <MainView title="Home" visible={false}>
     <View style={styles.logo}>
         <Logo width={200} height={100}/>
     </View>
     <View style={styles.mainContent}>
       <Text style={styles.textHeader}>
         Witaj!
       </Text>
       <Text style={styles.text}>
         Włącz i podłącz swoją poduszkę
       </Text>

       <View style={styles.poduszka}>
         <Image source={require('../assets/pillow.png')} style={{ width: 400, height: 300, }} />
         {status &&
           <View style={styles.batteryLevel}>
             <Battery width="90" fill="#777"/>
             <Text style={styles.batteryLevelText}>68%</Text>
           </View>
         }
       </View>
       <View style={styles.bateria}>
         <TouchableOpacity onPress={() => setStatus(!status) }>
           {!status && <Text style={styles.poduszkaOff}>Podłącz poduszkę</Text>}
           {status && <Text style={styles.poduszkaOn}>Połączono</Text>}
         </TouchableOpacity>
       </View>

     </View>
   </MainView>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 80,
    alignItems: 'center',
  },
  text: {
    color: '#bbb',
    fontSize: 25,
    textAlign: 'center'
  },
  textHeader: {
    fontSize: 35,
    color: '#eee',
    textAlign: 'center'
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60
  },
  poduszka: {
    marginTop: 0,
    position: 'relative'
  },
  poduszkaOn: {
    color: 'lightgreen',
    fontWeight: 'bold',
    fontSize: 18
  },
  poduszkaOff: {
    color: 'lightblue',
    fontWeight: 'bold',
    fontSize: 18
  },
  bateria: {
    alignItems: 'center',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#443C68',
    color: '#eee',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    backgroundColor: '#443C68',

    shadowColor: 'black', // Shadow color
    shadowOpacity: 0.5, // Shadow opacity (0 to 1)
    shadowOffset: { width: 2, height: 4 }, // Shadow offset
    shadowRadius: 4, // Shadow blur radius
    elevation: Platform.OS === 'android' ? 4 : 0,
  },
  batteryLevel: {
    position: 'absolute',
    bottom: 76,
    right: 50,
  },
  batteryLevelText: {
    position: "absolute",
    color: 'white',
    bottom: 16.5,
    right: 31,
    fontSize: 12
  }
})
export default Home