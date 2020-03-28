import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  spinnerTextStyle: {
    color: "#FFF"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    flexDirection: "row",
    fontSize: 16,
    color: "#737380"
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
    lineHeight: 18,
    color: "#737380"
  },
  countTotal: {
    fontSize: 12,
    color: "#737380",
    marginTop: 0,
    textAlign: "right"
  },
  countTotalTextBold: {
    fontWeight: "bold"
  },
  incidentList: {
    marginTop: 15
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    borderBottomColor: "#e02041",
    borderBottomWidth: 3,
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380"
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});
