import {FlashList} from '@shopify/flash-list';
import axios from 'axios';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Constants for layout
const PAGE_SIZE = 20;

export const HomeScreen: FC<any> = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch the data from API
  const fetchImages = useCallback(async () => {
    if (loading || !hasMore) {
      return; // Avoid multiple requests
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${PAGE_SIZE}`,
      );
      if (response.data.length > 0) {
        let randomNumber = Math.floor(Math.random() * (1500 - 30 + 1)) + 30;

        const enhancedData = response.data.map(item => ({
          ...item,
          price: randomNumber.toFixed(2),
        }));
        setData(prevData => [...prevData, ...enhancedData]);
        setPage(prevPage => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  // Render individual item in a grid layout
  const renderItem = useCallback(
    ({item}) => (
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate('Detail', {
            item,
          })
        }>
        <Image
          source={{uri: `https://picsum.photos/id/${item.id}/150/300`}}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.author} numberOfLines={1}>
            {item.author}
          </Text>
          <Text style={styles.price}>{item.price}€</Text>
        </View>
      </Pressable>
    ),
    [navigation],
  );

  // Fetch images on initial render
  useEffect(() => {
    fetchImages();
    // Do not remove, important for only to fetch items once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // Set number of columns for grid layout
        estimatedItemSize={200}
        onEndReached={fetchImages}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
  },
  card: {
    flex: 1,
    marginBottom: 8,
    marginHorizontal: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  image: {
    height: 200,
  },
  infoContainer: {
    padding: 10,
  },
  author: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
