import React from 'react';

import {
    View,
    Button,
    Text,
    Image,
    StyleSheet
} from 'react-native';

HEADER_MAX_HEIGHT = 80
HEADER_MIN_HEIGHT = 70
IMAGE_MAX_HEIGHT = 80
IMAGE_MIN_HEIGHT = 40

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 20,
      height: HEADER_MAX_HEIGHT
    },
    container: {
        height: 120
    }
});

const Header = () => (

    <View style={styles.container}>

        <View style={styles.header}>

            <View style={{
                height: IMAGE_MAX_HEIGHT,
                width: IMAGE_MAX_HEIGHT,
                borderColor: 'white', 
                overflow: 'hidden',
                borderRadius: IMAGE_MAX_HEIGHT/2,
                borderColor: 'white',
                borderWidth: 3,
                overflow: 'hidden',
                marginTop: HEADER_MAX_HEIGHT - (IMAGE_MAX_HEIGHT/2),
                marginLeft: 0
        
            }}>
                <Image source={require('../assets/todoicon.png')}
                style={{ flex: 1, width: null, height: null }}></Image>
            </View>

            <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>Todo App</Text>           

            <View style={{
                height: 50,
                width: 50,
                borderColor: 'white', 
                overflow: 'hidden',
        
            }}>
                <Image source={require('../assets/exit-icon.png')}
                style={{ flex: 1, width: null, height: null }}></Image>
            </View>
            
        </View>

    </View>

);

export default Header;