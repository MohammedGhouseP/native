import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs'
import type { NavigationContainerRef } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}