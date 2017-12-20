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


import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View, SectionList, StyleSheet } from 'react-native';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: SectionListBasics,
          title: '通讯录',
        }}
        style={{flex: 1}}
        barTintColor='red'
        titleTextColor= 'white'
       />
    )
  }
}

// class MyScene extends Component {
//   static propTypes = {
//     // title: PropTypes.string.isRequired,
//     // navigator: PropTypes.object.isRequired,
//   }

//   constructor(props, context) {
//     super(props, context);
//     this._onForward = this._onForward.bind(this);
//   }

//   _onForward() {
//     this.props.navigator.push({
//       title: 'Scene ' + nextIndex,
//     });
//   }

//   render() {
//     return (
//       <View>
//         <Text>Current Scene: { this.props.title }</Text>
//         <TouchableHighlight onPress={this._onForward}>
//           <Text>Tap me to load the next scene</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }

class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 0,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  line:{
  	paddingLeft: 10,
  	paddingRight: 0,
  	paddingTop: 0,
  	paddingBottom: 0,
  	height: 10,
  	backgroundColor: 'blue',
  }
})












