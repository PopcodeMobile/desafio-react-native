import React from 'react'
import {Text, View} from 'react-native'

import type { ToDoAdd } from '../Entities/index'

import Images from '../../../Themes/Images'

type Props = {
    item : ToDoAdd,
    onToDos(values: ToDoAdd):void
}

const AddToDO = ({ item, onToDos}: Props,ref) => {
    return (
        <View>
            
        </View>
    )
}