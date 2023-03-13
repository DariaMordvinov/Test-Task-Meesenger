import { StyleSheet, Text, ScrollView, View, FlatList, SafeAreaView } from 'react-native';
import useUsers from '../hooks/useUsers';
import UserSpan from '../components/userSpan';


export default function Home(props) {
  const users = useUsers();

  return (
      <View style={styles.container}>
        <Text style={styles.text}>Log in as:</Text>
        <FlatList style={styles.list} 
                  data={users} 
                  keyExtractor={item => item.id} 
                  renderItem={({ item }) => <UserSpan user={item}
                                                      navigation={props.navigation} 
                                                       />} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 130,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 50
  },
  list: {
    marginTop: 10
    }
});