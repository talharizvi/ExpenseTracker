import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,backgroundColor:'#F9FAFB'
    },
    buttonStyle:{
        marginBottom:40,marginHorizontal:20,backgroundColor:'#613EEA',position:'absolute',bottom:0,left:0,right:0,paddingVertical:14,borderRadius:6
    },
    balanceTextStyle:{
        color:'#171822',fontSize:18,fontWeight:'500',alignSelf:'center',marginTop:40,marginHorizontal:10
    },
    itemViewStyle:{
        width: 75, height: 75,marginVertical:12, borderRadius:75/2,backgroundColor:'rgba(97, 62, 234, 0.2)',justifyContent:'center',alignItems:'center'
    },
    itemParentView:{
        flexDirection:'row',marginHorizontal:12,justifyContent:'space-between'
    },
    textStyle:{
        marginLeft:20,marginTop:56,fontSize:32,fontWeight:'600',color:'#000000'
    },
    extraTextStyle:{
        fontSize:16,fontWeight:'600',textAlign:'center',marginTop:18
    },
    iconStyle:{
        marginLeft:10,top:60
    }
})