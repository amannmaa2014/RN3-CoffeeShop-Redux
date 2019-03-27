import { createStackNavigator } from "react-navigation";

// Components
import CartScreen from "../Components/CoffeeCart";
import OrdersScreen from "../Components/CoffeeCart/OrderHistory";

const OrderStack = createStackNavigator(
  {
    Cart: CartScreen,
    History: OrdersScreen
  },
  {
    initialRouteName: "Cart",
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

export default OrderStack;
