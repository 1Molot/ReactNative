import {StatusBar} from 'expo-status-bar';
import {FlatList, ListRenderItem, StyleSheet, View, Text, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('screen') //izmerenie ekrana

const WIDTH = width
const HEIGHT = height

type ItemType = {
    id: number
    title: string
    price: number
}

const titles = ['Iphone', 'Android', 'Macbook', 'Lenovo', 'Asus']
const prices = [1000, 2000, 3000, 500, 100]

//const data1 = new Array(30).fill(null).map((_,index) => ({}))
const data: ItemType[] = [...Array(30)].map((_, index) => ({
    id: index + 1,
    title: titles[index % titles.length],
    price: prices[index % prices.length]
}))

export default function App() {
    // console.log('data', JSON.stringify(data, null, 2))
    // const [value,setValue] = useState('')
    const render: ListRenderItem<ItemType> = ({item, index, separators}) => {
        return <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    }
    return (
        <View style={styles.container}>
            <FlatList
                ListEmptyComponent={()=>{
                    return <View><Text>Пустой массив</Text></View> //auto atrisovka
                }}
                ListHeaderComponent={() => {
                    return <View><Text>Хедер</Text></View> //auto atrisovka
                }}
                ListFooterComponent={()=>{
                    return <View><Text>Footer</Text></View> //auto atrisovka
                }}
                stickyHeaderIndices={[0]}//липкий хедер
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={render}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    item: {
        marginVertical: 15,
        backgroundColor: '#a199e1',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: (WIDTH - 20 * 2) / 2 - 5,
        height: (WIDTH - 20 * 2) / 2 - 5,
        position: 'relative'
    },
    title: {
        position: 'absolute',
        top: -15,
        left: 15,
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 2
    },
    price:{
        marginTop:15
    }
});
