import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Animated,
} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import restaurants from '../../consts/restaurants';
import Button from '../../components/Button'
const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

const HomeScreen = ({navigation}) => {
  const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Top 10'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const CategoryList = ({navigation}) => {
    return (
      <View style={style.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...style.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.primary
                      : COLORS.grey,
                }}>
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLORS.primary,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Card = ({restaurant, index}) => {
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => navigation.navigate('DetailsScreen', restaurant)}>
        <Animated.View style={{...style.card, transform: [{scale}]}}>
          <Animated.View style={{...style.cardOverLay, opacity}} />
          <View style={style.priceTag}>
            <Text
              style={{color: COLORS.light, fontSize: 15, fontWeight: 'bold'}}>
              AVG ${restaurant.price}
            </Text>
          </View>
          <Image source={restaurant.image} style={style.cardImage} />
          <View style={style.cardDetails}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {restaurant.name}
                </Text>
                <Text style={{color: COLORS.grey, fontSize: 12}}>
                  {restaurant.location}
                </Text>
              </View>
              <Icon name="bookmark-border" size={26} color={COLORS.primary} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.grey} />
                
              </View>
           
              <Text style={{fontSize: 15,fontWeight:'bold', color: COLORS.grey}}>AVG</Text>
              <View style={{flexDirection: 'row'}}>
              <Image
        style={style.tinyLogo}
       
        source={
          require('../../assets/facebook.jpg')
        }/>
        <Image
        style={style.tinyLogo}
       
        source={
          require('../../assets/google.jpg')
        }/>
        <Image
        style={style.tinyLogo}
       
        source={
          require('../../assets/insta.jpg')
        }
        
      /></View>
                
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  const TopRestaurantCard = ({restaurant}) => {
    return (
      <View style={style.topRestaurantCard}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon name="star" size={15} color={COLORS.orange} />
          <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text>
        </View>
        <Image style={style.topRestaurantCardImage} source={restaurant.image} />
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>{restaurant.name}</Text>
          <Text style={{fontSize: 7, fontWeight: 'bold', color: COLORS.grey}}>
            {restaurant.location}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View style={{paddingBottom: 15}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Find your restaurant
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>in </Text>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color:"#ffd700"}}>
              Kuala Lumpur
            </Text>
          </View>
        </View>
        <TouchableOpacity 
            
            
            activeOpacity={1}
            onPress={() => navigation.navigate('UserProfileScreen')}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.searchInputContainer}>
          <Icon name="search" size={30} style={{marginLeft: 20}} />
          <TextInput
            placeholder="Search"
            style={{fontSize: 20, paddingLeft: 10}}
          />
        </View>
        <CategoryList />
        <View>
          <Animated.FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            horizontal
            data={restaurants}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <Card restaurant={item} index={index} />}
            snapToInterval={cardWidth}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: COLORS.grey}}>
            Top Restaurants
          </Text>
          <Text style={{color: COLORS.grey}}>Show all</Text>
        </View>
        
        <FlatList
          data={restaurants}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => <TopRestaurantCard restaurant={item} />}
        />
        <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
        
      </ScrollView>
    </SafeAreaView>
    
    
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardOverLay: {
    height: 280,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  topRestaurantCard: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topRestaurantCardImage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  tinyLogo: {
    width: 15,
    height: 15,
    
    flexDirection: 'row',
  },
});

export default HomeScreen;
