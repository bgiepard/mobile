import {StyleSheet, Text, View} from 'react-native';
import MainView from "../components/MainView";
import StarIcon from "../assets/star.svg"
import MailIcon from "../assets/mail.svg"
import DocsIcon from "../assets/docs.svg"
import PdfIcon from "../assets/pdf.svg"

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

        <View style={{flexDirection: "row", gap: 20, marginTop: 40, justifyContent: 'center' }}>
          <View><Text style={{color: "#ccc"}}>WWW</Text></View>
          <View><Text style={{color: "#ccc"}}>Instagram</Text></View>
          <View><Text style={{color: "#ccc"}}>Facebbok</Text></View>
        </View>

      </View>
    </MainView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  text: {
    color: '#eee',
    fontSize: 20,
    marginLeft: 10
  },
  link: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  }

})

export default Info