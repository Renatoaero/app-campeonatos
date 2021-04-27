import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

import Style from "./style"

import ApiFutebol from "../../services/api-futebol";

function formatKeys(data) {
  return data.map(item => {
    const id = item.partida_ida.partida_id
    const chave = item.nome;
    const data = item.partida_ida.data_realizacao;
    const placar = item.partida_ida.placar;
    const siglaMandante = item.partida_ida.time_mandante.sigla
    const siglaVisitante = item.partida_ida.time_visitante.sigla
    return { id, chave, data, placar, siglaMandante, siglaVisitante  }
  }).sort((x, y) => x.id - y.id)
}

export default Chaves = ({ route: { params: { idCampeonato, idFase } }}) => {
  const [chaves, setChaves] = useState([]);

  useEffect(
    () => {
      ApiFutebol.getCampeonatosChaves(idCampeonato, idFase)
        .then(res => formatKeys(res.data.chaves))
        .catch(() => [])
        .then(res => setChaves(res))
    }, []
  )

    return (
      <SafeAreaView style={Style.backgroundScreen}>
        <View style={Style.containerScreen}>
            <FlatList
              style={Style.containerTable}
              data={chaves}
              keyExtractor={(id, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={Style.containerRow}>
                    <Text style={Style.textTitle}>{item.chave}</Text>
                    <Text style={Style.textTitle}>{item.placar}</Text>
                    <Text style={Style.textTitle}>Data: {item.data}</Text>
                </View>
                )}/>
        </View>
      </SafeAreaView>
    );
  };