import './global.css';
import { View, Text } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <RootNavigator />
      <Toast />
    </>
  );
}
