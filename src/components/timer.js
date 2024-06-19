import { StyleSheet, Text, View } from "react-native";

export default Timer = ({ tiempo }) => {
  const formatoTiempo = `${Math.floor(tiempo / 60)
    .toString()
    .padStart(2, "0")} : ${(tiempo % 60).toString().padStart(2, "0")}`;
  return (
    <View style={styles.container}>
      <Text style={styles.hora}>{formatoTiempo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    margin: 15,
    borderWidth: 2,
    backgroundColor: "blue",
    borderColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  hora: {
    fontSize: 75,
    fontWeight: "bold",
  },
});
