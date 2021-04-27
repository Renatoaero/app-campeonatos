import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";

import Style from "./style"

import ApiFutebol from "../../services/api-futebol";

export default Campeonato = ({ navigation }) => {
  const [campeonato, setCampeonato] = useState({});

  useEffect(
    () => {
      ApiFutebol.getCampeonatos(2)
      .then(res => setCampeonato(res.data))
      .catch(() => {})
    }, []
  )

  const mudarPagina = ({ idCampeonato, logoCampeonato }) => navigation.navigate('Fases', { idCampeonato, logoCampeonato });

    return (
      <SafeAreaView style={Style.backgroundScreen}>
        <View style={Style.containerScreen}>
          <View style={Style.containerButton}>
            <TouchableOpacity onPress={() => mudarPagina({ idCampeonato: campeonato.campeonato_id, logoCampeonato: campeonato.logo })}>
              <Image style={Style.layoutImg} source={{uri: campeonato.logo}}/>
              <Text style={Style.textTitle}>{campeonato.nome_popular}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };