import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import api from "../../../services/api";

import logoImg from "../../../assets/logo.png";

import styles from "./styles";

export default function Logon() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  function navigateToIncidents() {
    navigation.navigate("Incidents", { ong: "123" });
  }

  function navigateToForgetPassword() {
    navigation.navigate("ForgetPassword");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Você é nosso herói!</Text>

      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={styles.incident}>
          <Text style={styles.label}>*E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            type="email"
            name="email"
            placeholder="Digite seu E-mail"
            onChangeText={text => setEmail(text)}
          />

          <Text style={styles.label}>*Senha</Text>
          <TextInput
            style={styles.input}
            value={password}
            type="password"
            name="password"
            placeholder="Digite sua Senha"
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToIncidents()}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
            <Feather name="arrow-right" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigateToForgetPassword()}>
          <Text style={styles.forgetPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
