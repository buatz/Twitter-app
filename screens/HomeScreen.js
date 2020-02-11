import React from 'react';
import {View,Text,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/Colors";

const HomeScreen = ()=>{
        return(
                <View style={{backgroundColor:"#DBDBDB",flex:1,}}>


                    <View style={{paddingHorizontal:15,paddingVertical:18}}>
                        <Text style={{fontSize:34,fontWeight:"bold"}}>Settings</Text>
                    </View>


                <View style={{flexDirection:"row",backgroundColor:"white",borderColor:"#C0C0C0",borderWidth:0.3,}}>

                    <View style={{paddingHorizontal:15,flex:3,height:70,justifyContent:"center" ,alignContent:"center"}}>
                        <Image source={require("../assets/images/avat.png")} style={{paddingHorizontal:15,width:60,height:60,borderRadius:40}}/>
                    </View>

                    <View style={{flex:9,justifyContent:"center",paddingHorizontal:15,height:70}}>
                        <Text style={{fontSize:24}}>Francis Boateng</Text>
                        <Text>Apple ID,iCloud,iTunes & App Store</Text>
                    </View>

                    <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
                        <Ionicons
                            name={"ios-arrow-forward"}
                            size={16}
                        />
                    </View>
                </View>


                 <View style={{paddingHorizontal:15,height:40,justifyContent:"center",alignItems:"center",backgroundColor:"white",flexDirection:"row",marginTop:16,borderColor:"#C0C0C0",borderWidth:0.3}}>
                     <View style={{flex:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:30}}>
                         <Text style={{paddingHorizontal:"15"}}>Finish setting up your iPhone</Text>
                         <View style={{justifyContent:"center",height:20,alignItems:"center",borderRadius:10,backgroundColor:"red",paddingRight:8}}>
                             <Text style={{fontWeight:"bold",paddingLeft:5}}>1</Text>
                         </View>

                     </View>

                     <View style={{flex:1,height:30,justifyContent:"center",paddingLeft:40}}>
                         <Ionicons
                             name={"ios-arrow-forward"}
                             size={16}
                         />
                     </View>

                 </View>

                </View>
        );
}
export default HomeScreen;