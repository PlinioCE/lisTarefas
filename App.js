import { SafeAreaView, ScrollView, View } from "react-native";
import GlobalStyles from "./src/components/GlobalStyles";
import ExibirTarefas from "./src/screen/ExibirTarefas";
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <ScrollView>
        <View>
          <ExibirTarefas />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
