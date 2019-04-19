import React from 'react';
import { Router, Scene , Stack} from 'react-native-router-flux';
import TelaPrincipal from './components/TelaPrincipal';
import EditItem from './components/EditItem';
import {
    StyleSheet
  } from 'react-native';
export default props => (
    <Router>
        <Stack key="root">
        <Scene key='telaPrincipal'  component={TelaPrincipal} title='My Todo List' navigationBarStyle={styles.navBar} titleStyle={styles.navText} hideNavBar/>
        <Scene key='editItem'  component={EditItem} />
        </Stack>
    </Router>
    
);
const styles = StyleSheet.create({
    navBar: {
        borderWidth: 1.5, 
        borderColor: '#00b5ec', 
        backgroundColor:"#00b5ec",
        
        
    },
    navText: {
        color: 'white',
        justifyContent:'center',
        alignItems:'center'
    }
  });