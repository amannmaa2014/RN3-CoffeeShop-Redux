import { createStackNavigator } from "react-navigation";

//Screens
import CartScreen from "./Conponent/CoffeeCart";
import DetailScreen from "./Component/CoffeeDetail";
import ListScreen from "./Component/CoffeeList";
import HomeScreen from "./Component/HomePage";
import LoginScreen from "./Component/Login";

const navigationStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    List: ListScreen,
    Detail: DetailScreen,
    Cart: CartScreen
  },
  {
    initialRouteName: "Login"
  }
);
const AppContainer = createAppContainer(navigationStack);

export default AppContainer;
