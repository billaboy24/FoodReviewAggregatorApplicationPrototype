import React, { useState,useEffect } from 'react';
import {
  
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import db from '../../utils/Firebase';
import {
    InputField,
    InputWrapper,
    
    
   
  } from '../../styles/AddPost';




    
  

 





const AddReviewScreen = ({navigation }) => {
    const [post, setPost] = useState(null);

  

  

    const submitPost = async () => {

        db.collection("Zenzoro Food Reviews").add({
     
            review:post,
            
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
            
    }

  
  


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
          /><Text style={{color: COLORS.secondary, fontSize: 18, fontWeight: 'bold'}}>
          Add Review
        </Text>

          <Icon name="bookmark-border" size={28} color={COLORS.primary} />
        </View>
        
        <View style={style.container}>

      <InputWrapper>
        
        <InputField
          placeholder="What's on your review?"
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={(content) => setPost(content)}
        />
        
      </InputWrapper>
      
    </View>

        
        
       
    <TouchableOpacity onPress={submitPost} >
        <View>
        <View style={style.btn}>
          <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
            Save Review
          </Text>
        </View>
      </View>
      </TouchableOpacity>
     
    </ScrollView>
  );
};

const style = StyleSheet.create({

        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
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

export default AddReviewScreen;
