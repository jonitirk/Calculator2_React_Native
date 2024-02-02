import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';



export default function HistoryScreen({ route }) {

    const { data } = route.params;

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={<Text style={styles.header}>History</Text>}
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <Text>{item}</Text>}>

            </FlatList>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 10,
    },
    header : {
        fontSize: 15,
        fontWeight: 'bold',
      },
});