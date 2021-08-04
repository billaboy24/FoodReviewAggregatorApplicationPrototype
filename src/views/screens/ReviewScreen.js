import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import db from '../../utils/Firebase';













const ReviewScreen = ({ navigation }) => {
  const [fbreviews, setFbreviews] = useState([]);

  useEffect(() => {
    db.collection('Zenzoro Food Reviews')
      .get()
      .then(result => result.docs)
      .then(docs => docs.map(doc => ({
        id: doc.id,
        Pia: doc.data().Pia,
        Jose: doc.data().Jose,
        Dui: doc.data().Dui,
        Grace: doc.data().Grace,
        Yusuf: doc.data().Yusuf,
        Kaywee: doc.data().Kaywee,
        Gsx: doc.data().Gsx,
        review: doc.data().review,


      })))
      .then(fbreviews => setFbreviews(fbreviews))
  }, [])




  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,

      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />

      <View style={style.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          color={COLORS.secondary}
          onPress={navigation.goBack}
        /><Text style={{ color: COLORS.secondary, fontSize: 18, fontWeight: 'bold' }}>
          Reviews
        </Text>

        <Icon name="bookmark-border" size={28} color={COLORS.primary} />
      </View>




      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={style.tinyLogo}

          source={
            require('../../assets/facebook.jpg')
          } />

        <View style={{ marginHorizontal: 1, flexDirection: 'row' }} />
        <Text style={{ color: COLORS.secondary, fontSize: 25, fontWeight: 'bold' }}>
          Pia Mackenzie
        </Text>

      </View>


      <View style={{ marginHorizontal: 87, flexDirection: "row" }}>
        {fbreviews?.map(reviews =>
          <Text key={reviews.id} style={{ color: COLORS.grey, fontSize: 15 }}>
            {reviews.Pia}
          </Text>



        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={style.tinyLogo}

          source={
            require('../../assets/facebook.jpg')
          } />

        <View style={{ marginHorizontal: 1, flexDirection: 'row' }} />
        <Text style={{ color: COLORS.secondary, fontSize: 25, fontWeight: 'bold' }}>
          Dui Huilang
        </Text>

      </View>


      <View style={{ marginHorizontal: 87, flexDirection: "row" }}>
        {fbreviews?.map(reviews =>
          <Text key={reviews.id} style={{ color: COLORS.grey, fontSize: 15 }}>
            {reviews.Dui}
          </Text>



        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={style.tinyLogo}

          source={
            require('../../assets/facebook.jpg')
          } />

        <View style={{ marginHorizontal: 1, flexDirection: 'row' }} />
        <Text style={{ color: COLORS.secondary, fontSize: 25, fontWeight: 'bold' }}>
          Jose Luis Castello
        </Text>

      </View>


      <View style={{ marginHorizontal: 87, flexDirection: "row" }}>
        {fbreviews?.map(reviews =>
          <Text key={reviews.id} style={{ color: COLORS.grey, fontSize: 15 }}>
            {reviews.Jose}
          </Text>



        )}
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={style.tinyLogo}

          source={
            require('../../assets/trip.png')
          } />

        <View style={{ marginHorizontal: 1, flexDirection: 'row' }} />
        <Text style={{ color: COLORS.secondary, fontSize: 25, fontWeight: 'bold' }}>
          Grace
        </Text>

      </View>


      <View style={{ marginHorizontal: 87, flexDirection: "row" }}>
        {fbreviews?.map(reviews =>
          <Text key={reviews.id} style={{ color: COLORS.grey, fontSize: 15 }}>
            {reviews.Grace}
          </Text>



        )}
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={style.tinyLogo}

          source={
            require('../../assets/trip.png')
          } />

        <View style={{ marginHorizontal: 1, flexDirection: 'row' }} />
        <Text style={{ color: COLORS.secondary, fontSize: 25, fontWeight: 'bold' }}>
          Yusuf
        </Text>

      </View>


      <View style={{ marginHorizontal: 87, flexDirection: "row" }}>
        {fbreviews?.map(reviews =>
          <Text key={reviews.id} style={{ color: COLORS.grey, fontSize: 15 }}>
            {reviews.Yusuf}
          </Text>



        )}
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={style.tinyLogo}

          source={
            require('../../assets/trip.png')
          } />

        <View style={{ marginHorizontal: 1, flexDirection: 'row' }} />
        <Text style={{ color: COLORS.secondary, fontSize: 25, fontWeight: 'bold' }}>
          Kaywee
        </Text>

      </View>


      <View style={{ marginHorizontal: 87, flexDirection: "row" }}>
        {fbreviews?.map(reviews =>
          <Text key={reviews.id} style={{ color: COLORS.grey, fontSize: 15 }}>
            {reviews.Kaywee}
          </Text>



        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={style.tinyLogo}

          source={
            require('../../assets/trip.png')
          } />

        <View style={{ marginHorizontal: 1, flexDirection: 'row' }} />
        <Text style={{ color: COLORS.secondary, fontSize: 25, fontWeight: 'bold' }}>
          Gsx
        </Text>

      </View>


      <View style={{ marginHorizontal: 87, flexDirection: "row" }}>
        {fbreviews?.map(reviews =>
          <Text key={reviews.id} style={{ color: COLORS.grey, fontSize: 15 }}>
            {reviews.Gsx}
          </Text>



        )}
      </View>



      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={style.tinyLogo}

          source={
            require('../../assets/logo.png')
          } />

        <View style={{ marginHorizontal: 1, flexDirection: 'row' }} />
        <Text style={{ color: COLORS.secondary, fontSize: 25, fontWeight: 'bold' }}>
          Gsx
        </Text>

      </View>


      <View style={{ marginHorizontal: 87, flexDirection: "row" }}>
        {fbreviews?.map(reviews =>
          <Text key={reviews.id} style={{ color: COLORS.grey, fontSize: 15 }}>
            {reviews.review}
          </Text>



        )}
      </View>


















      <TouchableOpacity


        activeOpacity={1}
        onPress={() => navigation.navigate('AddReviewScreen')}>
        <View>
          <View style={style.btn}>
            <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
              Review Now
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  tinyLogo: {
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    width: 45,
    height: 45,
    flexDirection: 'row',


  },
});

export default ReviewScreen;
