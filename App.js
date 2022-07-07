import React from 'react'
import { StyleSheet, View } from 'react-native'

import Navebar from './Componentes/BarraTitulo/index'
import Boxator from './Componentes/Card/index'
import Aboutator from './Componentes/Sobre/index'

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
