import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "./src/components/Header";

export default function App() {
  const comidas = [
    {
      foto: "",
      loja: "Padaria doce Lar",
      nome: "Pâo de Quiejo",
      preco: 3.0,
      numero: "Unidade",
    },
    {
      foto: "",
      loja: "Quiosque São Alberto",
      nome: "Coxinha",
      preco: 5.0,
      numero: "Unidade",
    },
    {
      foto: "",
      loja: "Marcado Boa Vida",
      nome: "Tomate",
      preco: 12.0,
      numero: "KG",
    },
    {
      foto: "",
      loja: "Padaria doce Lar",
      nome: "bolo de chocolate",
      preco: 10.0,
      numero: "unidade",
    },
  ];

  return (
    <View style={styles.container}>
      < Header />
      <ScrollView>
        
        <FlatList data={comidas} renderItem={({item}) => <Text>{props.comidas.nome}</Text> } />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
