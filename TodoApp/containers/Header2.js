import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
IMAGE_MAX_HEIGHT = 80
IMAGE_MIN_HEIGHT = 40

const Header2 = () =>  (
    <View style={{ flex:1 }}>

        <View style={{
            position: 'absolute',
            top:0,
            left:0,
            right: 0,
            backgroundColor: 'blue',
            height: HEADER_MAX_HEIGHT
        }}>

        </View>

        <ScrollView style={{ flex:1 }}>

            <View style={{
                height: IMAGE_MAX_HEIGHT,
                width: IMAGE_MAX_HEIGHT,
                borderRadius: IMAGE_MAX_HEIGHT/2,
                borderColor: 'white',
                borderWidth: 3,
                overflow: 'hidden',
                marginTop: HEADER_MAX_HEIGHT - (IMAGE_MAX_HEIGHT/2),
                marginLeft: 10
            }}>
                <Image source={require('../assets/todoicon.png')}
                style={{ flex: 1, width: null, height: null }}></Image>
            </View>

            <View><Text style={{ fontWeight: 'bold', fontSize: 26, paddingLeft: 10 }}>Todo List</Text></View>

        </ScrollView>

    </View>
);

export default Header2;