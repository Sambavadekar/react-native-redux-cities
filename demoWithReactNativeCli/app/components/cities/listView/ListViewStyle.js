import { StyleSheet } from 'react-native';
export const ListStyle = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     backgroundColor:"#E9E9EF"
    },
    itemTitle: {
      padding: 10,
      fontSize: 18,
      textAlignVertical:"bottom",
      height: 32,
    },
    itemSubTitle: {
      paddingLeft:10,
      fontSize: 12,
      height: 20,
      textAlignVertical:"top",
      color:'gray'
    },
    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    },
  })