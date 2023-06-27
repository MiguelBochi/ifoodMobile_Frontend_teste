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

  type ItemProps = { nome: string };

  const Item = ({ nome }: ItemProps) => (
    <View>
      <Text>{nome}</Text>
    </View>
  );
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={comidas}
          renderItem={({ item }) => <Item nome={item.nome} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "Coral",
  },
});
