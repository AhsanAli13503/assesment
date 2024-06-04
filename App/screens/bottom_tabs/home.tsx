import {FunctionComponent} from 'react';
import {View, Text, ScrollView} from 'react-native';

const Home: FunctionComponent = () => {
  return (
    <ScrollView style={{flexGrow: 1, backgroundColor: '#EF7D00'}}>
      <View style={{flexDirection: 'row'}}>
        <Text>penny appeal</Text>
        <Text>Salam, Ahmed</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
