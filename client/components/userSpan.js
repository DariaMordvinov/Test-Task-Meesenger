import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function User(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("Chats", {user: props.user})}>
            <View style={styles.box}>
                <Text style={styles.text}>{props.user.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 2,
        borderColor: '#268bd2',
        borderRadius: 5,
        marginVertical: 10,
        backgroundColor: '#268bd2',
    },
    text: {
        fontSize: 30,
        paddingVertical: 4,
        paddingHorizontal: 8,
        textAlign: 'center',
        width: 200,
        color: 'white'
    }
})