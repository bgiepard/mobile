import Header from "./Header";
import Footer from './Footer'
import {SafeAreaView, StyleSheet, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

const MainView = ({children, title, visible = true}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Header visible={visible} title={title} />
        <View style={styles.content}>
          {children}
        </View>
        <View style={styles.footer}>
          <Footer/>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393053',
  },
  content: {
    flex: 1,
  },
  text: {
    color: 'white'
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  linearGradient: {
    flex: 1,
  },
});

export default MainView