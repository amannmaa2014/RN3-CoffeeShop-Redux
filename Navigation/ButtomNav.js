import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";

//buttomTabs
import AuthTap from "./AuthTap";
import CoffeeTab from "./CoffeeTab";
import OrdersTap from "./Orders";

const BottomNav = createBottomTabNavigator(
  {
    AuthStack: AuthTap,
    CoffeeStack: CoffeeTab,
    OrdersStack: OrdersTap
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        if (routeName === "AuthStack") {
          iconName = "cart";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "CoffeeStack") {
          iconName = "coffee";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "OrdersStack") {
          iconName = "account";
          iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon
            name={iconName}
            type={iconType}
            style={{ color: tintColor, fontSize: 25 }}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);
export default BottomNav;
