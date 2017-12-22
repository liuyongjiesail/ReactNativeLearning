/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import { Text } from 'react-native';

// export default class test33 extends Component {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { Image } from 'react-native';

// export default class Bananas extends Component {
// 	render() {
// 		let pic = {
// 			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
// 		};
// 		return (
// 			<Image source={pic} style={{width: 193, height: 110}} />
// 		);
// 	}
// }

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Greeting extends Component {
// 	render() {
// 		return (
// 			<Text>Hello {this.props.name}!</Text>
// 		);
// 	}
// }

// export default class LotsOfGreetings extends Component {
// 	render() {
// 		return (
// 			<View style={{alignItems: 'center'}}>
// 				<Greeting name = 'liuyongjie'/>
// 				<Greeting name = 'hahaahhhah'/>
// 				<Greeting name = 'title'/>
// 			</View>
// 		);
// 	}
// }

// import React, { Component } from 'react';
// import { Text , View } from 'react-native';

// class Blink extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { showText: true };

// 		setInterval(() => {
// 			this.setState(previousState => {
// 				return { showText: !previousState.showText };
// 			});
// 		}, 1000);
// 	}

// 	render() {
// 		let display = this.state.showText ? this.props.text : ' ';
// 		return (
// 			<Text>{display}</Text>
// 			);
// 	}
// }

// export default class BlinkApp extends Component {

// 	render() {
// 		return (
// 			<View>
// 				<Blink text= 'I love to blink'/>
// 				<Blink text= 'I love to blink'/>
// 				<Blink text= 'I love to blink'/>
// 				<Blink text= 'I love to blink'/>
// 				<Blink text= 'I love to blink'/>
// 				<Blink text= 'I love to blink'/>
// 			</View>
// 			);
// 	}
// }

// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//     backgroundColor: '#333333'
//   },
// });

// AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);



// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // 试试去掉父View中的`flex: 1`。
//       // 则父View不再具有尺寸，因此子组件也无法再撑开。
//       // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
//       <View style={{height: 300}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };


// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={{
//       	flex: 1, 
//       	flexDirection: 'row', 
//       	justifyContent: 'flex-end',
//       	alignItems: 'flex-end',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// AppRegistry.registerComponent('test33', () => FlexDirectionBasics);


// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View } from 'react-native';

// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }


// import React, { Component } from 'react';
// import{ ScrollView, Image, Text, View } from 'react-native'

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return(
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>Scrolling down </Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:80}}>React Native</Text>
//           <Image source={{uri: 'tab_charge_highlight.png'}} style={{width: 40, height: 40}} />
//  		  <Image source={{uri: 'tab_charge_highlight.png'}} style={{width: 40, height: 40}} />
// 		  <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
//        	  style={{width: 400, height: 400}} />

//         </ScrollView>
//     );
//   }
// }



// import React, { Component } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// import React, { Component } from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';


// import React, { Component, PropTypes } from 'react';
// import { NavigatorIOS, Text, TouchableHighlight, View, SectionList, StyleSheet, Button } from 'react-native';

// export default class NavigatorIOSApp extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: SectionListBasics,
//           title: '通讯录',
//           passProps: { myProp: 'foo' },
//         }}
//         style={{flex: 1}}
//         barTintColor='red'
//         titleTextColor= 'white' />
//     )
//   }
// }


// class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}/>
//         <Button
//         title="Go to Jane's profile"
//           onPress={() =>
//             this.props.navigator.push(NavigatorIOSApp)
//           }
//         />
//       </View>
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 0,
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
//   line:{
//   	paddingLeft: 10,
//   	paddingRight: 0,
//   	paddingTop: 0,
//   	paddingBottom: 0,
//   	height: 10,
//   	backgroundColor: 'blue',
//   }
// })


// import React, { Component } from 'react';  
// import {  
//   AppRegistry,  
//   StyleSheet,  
//   Text,  
//   View,  
//     ListView,  
//     Image,  
//     TouchableOpacity  
// } from 'react-native';  
  
