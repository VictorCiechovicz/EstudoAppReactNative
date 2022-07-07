import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import fotoAtor from './assets/fotoAtor.png'
import Filme from './assets/Filme.png'

import Navebar from './Componentes/BarraTitulo/index.js/index.js'

export default function App() {
  return (
    <View style={estilos.container}>

      <Navebar/>

      <View style={estilos.boxImage}>
        <View style={estilos.boxImage1}>
          <Image style={estilos.imageAtor} source={fotoAtor} />
          <Text style={estilos.nome}>Samuel Jackson</Text>
          <Text style={estilos.paragrafo}>Ator e produtor norte-americano</Text>
        </View>
      </View>

      <View style={estilos.about}>
        <Text style={estilos.aboutTitulo}>Sobre o Ator</Text>

        <Text style={estilos.subtitulo}>Sua vida</Text>
        <Text style={estilos.paragrafo}>
          Nascido em Washington, DC, 21 de dezembro de 1948.
        </Text>
        <Text style={estilos.paragrafo}>
          Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos
          do Morehouse College.
        </Text>

        <Text style={estilos.subtitulo}>Início da carreira</Text>
        <Text style={estilos.paragrafo}>
          Seu primeiro filme se chama Together for Days que estreou em 1972.
        </Text>
        <Image source={Filme} style={estilos.imagemFilme} />
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start'
  },

  /*========NAVBAR=========*/

  /*========IMAGEMATOR=========*/
  boxImage: {
    width: 450,
    height: 400,
    backgroundColor: '#0a1c35',
    justifyContent: 'center',
    alignItems: 'center'
  },

  boxImage1: {
    backgroundColor: '#fff',
    width: 300,
    height: 300,
    borderRadius: 30,
    alignItems: 'center'
  },

  imageAtor: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: 300,
    height: 200
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },

  paragrafo: {
    fontSize: 15
  },
  /*========ABOUT=========*/
  about: {
    margin: 14
  },
  aboutTitulo: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  paragrafo: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5
  },

  imagemFilme: {
    width: 300,
    height: 150
  }
})
