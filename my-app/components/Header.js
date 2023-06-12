import { Stack } from 'expo-router';
const Header = ({title, visible}) => {
  if(visible) {
    return (
      <Stack.Screen options={{
        headerStyle: { backgroundColor: '#393053' },
        headerTitle: title,
        headerTitleStyle: { color: '#eee' }
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