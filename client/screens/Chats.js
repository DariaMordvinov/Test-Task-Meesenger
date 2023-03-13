import  React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import URI from '../port';

export default function Chat({ route, navigation }) {
    const user = route.params.user;
    const [users, setUsers] = useState([]);
    const [rooms, setRooms] = useState([]);

    const [chats, setChats] = useState([]);


    useEffect(() => {
        const getChats = async () => {
            try {
                const response = await fetch(`${URI}/chats`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify({user: user.id}),
                });
                const data = await response.json();
                setUsers(data.usersInfo);
                setRooms(data.rooms);
    
                const fetchedChats = [];
                rooms.forEach(r => {
                    fetchedChats.push({
                        with: r['with'],
                        name: users[r['with']]['name'],
                        avatar: users[r['with']]['avatar'],
                        text: r['room'][r['room'].length - 1]['text'],
                        time: r['room'][r['room'].length - 1]['time']
                    })
                });
                console.log(fetchedChats)
                console.log(rooms);
                // setChats(fetchedChats);
            } catch(er) {
                console.log(er);
            }
        }
        getChats();
    }, [])

    return (
        <View>
            <View>
                <Text>
                    Your chats, {user.name}
                </Text>
                    {chats}
            </View>
        </View>
    )
}