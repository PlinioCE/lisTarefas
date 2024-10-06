import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ExibirImagem = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/telaInicial.png")}
        style={{ height: 350, width: 350 }}
      />
      <Text style={{ fontSize: 24, marginTop: 50 }}>Sem Tarefa</Text>
    </View>
  );
};

export default ExibirImagem;

const styles = StyleSheet.create({});
