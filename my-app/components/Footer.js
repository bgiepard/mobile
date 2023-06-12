import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";

import HomeIcon from '../assets/homeIcon.svg'
import SnoozeIcon from '../assets/snoozeIcon.svg'
import SilentIcon from '../assets/silentIcon.svg'
import EqIcon from '../assets/eqIcon.svg'
const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Link href="/Info">
          <HomeIcon width={45} height={40} fill="#eee" />
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/About">
          <SnoozeIcon width={45} height={40} fill="#eee" />

        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/Silent">
          <SilentIcon width={35} height={35} fill="#eee" />
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/Settings">
          <EqIcon width={45} height={40} fill="#eee" />
        </Link>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#16264a',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 50,
    width: '15%'
  },
});

export default Footer