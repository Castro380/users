import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { Card, Chip } from 'react-native-paper'

export default function Posts(props) {

    const idDoUsuario = props.route.params 
    const [posts, setPosts] = useState([]) 

    useEffect(() => {

        Api.get(`/users/${idDoUsuario}/posts`)
            .then(response => {
                setPosts(response.data.posts)
            })
            .catch(error => {
                console.log("Erro: ", error)
            })
  
    }, [])

  return (
    <> 
    <Text>Posts</Text>
    <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={({ item }) =>  
            <Card>
                <Card.Content>
                    <Text variant="titleLarge">{item.title}</Text>
                    <Text variant="bodyMedium">{item.body}</Text>
                </Card.Content>
            </Card>
          }
    />
    </>
   
  )
}

const styles = StyleSheet.create({

})