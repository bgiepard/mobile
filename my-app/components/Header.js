import { Stack } from 'expo-router';
const Header = ({title, visible}) => {
  if(visible) {
    return (
      <Stack.Screen options={{
        headerStyle: { backgroundColor: '#192f6a' },
        headerTitle: title,
        headerTitleStyle: { color: '#eee' },
        headerTintColor: 'white'
      }}/>
    )
  } else {
    return (
      <Stack.Screen options={{
        headerShown: false
      }}/>
    )
  }

}
export default Header;