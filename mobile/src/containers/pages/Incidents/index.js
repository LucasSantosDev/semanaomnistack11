import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import api from "../../../services/api";
import { formatCurrencyBR } from "../../../helpers/utils";

import logoImg from "../../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && Number(incidents.length) === Number(total)) {
      return;
    }

    setLoading(true);

    try {
      const response = await api.get("incident", {
        params: { page }
      });

      setIncidents([...incidents, ...response.data]);
      setTotal(response.headers["x-total-count"]);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate("Details", { incident });
  }

  function navigateToLogon() {
    navigation.navigate("Logon");
  }

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={"Carregando..."}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity
          style={styles.headerText}
          onPress={() => navigateToLogon()}
        >
          <Text>{`SAIR `}</Text>
          <Feather name="log-out" size={16} color="#e02041" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Seja o herói de um caso</Text>

      <Text style={styles.countTotal}>
        😀 Total de <Text style={styles.countTotalTextBold}>{total}</Text>{" "}
        casos.
      </Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {formatCurrencyBR(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
