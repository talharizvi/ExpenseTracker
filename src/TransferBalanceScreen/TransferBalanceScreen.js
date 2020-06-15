import React,{Component,useState} from 'react';
import { View, Text, Image, ScrollView, TextInput as DefaultTextInput,Button,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {updateList,updateBalance} from '../redux/actions';
import { TextInput as PaperTextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const defaultValues=[50,100,150,200]
function TransferBalanceScreen({navigation,list,updateList,updateBalance,availableBalance}) {

    const [amountValue,setAmountValue] = useState(0);

    let checkBalanceLimit=()=>{
        if(availableBalance>amountValue){
            if(amountValue>=54.5 && amountValue<availableBalance-4.5){
                updateList(amountValue)
                updateBalance(amountValue)
                navigation.navigate('Balance')
            }else if(amountValue<54.5){
                alert("Amount should be greater than 50")
            }else if(amountValue>=2400-4.5){
                alert("Amount should be lesser than 2400")
            }   
        }else{
                alert("Not enough balance")
        }
       
    }
     
     return(
     <View style={styles.container}>
        
         <Icon name="close" size={20} color="#171822" position='absolute' style={styles.iconStyle}/>
         <Text style={styles.balanceTextStyle}>Your balance is $ {availableBalance}</Text>
         
         <Text style={styles.textStyle}>Transfer earnings</Text>
         <View style={styles.itemParentView}>
         {
             defaultValues.map((item)=>
             <TouchableOpacity onPress={()=>setAmountValue(parseInt(item)+4.5)} key={item}>

             <View style={styles.itemViewStyle}>
             <Text>{'$'+item}</Text>
          </View>    
             </TouchableOpacity>
             )
         }
         </View>
         
         <PaperTextInput  
            label='Amount'
            onChangeText={text => setAmountValue((parseInt(text) || 0) +4.5)}
            mode="outlined"
            keyboardType = 'numeric'
            style={{marginHorizontal:23}}
        />
         <Text style={styles.extraTextStyle}>+ $4.5 early payout fee will be charged </Text>

      <TouchableOpacity style={styles.buttonStyle} 
      onPress={()=>checkBalanceLimit()}>
        <Text style={{alignSelf:'center',color:'#FFFFFF',fontSize:20,fontWeight:'600'}}>CONFIRM TRANSFER ${(amountValue)}</Text>
      </TouchableOpacity>
      
     </View>)   
    }

    const mapStateToProps=(state)=>{
        console.log("state",state)
        return{
            list:state.list,
            availableBalance:state.availableBalance
        }
      }
    
export default connect(mapStateToProps,{updateList,updateBalance})(TransferBalanceScreen)