import React from 'react'
import { Text, View } from 'react-native'
import estilos from './estilos.js'

export default function barraTitulo() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Ator famoso</Text>
    </View>
  )
};
