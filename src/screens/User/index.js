import { useEffect, useState } from "react"
import Api from "../../services/Api"
import { Avatar, Button, Card, Text } from 'react-native-paper';

const User = (props) => {

  const idRecebido = props.route.params
  const [usuario, setUsuario] = useState([])

  useEffect(() => {

      Api.get(`/users/${idRecebido}`)
          .then(response => {
            setUsuario(response.data)
          })
          .catch(error => {
              console.log("Erro: ", error)
          })

  }, [])

  function navegarParaPosts() {
    props.navigation.navigate('Posts', usuario.id)
  }

  return (
      <Card>
          <Card.Cover source={{ uri: usuario.image }} />
          <Card.Content>
            <Text variant="titleLarge">{`${usuario.firstName} ${usuario.lastName}`}</Text>
            <Text variant="bodyMedium">{usuario.phone}</Text>
            <Text variant="bodyMedium">{usuario.birthDate}</Text>
            <Text variant="bodyMedium">{usuario.email}</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={navegarParaPosts}>Posts</Button>
          </Card.Actions>
      </Card>
  )
}

export default User