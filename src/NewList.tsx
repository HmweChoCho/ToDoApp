import React, { useEffect, useState } from 'react';
import { View ,Text,FlatList,StyleSheet} from 'react-native';


export const NewList = () => {
    const [news,setNews]=useState([]);
    const getMoviesFromApiAsync = async () => {
        try {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/',
          );
          const json = await response.json();
         setNews(json);
         console.log(news);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(()=>{getMoviesFromApiAsync();},[])
  return (
    <FlatList
      data={news}
    
      renderItem={({ item }) => (
        <View style={styles.newsItem}>
        <Text style={styles.newsTitle}>{item.id}</Text>
        <Text style={styles.newsBody}>{item.title}</Text>
      </View>
      )}
    />
  )
}
const styles=StyleSheet.create({
    newsItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        
      },
      newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      newsBody: {
        fontSize: 14,
        marginTop: 5,
      },
})
