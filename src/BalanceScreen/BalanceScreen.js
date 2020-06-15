import React,{Component,useState,useEffect} from 'react';
import { View, Text, Image, ScrollView, TextInput,Button,FlatList,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles'


function BalanceScreen({navigation,list,availableBalance}){

    
    let totalBalance = availableBalance
    let transferedValue = list.reduce((a,b) => a  + b , 0)
     
    return(
     <View style={styles.container}>
         <Text style={styles.headerText}>Empala</Text>
         <Text style={styles.balanceText}>Balance</Text>
         <View style={styles.parentViewStyle}>
         <Text style={styles.earningTextStyle}>Your earnings in April</Text>
         <View style={styles.topViewStyle}>
            <View style={styles.childViewStyle}>
    {transferedValue==0?<Text style={{fontWeight:'500',fontSize:24,color:'#171822'}}>$0</Text>:<Text style={{fontWeight:'500',fontSize:24,color:'#171822'}}>-${transferedValue} </Text>}

            <Text style={{fontWeight:'500',fontSize:13,color:'#3A4276'}}>Transfers</Text>
            </View>

            <View style={{marginTop:10,alignItems:'center',marginBottom:18}}>
            <Text style={{fontWeight:'500',fontSize:24,color:'#171822'}}>${totalBalance-transferedValue} </Text>
            <Text style={{fontWeight:'500',fontSize:13,color:'#3A4276'}}>Available</Text>
            </View>
         </View>
         </View>

        <Text style={styles.todayTextStyle}>Today</Text>

        <FlatList
          data={list.reverse()}
          renderItem={({ item }) => <View style={styles.itemViewStyle} 
          key={item}>
          <Text style={{color:'#171D33',fontSize:14,fontWeight:'500'}}>Transfer</Text>
          <Text style={{color:'#613EEA',fontSize:16,fontWeight:'600'}}>-$ {item}</Text>
          </View>}
          keyExtractor={(item,index) => item.toString()}
          ListEmptyComponent={()=><Text style={{alignSelf:'center'}}>No Transfers for today</Text>}
          style={{marginBottom:100}}
        />

      <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Transfer')}>
        <Text style={styles.transferTextStyle}>TRANSFER MONEY</Text>
      </TouchableOpacity>
    
     </View>)   
    }

const mapStateToProps=(state)=>{
    console.log("state:",state)    
    return{
        list:state.list,
        availableBalance:2400
    }
  }

export default connect(mapStateToProps)(BalanceScreen)
  
