import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, SafeAreaView, FlatList, Image } from "react-native";

import Style from "./style"
import ApiFutebol from "../../services/api-futebol";
import FasesEnum from "../../enums/phases-enum";


function filtrarFases(data) {
  return data.map(item => 
    Object.values(FasesEnum).includes(item.nome)
      ? { nome: item.nome, id: item.fase_id } 
      : null
    ).filter(item => item)
}

export default Fases = ({ route: { params: { idCampeonato, logoCampeonato } }, navigation}) => {
  const [fases, setFases] = useState([]);

  useEffect(
    () => {
      ApiFutebol.getCampeonatosChaves(idCampeonato)
        .then(res => filtrarFases(res.data))
        .catch(() => [])
        .then(res => setFases(res))
    }, []
  )

  const mudarPagina = ({ idCampeonato, idFase }) => navigation.navigate('Chaves', { idCampeonato, idFase });

    return (
      <SafeAreaView style={Style.backgroundScreen}>
        <View style={Style.containerScreen}>
          <View style={Style.containerImg}>
            <Image style={Style.layoutImg} source={{uri: logoCampeonato}}/>
          </View>
            <FlatList
              style={Style.containerTable}
              data={fases}
              keyExtractor={(id, index) => index.toString()}
              renderItem={({ item }) => (
                  <TouchableOpacity style={Style.containerButton} onPress={() => mudarPagina({ idCampeonato, idFase: item.id})}>
                      <Text style={Style.textTitle}>{item.nome}</Text>
                  </TouchableOpacity>
              )}/>
        </View>
      </SafeAreaView>
    );
  };