import { createStackNavigator } from "react-navigation";

// Components
import CoffeeListScreen from "../Components/CoffeeList";
import CoffeeDetailScreen from "../Components/CoffeeDetail";

const CoffeeTap = createStackNavigator(
  {
    List: CoffeeListScreen,
    Detail: CoffeeDetailScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default CoffeeTap;
