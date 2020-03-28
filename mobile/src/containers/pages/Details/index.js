import React, { useEffect, useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking
} from "react-native";
import * as MailComposer from "expo-mail-composer";

import { formatCurrencyBR } from "../../../helpers/utils";

import logoImg from "../../../assets/logo.png";

import styles from "./styles";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${formatCurrencyBR(incident.value)}`;

  function navigateToIncidents() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=55${incident.whatsapp.replace(
        /\D/g,
        ""
      )}&text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={() => navigateToIncidents()}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.incidentList}
        data={[1]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={_ => (
          <>
            <View style={styles.incident}>
              <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
                ONG:
              </Text>
              <Text style={styles.incidentValue}>
                {`${incident.name} de `}
                <Text style={styles.underLine}>
                  {incident.city}/{incident.state}
                </Text>
              </Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
              <Text style={styles.incidentValue}>{incident.description}</Text>

              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={[styles.incidentValue, { marginBottom: 0 }]}>
                {formatCurrencyBR(incident.value)}
              </Text>
            </View>

            <View style={styles.contactBox}>
              <Text style={styles.heroTitle}>Salve o dia!</Text>
              <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

              <Text style={styles.heroDescription}>Entre em contato:</Text>

              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.action}
                  onPress={() => sendWhatsapp()}
                >
                  <FontAwesome name="facebook" size={16} color="#FFF" />
                  <Text style={styles.actionText}>WhatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.action}
                  onPress={() => sendMail()}
                >
                  <FontAwesome name="envelope" size={16} color="#FFF" />
                  <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
}
