import { createStackNavigator, createAppContainer } from "react-navigation";

//Screens
import CartScreen from "../Components/CoffeeCart";
import DetailScreen from "../Components/CoffeeDetail";
import ListScreen from "../Components/CoffeeList";
// import HomeScreen from "../Components/HomePage";
import LoginScreen from "../Components/Login";

const navigationStack = createStackNavigator(
  {
    // Home: HomeScreen,
    Login: LoginScreen,
    List: ListScreen,
    Detail: DetailScreen,
    Cart: CartScreen
  },

  //optionsObj
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);
const AppContainer = createAppContainer(navigationStack);

export default AppContainer;