// // var Car = require('./Car.json');  
  
// export default class xxxx extends Component({  
//   getInitialState(){  
//     return{  
//       ds: new SectionList.DataSource({  
//         getSectionData: (dataBlob, sectionID) => dataBlob[sectionID],  
//         getRowData: (dataBlob, sectionID, rowID) => dataBlob[sectionID + ':' + rowID],  
//         rowHasChanged: (r1, r2) => r1 !== r2,  
//         sectionHeaderHasChanged:(s1, s2) => s1 !== s2  
//       })  
//     }  
//   },  
//   componentDidMount(){  
//     // var jsonData = Car.data;  
//     // var dataBlob = {}, sectionIDs = [], rowIDs = [], cars = [];  
//     // for(var i=0; i<jsonData.length; i++){  
//     //   sectionIDs.push(i);  
//     //   dataBlob[i] = jsonData[i].title;  
//     //   cars = jsonData[i].cars;  
//     //   rowIDs[i] = [];  
//     //   for(var j=0; j<cars.length; j++){  
//     //     rowIDs[i].push(j);  
//     //     dataBlob[i+':'+j] = cars[j];  
//     //   }  
//     // }  
//     this.setState({  
//       ds: this.state.ds.cloneWithRowsAndSections([['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']])  
//     });  
//   },  
//   render() {  
//     return (  
//         <View style={styles.outerViewStyle}>  
//           <View style={styles.headerViewStyle}>  
//             <Text style={{color:'white', fontSize:20}}>tableview吸顶效果Demo</Text>  
//           </View>  
//           <ListView  
//               dataSource={this.setState.ds}  
//               renderRow={this.renderRow}  
//               renderSectionHeader={this.renderSectionHeader}  
//           />  
//         </View>  
//     );  
//   },  
//   renderRow(row){  
//     return(  
//         <TouchableOpacity activeOpacity={0.5}>  
//           <View style={styles.rowStyle}>  
//             <Image source={{uri: 'tab_charge_highlight.png'}} style={styles.rowImageStyle}/>  
//             <Text style={{marginLeft:8}}>测试是谁是</Text>  
//           </View>  
//         </TouchableOpacity>  
//     );  
//   },  
//   renderSectionHeader(sectionData, sectionID){  
//     return(  
//         <View style={styles.sectionHeaderViewStyle}>  
//           <Text style={{marginLeft:8, color:'white'}}>{sectionData}</Text>  
//         </View>  
//     );  
//   }  
// });  
  
// const styles = StyleSheet.create({  
//   outerViewStyle:{  
//     flex:1  
//   },  
//   headerViewStyle:{  
//     height:44,  
//     backgroundColor:'orange',  
//     justifyContent:'flex-end',  
//     alignItems:'center'  
//   },  
//   rowStyle:{  
//     flexDirection:'row',  
//     alignItems:'center',  
//     padding:8,  
//     borderBottomColor:'#EEEEEE',  
//     borderBottomWidth:0.5  
//   },  
//   rowImageStyle:{  
//     width:60,  
//     height:60,  
//   },  
//   sectionHeaderViewStyle:{  
//     backgroundColor:'#BBBBBB',  
//     height:20,  
//     justifyContent:'center'  
//   }  
// });  

// import {
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   Alert,
//   ScrollView
// } from "react-native";
// import React from "react";
// import Cell from "./Cell";

// type Props = {
//   data: Array<Object>,
//   renderRow: (item: any, rowID: number) => any,
//   renderHeader?: () => any,
//   renderFooter?: () => any,
//   appendMoreCell?: () => void,
//   rowHasChanged?: (r1: any, r2: any) => boolean,
//   onRefresh?: () => any,
//   refreshing?: boolean,
//   style?: any
// };
// const VIEWABILITY_CONFIG = {
//   minimumViewTime: 3000,
//   viewAreaCoveragePercentThreshold: 100,
//   waitForInteraction: true
// };

