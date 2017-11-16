import React from 'react'
import {StackNavigator} from 'react-navigation'
import Test2 from '../Components/test/test2/test2'
import Test3 from '../Components/test/test3/test3Test'
import Test4 from '../Components/test/test4/text4'

const  RootNavigator = StackNavigator({

    Test2: {
      screen: Test2,
    },

    Test3: {
      screen: Test3,
    },

    Test4: {
      screen: Test4,
    },
    
})
export default class App extends React.Component {

  render() {
    return <RootNavigator/>
  }
}