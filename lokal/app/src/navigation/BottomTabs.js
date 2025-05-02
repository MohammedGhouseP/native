// BottomTabs.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobsStack from './JobsStack';
import BookmarksScreen from '../screens/BookmarksScreen';

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Jobs" component={JobsStack} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
    </Tab.Navigator>
  );
}
