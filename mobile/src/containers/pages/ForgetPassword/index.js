import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

import api from "../../../services/api";

import logoImg from "../../../assets/logo.png";

import styles from "./styles";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  function verificarEmail() {
    //
  }

  function navigateToLogon() {
    navigation.navigate("Logon");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.title}>Putzz!</Text>
      <Text style={styles.description}>Você esqueceu sua senha?!</Text>
      <Text style={styles.description}>Nós vamos te ajudar a recuperá-la.</Text>

      <View style={styles.incident}>
        <View>
          <Text style={styles.label}>*Seu E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            type="email"
            name="email"
            placeholder="Digite seu e-mail cadastrado"
            onChangeText={text => setEmail(text.target.value)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => verificarEmail()}
        >
          <Text style={styles.buttonText}>VERIFICAR E-MAIL</Text>
          <Feather name="arrow-right" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigateToLogon()}>
        <Text style={styles.forgetPassword}>Voltar ao Login</Text>
      </TouchableOpacity>
    </View>
  );
}
