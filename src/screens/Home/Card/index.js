
import React from 'react'
import { Avatar, Button, Card, IconButton } from 'react-native-paper';


const CardUsuario = ({nome, sobrenome, imagem, navigation, id}) => {

    function navegarParaUsuario() {
        navigation.navigate('User', id)
    }

  return (
       <Card.Title
                style={{backgroundColor: '#1c0187', marginTop: 10}}
                title={`${nome} ${sobrenome}`}
                titleStyle={{color: '#fff'}}
                subtitle="Card Subtitle"
                left={() => <Avatar.Image size={45} source={{ uri: imagem }} />}
                right={() => <Button icon="arrow-right" size={30} mode="contained" onPress={navegarParaUsuario} /> } />
  )
}

export default CardUsuario