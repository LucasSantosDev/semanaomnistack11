import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    marginBottom: 0,
    marginTop: 30,
    color: "#13131a",
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: "#737380"
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginTop: 40
  },
  label: {
    fontSize: 16,
    fontWeight: "bold"
  },
  input: {
    fontSize: 14,
    height: 40,
    borderColor: "#c4c4c4",
    borderWidth: 1.3,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 16,
    padding: 7
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e02041",
    borderRadius: 5,
    padding: 15
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 10
  },
  forgetPassword: {
    textAlign: "right",
    marginTop: 10,
    color: "#e02041",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#e02041"
  }
});
