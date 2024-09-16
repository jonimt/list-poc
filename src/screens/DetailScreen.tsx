import React, {FC} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const DetailScreen: FC<any> = ({
  route: {
    params: {item},
  },
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: `https://picsum.photos/id/${item.id}/1000/1500`}}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.author} numberOfLines={1}>
            {item.author}
          </Text>
          <Text style={styles.price}>{item.price}€</Text>
          <Text style={styles.description}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Sem integer
            facilisi orci ante imperdiet suscipit placerat. Libero aliquet
            laoreet porttitor enim odio aptent nascetur. Amet vulputate mollis
            vulputate class pharetra ut. Eu venenatis nibh vestibulum efficitur
            ex adipiscing elit ad. Nisi consequat hac ex vel leo purus. Potenti
            eros habitasse eu inceptos porta class. Eleifend sapien ligula mi
            magnis arcu. Nec duis duis convallis aenean turpis curae nostra
            hendrerit.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 16,
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
    height: 400,
  },
  infoContainer: {
    padding: 10,
  },
  author: {
    fontSize: 32,
    color: '#333',
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 20,
    color: '#333',
    marginBottom: 16,
  },
});
