import MainView from "../components/MainView";
import {StyleSheet, View, Text, TouchableOpacity, Switch} from "react-native";
import Slider from '@react-native-community/slider';
import {useState} from "react";


const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [slides, setSlides] = useState([
    {label: '31', value: 60},
    {label: '62', value: 35},
    {label: '125', value: 50},
    {label: '500', value: 88},
    {label: '1k', value: 50},
    {label: '2k', value: 70},
    {label: '4k', value: 50},
    {label: '8k', value: 40},
    {label: '16k', value: 55},
  ]);

  const [volume, setVolume] = useState(66)

  const filters = ['Normal', 'Classic', 'Dance', 'Rock', 'Zapisz własne']

  const handleSlideChange = (index, value) => {
    setSlides(prevSlides => {
      const updatedSlides = [...prevSlides];
      updatedSlides[index].value = value;
      return updatedSlides;
    });
  };

  return (
    <MainView title="Ustawienia">
      <View style={styles.container}>
        {slides.map((slide, index) => {
          return (<View style={styles.row} key={index}>
              <Text style={styles.rowLabel}>{slide.label}</Text>
              <Slider
                style={styles.singleSlide}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={slide.value}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                trackStyle={styles.track}
                onValueChange={value => handleSlideChange(index, value)}
              />
              <Text style={styles.rowText}>{slide.value - 50}</Text>
            </View>
          )
        })}
      </View>
      <View style={styles.filters}>
        {filters.map(filter => {
          return (
            <TouchableOpacity style={styles.filter}>
              <Text style={styles.filterText}>{filter}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={styles.volume} >
        <Text style={styles.volumeLabel}>Głośność</Text>
        <Slider
          style={styles.volumeTrack}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={volume}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          trackStyle={styles.track}
        />
      </View>
      <View style={styles.options}>
        <View style={styles.singleOption}>
          <Text style={styles.volumeLabel}>Bass Boost</Text>
          <Switch
            trackColor={{false: 'rgba(256,256,256,0.3)', true: 'rgba(256,256,256,0.3)'}}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            value={isEnabled}
          />
        </View>
        <View style={styles.singleOption}>
          <Text style={styles.volumeLabel}>Loudness</Text>
          <Switch
            trackColor={{false: 'rgba(256,256,256,0.3)', true: 'rgba(256,256,256,0.3)'}}
            ios_backgroundColor="#3e3e3e"
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.singleOption}>
          <Text style={styles.volumeLabel}>Virtualizer</Text>
          <Switch
            trackColor={{false: 'rgba(256,256,256,0.3)', true: 'rgba(256,256,256,0.3)'}}
            ios_backgroundColor="#3e3e3e"
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </MainView>
  )
}

const styles = StyleSheet.create({
  singleSlide: {
    width: '86%',
    height: 43,
  },
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 7,
    transform: 'rotate(-90deg)',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  rowText: {
    color: '#eee',
    fontWeight: "bold",
    width: '7%',
    textAlign: 'center',
    transform: 'rotate(90deg)'
  },
  rowLabel: {
    width: '7%',
    textAlign: 'center',
    color: '#aaa',
    fontWeight: "bold",
    transform: 'rotate(90deg)'
  },
  filters: {
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 7
  },
  filter: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  filterText: {
    color: '#eee'
  },
  volume: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    margin: 7,
    padding: 10,
    borderRadius: 10,
  },
  volumeLabel: {
    color: 'white',
    fontSize: 16
  },
  volumeTrack: {
    marginVertical: 10,
    width: '100%'
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7
  },
  singleOption: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    borderRadius: 10,
    width: '32%',
    alignItems: "center",
    justifyContent: 'center'
  }
});

export default Settings