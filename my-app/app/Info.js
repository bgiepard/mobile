import {StyleSheet, Text, View} from 'react-native';
import MainView from "../components/MainView";
import StarIcon from "../assets/star.svg"
import MailIcon from "../assets/mail.svg"
import DocsIcon from "../assets/docs.svg"
import PdfIcon from "../assets/pdf.svg"
import WWW from "../assets/www.svg"
import Insta from "../assets/insta.svg"
import Facebook from "../assets/face.svg"

const Info = () => {
  return (
    <MainView title="Informacje">
      <View style={styles.wrapper}>
        <View style={styles.link}>
          <StarIcon width={30} height={30} fill="lightblue"/>
          <Text style={styles.text}>Oceń nas! Zostaw pozytywną ocenę na Google Okay / App Store.</Text>
        </View>

        <View style={styles.link}>
          <MailIcon width={30} height={30} fill="lightblue"/>
          <Text style={styles.text}>Napisz do nas</Text>
        </View>

        <View style={styles.link}>
          <DocsIcon width={30} height={30} fill="lightblue"/>
          <Text style={styles.text}>Licencja</Text>
        </View>

        <View style={styles.link}>
          <DocsIcon width={30} height={30} fill="lightblue"/>
          <Text style={styles.text}>Polityka prywatności</Text>
        </View>

        <View style={styles.link}>
          <PdfIcon width={30} height={30} fill="lightblue"/>
          <Text style={styles.text}>Pobierz instrukcję obsługi poduszki PDF</Text>
        </View>

        <View style={{flexDirection: "row", gap: 30, marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <WWW width={40} height={40} fill="white"/>
          </View>
          <View>
            <Facebook width={35} height={35} fill="white" />
          </View>
          <View>
            <Insta width={45} height={45} fill="white" />
          </View>
        </View>

      </View>
    </MainView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    paddingTop: 40
  },
  text: {
    color: '#eee',
    fontSize: 20,
    marginLeft: 10
  },
  link: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  }

})

export default Info