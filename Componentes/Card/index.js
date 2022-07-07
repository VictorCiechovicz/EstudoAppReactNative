import React from 'react'
import { Text, View } from 'react-native'
import estilos from './estilos'
import fotoAtor from '../../assets/fotoAtor.png'

export default function Boxator() {
  return (
    <View style={estilos.boxImage}>
      <View style={estilos.boxImage1}>
        <Image style={estilos.imageAtor} source={fotoAtor} />
        <Text style={estilos.nome}>Samuel Jackson</Text>
        <Text style={estilos.paragrafo}>Ator e produtor norte-americano</Text>
      </View>
    </View>
  )
}
