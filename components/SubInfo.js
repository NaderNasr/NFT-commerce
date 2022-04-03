import { View, Text, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = ({title, subtitle, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        colors: COLORS.primary
      }}>{title}</Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        colors: COLORS.primary
      }}>{subtitle}</Text>
    </View>
  )
}

export const ETHPrice = ({price}) => {
  return (
    <View style={{flexDirection:'row', alignItems: 'center', margin: SIZES.base}}>
      <Image source={assets.eth} resizeMode="contain" style={{width: 20, height: 20, marginRight: 2}}/>
      <Text style={{fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.primary}}>{price}</Text>
    </View>
  )
}

export const ImageCmp = ({imgUrl, idx}) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: idx === 0 ? 0 : -SIZES.font
      }}
    />
  )
}

export const People = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[assets.person02, assets.person03, assets.person04].map((imgUrl, idx) => (
        <ImageCmp imgUrl={imgUrl} idx={idx} key={`People - ${idx }`}/>
      ))}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: '50%'
    }}>
      <Text style={{
        fontFamily: FONTS.regular, 
        fontSize: SIZES.small, 
        color: COLORS.primary
        }}>
        Ending In
        </Text>
        <Text style={{
        fontFamily: FONTS.semiBold, 
        fontSize: SIZES.medium, 
        color: COLORS.primary
        }}>
        22h 19m
        </Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <People/>
      <EndDate/>
    </View>
  )
}