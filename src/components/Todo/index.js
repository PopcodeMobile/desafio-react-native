import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import styles from "./styles";

const Todo = ({ item, navigation, markTodo, deleteTodo }) => (
  <View style={styles.card}>
    <TouchableOpacity onPress={() => markTodo(item._id)}>
      <View>
        <Text style={item.pendding ? styles.titleMark : styles.title}>
          {item.title}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.cardFooter}>
      <View style={styles.options}>
        <Text style={styles.dates}>
          {`Criado em: ${item.date_created} \nPrazo: ${(item.date_due == undefined ? 'não definido': item.date_due)}`}
        </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TodoPanel", { item: item })}
          style={styles.edit}
        >
          <EvilIcons
            name="pencil"
            size={30}
            style={styles.editIcon}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => deleteTodo(item._id)}
        >
          <EvilIcons
            name="trash"
            size={30}
            style={styles.deleteIcon}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Todo;