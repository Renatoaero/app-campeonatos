import { StyleSheet } from "react-native";

const createStyle = (obj) => StyleSheet.create(obj);

export default StyleSheet.create({
  backgroundScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006400",
  },
  containerScreen: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: '#006400',
    margin: '1%'
  },
  containerTable: {
    width: "100%", 
    marginBottom: '10%',
    marginTop: '10%',
    width: '100%'
  },
  containerRow: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: '5%',
    padding: '5%'
  },
});