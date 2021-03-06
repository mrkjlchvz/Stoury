import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  TouchableWithoutFeedback,
  Image,
  StatusBar
} from 'react-native'
import Card from '../common/Card'
import _ from 'lodash'
import data from '../../../Mountains.json'

class CatalogScreen extends Component {
  static navigationOptions = {
    title: '△ BUNDOK.PH',
    headerStyle: { backgroundColor: '#000' },
    headerTitleStyle: {
      fontWeight: '700',
      fontFamily: 'Avenir Next',
      letterSpacing: 1,
      color: '#fff'
    },
    headerRight: (
      <Text style={{ marginRight: 10, fontSize: 12, color: '#fff' }}>
        {' '}
        SEARCH{' '}
      </Text>
    )
  }

  componentDidMount() {
    // set statusbar to light-content
    StatusBar.setBarStyle('light-content')
  }

  setDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const mountainsArray = _.map(data.mountains, (value, key) => {
      return { ...value, name: key }
    })

    this.dataSource = ds.cloneWithRows(mountainsArray)
  }

  constructor(props) {
    super(props)
    this.setDataSource()
  }

  onButtonPress(mountain) {
    const { navigation } = this.props

    // go to ItineraryScreen
    // navigation.navigate('itinerary', { itinerary: mountain });
  }

  renderRow(mountain) {
    const { name, location, image, masl } = mountain
    const {
      container,
      imageStyle,
      textContainerStyle,
      titleStyle,
      subtitleStyle
    } = styles

    return (
      <Card>
        <TouchableWithoutFeedback onPress={() => this.onButtonPress(mountain)}>
          <View>
            <Image
              style={imageStyle}
              source={{ uri: image }}
              defaultSource={require('./images/default-placeholder.png')}
            />

            <View style={textContainerStyle}>
              <Text style={titleStyle}> {name.toUpperCase()} </Text>
              <Text style={subtitleStyle}>
                {' '}
                {location.toUpperCase()} • {masl} MASL{' '}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Card>
    )
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  }
}

const styles = {
  imageStyle: {
    height: 280,
    flex: 1
  },

  textContainerStyle: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
  },

  titleStyle: {
    alignSelf: 'flex-start',
    fontWeight: '700',
    fontFamily: 'Avenir Next',
    letterSpacing: 1
  },

  subtitleStyle: {
    alignSelf: 'flex-start',
    fontFamily: 'Avenir Next',
    letterSpacing: 1,
    fontSize: 12
  }
}

export default CatalogScreen
