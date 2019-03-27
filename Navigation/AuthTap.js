import { createStackNavigator } from "react-navigation";

// Components
import LoginScreen from "../Components/Login";
import ProfileScreen from "../Components/Profile";
import CoffeeList from "../Components/CoffeeList";

const authTap = createStackNavigator(
  {
    Login: LoginScreen,
    Profile: ProfileScreen,
    List: CoffeeList
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
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

export default authTap;
