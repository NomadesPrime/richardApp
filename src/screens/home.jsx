import { StyleSheet, Text, View, Image } from "react-native";
export const home = () => (
  <View>
    <Text style={styles.titulo}>Boas vindas</Text>
    <Text style={styles.description}>Minha banda favorita é Cursive</Text>
    <View style={styles.top}>
      <Image
        source={{
          uri: "https://d21yqjvcoayho7.cloudfront.net/wp-content/uploads/2015/02/ven22_ja_20feb_cursive-640x426.jpg",
        }}
        style={styles.imagem}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    margin: 24,
    fontSize: "60px",
  },
  description: {
    textAlign: "center",
    margin: 16,
    fontSize: 18,
  },
  imagem: {
    width: 305,
    height: 159,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
