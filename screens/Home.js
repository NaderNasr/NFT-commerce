import { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {

  const [nftData, setNftData] = useState(NFTData);
  const handleSearch = (val) => {
    if(!val.length){
      return setNftData(NFTData)
    }
    const filterData = NFTData.filter((item) => item.name.toLowerCase().includes(val.toLowerCase()))
    if(filterData.length){
      setNftData(filterData)
    } else {
      setNftData(NFTData)
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false} //hide vertical scroll bar
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
        </View>
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, height: 300, backgroundColor: COLORS.white }} />

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

//-----------------------------------------
//https://reactnative.dev/docs/flatlist