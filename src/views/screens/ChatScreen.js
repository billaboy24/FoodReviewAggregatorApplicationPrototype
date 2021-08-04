import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
    InputField,
    InputWrapper,
    
    
   
  } from '../../styles/AddPost';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import COLORS from '../../consts/colors';


const ChatScreen = ({navigation}) => {
    return (
        <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: '125%',
       
        
      }}>
      
      
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.secondary}
            onPress={navigation.goBack}
          /><Text style={{color: COLORS.secondary, fontSize: 18, fontWeight: 'bold'}}>
          Zenzoro
        </Text>

          <Icon name="bookmark-border" size={28} color={COLORS.primary} />
        </View>
        
        <View style={style.container}>

      <InputWrapper>
        
        <InputField
          placeholder="What's on your message?"
          multiline
          numberOfLines={4}
          paddingBottom='140%'
          
         
        />
        
      </InputWrapper>
      
    </View>

    <TouchableOpacity 
    onPress={() => {
        alert('Message Send!');
      }} >
        <View>
        <View style={style.btn}>
          <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
            Send Message
          </Text>
        </View>
      </View>
      </TouchableOpacity>

        
        
    
     
    </ScrollView>
  
    )
}
const style=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      header: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
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
    
})
export default ChatScreen;