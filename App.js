import React from 'react'
import { StyleSheet, View } from 'react-native'

import Navebar from './Componentes/BarraTitulo'
import Boxator from './Componentes/Card'
import Aboutator from './Componentes/Sobre'

export default function App() {
  return (
    <View style={estilos.container}>
      <Navebar />

      <Boxator />

      <Aboutator />
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start'
  }

  /*========NAVBAR=========*/

  /*========IMAGEMATOR=========*/

  /*========ABOUT=========*/
})
