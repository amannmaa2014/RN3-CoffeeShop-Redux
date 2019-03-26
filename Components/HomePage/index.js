import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import AppContainer from "../Navigation/index"

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";


// Actions
import { getCoffeeShops } from "../../store/actions/coffeeActions";

class HomePage extends Component {
  componentDidMount() {
    this.props.getCoffeeShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <AppContainer />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
