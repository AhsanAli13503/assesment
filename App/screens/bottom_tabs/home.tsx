import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import Svg, {Path, SvgProps} from 'react-native-svg';

const Home: React.FunctionComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topHeader}>
        <Text>{'penny\n appeal'}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>Salam, Ahmed</Text>
          <SvgComponent />
        </View>
      </View>

      <View
        style={{
          alignSelf: 'center',
          borderColor: '#FFF',
          borderWidth: 2,
          borderRadius: 32,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <Text>{'Add a donation goal'}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flexGrow: 1, backgroundColor: '#EF7D00'},

  topHeader: {flexDirection: 'row', justifyContent: 'space-between'},
});

const SvgComponent = (props: SvgProps) => (
  <Svg width={33} height={32} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M23.804 20.126h-1.446l-.512-.494a11.84 11.84 0 0 0 2.873-7.74 11.893 11.893 0 1 0-11.893 11.893 11.84 11.84 0 0 0 7.74-2.872l.493.512v1.445L30.207 32l2.727-2.726-9.13-9.148Zm-10.978 0a8.222 8.222 0 0 1-8.233-8.234 8.222 8.222 0 0 1 8.233-8.233 8.222 8.222 0 0 1 8.233 8.233 8.222 8.222 0 0 1-8.233 8.234Z"
    />
  </Svg>
);

export default Home;
