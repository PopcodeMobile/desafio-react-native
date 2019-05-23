import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const style = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 5,
    borderColor: '#cacaca',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  calendarioContainer: { alignItems: 'center', paddingHorizontal: 10 },
  calendarioContent: {
    width: 60,
    height: 60,
    borderColor: '#a1bff5',
  },
  calendarioMesContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: '#3274ea',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarioMesTexto: { color: 'white' },
  calendarioDiaContainer: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3274ea',
    borderWidth: 1,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: '60%',
  },
  calendarioDiaTexto: { color: '#3274ea', fontWeight: 'bold', fontSize: 20 },
  infoContainer: { flex: 1 },
  infoContent: { paddingVertical: 5 },
  infoTitle: { color: '#202020', fontSize: 18, fontWeight: '500' },
  infoDescription: { color: '#747474', fontSize: 10, fontWeight: '300' },
});

export default function taskItem() {
  return (
    <View style={style.container}>
      <View style={style.calendarioContainer}>
        <View style={style.calendarioContent}>
          <View style={style.calendarioMesContainer}>
            <Text style={style.calendarioMesTexto}>JAN</Text>
          </View>
          <View style={style.calendarioDiaContainer}>
            <Text style={style.calendarioDiaTexto}>15</Text>
          </View>
        </View>
      </View>
      <View style={style.infoContainer}>
        <View style={style.infoContent}>
          <Text style={style.infoTitle}>Title</Text>
          <Text style={style.infoDescription}>Descricao</Text>
        </View>
      </View>
      <View>
        <Icon name="check" size={24} color="#3274ea" />
      </View>
    </View>
  );
}
