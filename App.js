import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import SearchScreen from "./src/screens/SearchScreen";
import ResultDetail from "./src/screens/ResultDetail";

const Navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsDetail: ResultDetail
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search",
    },
  }
);

export default createAppContainer(Navigator);