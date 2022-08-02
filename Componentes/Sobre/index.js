import React, { useState } from 'react'
import { Text, View, Image, Button } from 'react-native'
import estilos from './estilos'
import Filme from '../../assets/Filme.png'

export default function Aboutator() {
  const [states, setStates] = useState(true)
  return (
    <View style={estilos.about}>
      <Text style={estilos.aboutTitulo}>Sobre o Ator</Text>

      <Text style={estilos.subtitulo}>Sua vida</Text>
      <Text style={estilos.paragrafo}>
        Nascido em Washington, DC, 21 de dezembro de 1948.
      </Text>
      <Text style={estilos.paragrafo}>
        Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do
        Morehouse College.
      </Text>

      <Text style={estilos.subtitulo}>Início da carreira</Text>
      <Text style={estilos.paragrafo}>
        Seu primeiro filme se chama Together for Days que estreou em 1972.
      </Text>
      {states ? (
        <Text style={estilos.subtitulo}>******</Text>
      ) : (
        <Image source={Filme} style={estilos.imagemFilme} />
      )}

      <Button
        title={states ? 'Mostrar Imagem' : 'Desligar'}
        onPress={() => setStates(!states)}
      />
    </View>
  )
}
