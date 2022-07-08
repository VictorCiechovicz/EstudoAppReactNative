import React from 'react'
import { Text, View } from 'react-native'
import estilos from './estilos'

export default function Navebar() {
  return (
    <View style={estilos.navbar}>
      <Text style={estilos.titulo}>Ator famoso</Text>
    </View>
  )
}