// class FlatListPage extends React.Component {
//   constructor(props: Props) {
//     super(props);
//     this.state = { horizontal: false, refreshing: false };
//   }

//   render() {
//     return (
//       <FlatList
//         horizontal={this.state.horizontal}
//         data={this.props.data}
//         refreshing={false}
//         windowSize={41}
//         initialNumToRender={40}
//         disableVirtualization={false}
//         getItemLayout={(data, index) => ({
//           length: 78,
//           offset: 78 * index,
//           index
//         })}
//         onRefresh={() => Alert.alert("on refresh")}
//         data={this.genRows()}
//         renderItem={({ item, index }) => renderRow(item, index)}
//       />
//     );
//   }

//   getHeader = () => {
//     return (
//       <View>
//         <TouchableOpacity
//           style={styles.flatlistBtn}
//           onPress={() => {
//             this.setState({ horizontal: !this.state.horizontal });
//           }}
//         >
//           <Text style={{ color: "white" }}>CHANGE</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   cell(rowData, rowID, prefix) {
//     return rowData.collapsed
//       ? null
//       : <View style={styles.cellContainer}>
//           <Image style={styles.cellIcon} source={pic} />
//           <Text style={styles.cellTitle}>
//             {prefix + rowData.text + rowID}
//           </Text>
//         </View>;
//   }

//   genRows = function() {
//     var dataBlob = [];
//     for (var i = 0; i < 1000; i++) {
//       dataBlob.push({ text: "CELL  ", key: i });
//     }
//     return dataBlob;
//   };

// }

// const styles = StyleSheet.create({
//   flatlistBtn: {
//     width: 100,
//     height: 80,
//     backgroundColor: "red",
//     marginLeft: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default FlatListPage;

// import React, { Component } from 'react'
// import {
//     View,
//     Image,
//     Dimensions,
//     ScrollView,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     Button,
//     FlatList,
//     ActivityIndicator,
//     RefreshControl,
// }from 'react-native'

// var flatListData = [{
//         key: 'a',
//         text: '444'
//     },{
//         key: 'b',
//         text: '333'
//     },{
//         key: 'c',
//         text: '2222'
//     },{
//         key: 'd',
//         text: '111'
//     }];

// class DetailePage extends Component {

//      constructor(props) {
//         super(props);

//         // this.state = {

//         // };
//     }

//     render() {
//         // const { params } = this.props.navigation.state;
//         return (

//             <View>

//                 <FlatList
//                     ItemSeparatorComponent={this.renderItemSeparator.bind(this)}
//                     data={flatListData}
//                     // ListHeaderComponent={this.ListHeaderComponent.bind(this)}
//                     renderItem={this.renderItem.bind(this)}
//                     keyExtractor={this._keyExtractor}
//                     refreshControl={
//                         <RefreshControl
//                             refreshing={false}
//                         />
//                     }
//                 />      
//             </View>

//         )
//     }


//   //此函数用于为给定的item生成一个不重复的key
//     _keyExtractor = (item, index) => item.key;

//     componentDidMount() {

//     }

//     // //列表的头部
//     // ListHeaderComponent() {
//     //     return (
//     //         <DetailsHeadItem titleName='学习' unitName='111'/> 
//     //     )
//     // }

//     //列表的每一行
//     renderItem({item,index}) {
//         return (
//             <TouchableOpacity key={index} activeOpacity={1} onPress={this.clickItem.bind(this,item,index)}>
//                 <Text> {item.text} </Text> 
//                 <Image source={{uri: 'tab_charge_highlight.png'}} style={{marginLeft:100,width: 50, height: 50}}/>  

//             </TouchableOpacity>
//         )
//     }
//     //绘制列表的分割线
//     renderItemSeparator(){
//        return(
//         <View style={{marginTop : 10,
//           paddingRight:0, marginLeft:20, height:1, backgroundColor:'red'}}/>
//         )
//     }

