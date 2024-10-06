import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import ExibirImagem from "../components/ExibirImagem";

const ExibirTarefas = () => {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);
  const [edita, setEdita] = useState(null);

  const adicionarTarefa = () => {
    if (tarefa === "") {
      return;
    }
    setLista([...lista, { id: Date.now().toString(), value: tarefa }]);
    setTarefa("");
  };

  const editarTarefa = (tarefa) => {
    setEdita(tarefa);
    setTarefa(tarefa.value);
  };

  const apagarTarefa = (id) => {
    const atualizarLista = lista.filter((tarefa) => tarefa.id !== id);
    setLista(atualizarLista);
  };

  const atualizarTarefa = () => {
    const atualizar = lista.map((item) => {
      if (item.id === edita.id) {
        return { ...item, value: tarefa };
      }
      return item;
    });
    setLista(atualizar);
    setEdita(null);
    setTarefa("");
  };

  const renderizarTarefas = ({ item, index }) => {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#069",
          borderRadius: 8,
          flexDirection: "row",
          marginBottom: 10,
          paddingHorizontal: 15,
          paddingVertical: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 3,
          elevation: 3,
        }}
      >
        <Text
          style={{ color: "#FFF", flex: 1, fontSize: 24, fontWeight: "800" }}
        >
          {item.value}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => editarTarefa(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => apagarTarefa(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16, gap: 10 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "800",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        App LisTarefas - Extensão Prog. para Dispositivos Android - ADS UniFanor
        Wyden
      </Text>
      <Text style={{ textAlign: "center", marginBottom: 20 }}>
        por Plinio Medeiros de Albuquerque
      </Text>
      <View style={{ gap: 15, flexDirection: "row", marginBottom: 20 }}>
        <TextInput
          style={{
            flex: 1,
            borderColor: "#005eff",
            borderRadius: 8,
            borderWidth: 2,
            fontSize: 20,
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
          placeholder="Insira uma tarefa..."
          value={tarefa}
          onChangeText={(textoUsuario) => setTarefa(textoUsuario)}
        />

        {edita ? (
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#005eff",
              borderRadius: 8,
              paddingHorizontal: 13,
              paddingVertical: 13,
            }}
            onPress={() => atualizarTarefa()}
          >
            <Text style={{ color: "#FFF", fontSize: 22, fontWeight: "700" }}>
              OK
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#005eff",
              borderRadius: 8,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            onPress={() => adicionarTarefa()}
          >
            <Text style={{ color: "#FFF", fontSize: 26, fontWeight: "700" }}>
              +
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList data={lista} renderItem={renderizarTarefas} />

      {lista.length <= 0 && <ExibirImagem />}
    </View>
  );
};

export default ExibirTarefas;

const styles = StyleSheet.create({});
