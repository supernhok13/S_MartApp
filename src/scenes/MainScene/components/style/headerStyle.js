import {StyleSheet} from 'react-native';

export default headerStyle = StyleSheet.create({
    container:{
        height:60,
        width:"100%",
        backgroundColor:"#6039AF",
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    body:{
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:"center"
    },
    iconImage:{
        width:50,
        height:50,
        borderRadius: 25,
    },
    menuImage:{
        width:30,
        height:30,
    },
    button:{
        position:"absolute",
        top:15,
        left:10,
        width:30,
        height:30
    }
  });
  