//     //点击列表点击每一行
//     clickItem(item,index) {
//         alert(index)
//     }

// }

// export default DetailePage


//TabBar示例

// 'use strict';

// var React = require('react');
// var ReactNative = require('react-native');
// var CreateReactClass = require('create-react-class');

// var {
//   StyleSheet,
//   TabBarIOS,
//   Text,
//   View,
// } = ReactNative;

// var RootTabBarController = CreateReactClass({

//     statics: {
//       title: '<TabBarIOS>',
//       description: 'Tab-based navigation.',
//     },

//     displayName: 'RootTabBarController',

//     getInitialState: function() {
//       return {
//         selectedTab: 'newsTab',  //设置选中的Tab
//         notifCount: 0,
//         presses: 0,
//       };
//     },

//     _renderContent: function(color: string, pageText: string, num?: number){
//       return (
//         <View style={[styles.tabContent, {backgroundColor: color}]}>
//           <Text style={styles.tabText}>{pageText}</Text>
//           <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
//         </View>
//       );
//     },

//     render: function() {
//       return (
//         <TabBarIOS
//           unselectedTintColor='yellow'
//           tintColor='white'
//           barTintColor='darkslateblue'>
//           <TabBarIOS.Item
//             title='阅读赚钱'
//             icon={{uri: 'tab_charge_highlight.png', scale: 3}}
//             selected={this.state.selectedTab === 'newsTab'}
//             onPress={ () => {
//               this.setState({
//                 selectedTab: 'newsTab',
//               });
//             }}>
//             {this._renderContent('#414A8C', '阅读赚钱')}
//           </TabBarIOS.Item>

//           <TabBarIOS.Item
//             title='任务'
//             icon={{uri: 'tab_charge_highlight.png', scale: 3}}
//             selected={this.state.selectedTab === 'taskTab'}
//             onPress={ () => {
//               this.setState({
//                 selectedTab: 'taskTab',
//               });
//             }}>
//             {this._renderContent('#414A8C', '任务')}
//           </TabBarIOS.Item>

//           <TabBarIOS.Item
//             title='兑换'
//             icon={{uri: 'tab_charge_highlight.png', scale: 3}}
//             selected={this.state.selectedTab === 'exchangeTab'}
//             onPress={ () => {
//               this.setState({
//                 selectedTab: 'exchangeTab',
//               });
//             }}>
//             {this._renderContent('#414A8C', '兑换')}
//           </TabBarIOS.Item>
//         </TabBarIOS>
//       );
//     },
// });

// var styles = StyleSheet.create({
//   tabContent:{
//     flex: 1,
//     alignItems: 'center',
//   },
//   tabText: {
//     color: 'white',
//     margin: 25,
//   },
// });

// module.exports = RootTabBarController;


// navigation 跳转示例

var React = require('react');
var ReactNative = require('react-native');
var CreateReactClass = require('create-react-class');

var {
  StyleSheet,
  View,
  NavigatorIOS,
  Text,
  TouchableOpacity,
} = ReactNative;

var Navigation = CreateReactClass({
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: '首页',
          translucent: false,
          shadowHidden: false,
          tintColor: 'black',
          barTintColor: 'yellow',
          leftButtonTitle: '左边',
          rightButtonTitle: '右边',
          onLeftButtonPress: () => {alert('左边')},
          onRightButtonPress: () => {alert('右边')},
        }}
        style={{flex: 1}}/>
    );
  }

});

var NewDetail = CreateReactClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>新闻详情页面</Text>
      </View>
    );
  }
  
});

var Home = CreateReactClass({
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {this.props.navigator.push({
            component: NewDetail,
            title: '新闻详情',
            translucent: false,
            tintColor: 'black',
          })}
        
          }>
          <Text>点击跳转页面</Text>
        </TouchableOpacity>
      </View>
    );
  },

});


var styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }

});

module.exports = Navigation;












