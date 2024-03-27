import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { WebView } from "react-native-webview";

export default function App() {
  return (
    <>
      <WebView source={{ uri: "https://dolmengyi.vercel.app" }} style={{ flex: 1 }} />
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text>Open up App.tsx to start working on your app!!!</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
