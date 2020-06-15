import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,backgroundColor:'#F9FAFB'
    },
    headerText:{
        fontSize:24,fontWeight:'500',textAlign: 'center',color:'#000000',marginTop:40
    },
    balanceText:{
        fontSize:32,fontWeight:'600',marginLeft:20,color:'#171D33'
    },
    itemViewStyle:{
        backgroundColor:'#FFFFFF',flexDirection:'row',justifyContent:'space-between',
        marginHorizontal:13,paddingVertical:20,paddingHorizontal:14,borderRadius:6,marginTop:11
    },
    buttonStyle:{
        marginBottom:40,marginHorizontal:20,backgroundColor:'#613EEA',position:'absolute',bottom:0,left:0,right:0,paddingVertical:14,borderRadius:6
    },
    todayTextStyle:{
        marginLeft:22,marginTop:33,fontWeight:'500',fontSize:12,color:'#757F8C',marginBottom:11
    },
    transferTextStyle:{
        alignSelf:'center',color:'#FFFFFF',fontSize:20,fontWeight:'600'
    },
    parentViewStyle:{
        backgroundColor:'#FFFFFF',marginHorizontal:10,marginTop:43,borderRadius:8
    },
    earningTextStyle:{
        marginLeft:13,marginTop:16,color:'#171822',marginBottom:32,fontSize:20
    },
    topViewStyle:{
        flexDirection:'row',justifyContent:'space-between',marginHorizontal:33
    },
    childViewStyle:{
        marginTop:10,alignItems:'center',marginBottom:18
    }
})