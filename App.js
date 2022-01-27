import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  // iPhone Code
  if (aspectRatio > 1.6) {
    return (
      <View style={styles.container}>

        <View style={styles.topitemsPhone} >
          <Image style={styles.iconsPhone} source={require("./assets/Icons/menu_light.png")} />
          <Text style={styles.logoPhone}>ensom</Text>
          <Image style={styles.iconsPhone} source={require("./assets/Icons/sun.png")} />
        </View>
  
        <View style={styles.profCard}>
          <Image style={styles.profPic} source={require("./assets/Profiles/mtl.jpg")} />
          <Text style={styles.profNamePhone}>MTL</Text>
          <Text style={styles.profDistancePhone}>2 miles away</Text>
        </View>

        <View style={styles.hotTake}>
          <View style={styles.hotTakeTextView}>
            <Text style={styles.hotTakeTextPhone}>My hottest take!</Text>
          </View>
          <View style={styles.hotTakeImagesPhone}>
            <Image style={styles.hotTakePlayPhone} source={require("./assets/Icons/player_light.png")} />
            <Image style={styles.hotTakeWavePhone} source={require("./assets/Icons/audio_waveform_light.png")} />
          </View>
        </View>

        <View style={styles.navBar}>
          <View style={styles.navComponent}>
            <Image style={styles.navPic} source={require("./assets/Icons/discover_light.png")} />
            <Text style={styles.navFontPhone}>Discover</Text>
          </View>
          <View style={styles.navComponent}>
            <Image style={styles.navPic} source={require("./assets/Icons/heart_light.png")} />
            <Text style={styles.navFontPhone}>Matches</Text>
          </View>
          <View style={styles.navComponent}>
            <Image style={styles.navPic} source={require("./assets/Icons/messages_light.png")} />
            <Text style={styles.navFontPhone}>DMs</Text>
          </View>
        </View>

      </View>
    );
  }

  // iPad Code
  else {
    return (
      <View style={styles.container}>

        <View style={styles.topitemsPad} >
          <Image style={styles.iconsPad} source={require("./assets/Icons/menu_light.png")} />
          <Text style={styles.logoPad}>ensom</Text>
          <Image style={styles.iconsPad} source={require("./assets/Icons/sun.png")} />
        </View>
  
        <View style={styles.profCard}>
          <Image style={styles.profPic} source={require("./assets/Profiles/mtl.jpg")} />
          <Text style={styles.profNamePad}>MTL</Text>
          <Text style={styles.profDistancePad}>2 miles away</Text>
        </View>

        <View style={styles.hotTake}>
          <View style={styles.hotTakeTextView}>
            <Text style={styles.hotTakeTextPad}>My hottest take!</Text>
          </View>
          <View style={styles.hotTakeImagesPad}>
            <Image style={styles.hotTakePlayPad} source={require("./assets/Icons/player_light.png")} />
            <Image style={styles.hotTakeWavePad} source={require("./assets/Icons/audio_waveform_light.png")} />
          </View>
        </View>

        <View style={styles.navBar}>
          <View style={styles.navComponent}>
            <Image style={styles.navPic} source={require("./assets/Icons/discover_light.png")} />
            <Text style={styles.navFontPad}>Discover</Text>
          </View>
          <View style={styles.navComponent}>
            <Image style={styles.navPic} source={require("./assets/Icons/heart_light.png")} />
            <Text style={styles.navFontPad}>Matches</Text>
          </View>
          <View style={styles.navComponent}>
            <Image style={styles.navPic} source={require("./assets/Icons/messages_light.png")} />
            <Text style={styles.navFontPad}>DMs</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Themes.light.bg,
    justifyContent: 'center',
  },

  // Style for iPhone and iPad for Top Items and Logo

  topitemsPhone: {
    flex: 1/2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Themes.light.bg,
    marginTop: 30,
    left: 0,
  },

  topitemsPad: {
    flex: 1/2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Themes.light.bg,
    margin: 20,
    left: 0,
  },


  iconsPhone: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    margin: 10,
  },

  iconsPad: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },


  logoPhone: {
    fontFamily: 'Sydney-Bold',
    fontSize: 40,
    margin: 10,
  },

  logoPad: {
    fontFamily: 'Sydney-Bold',
    fontSize: 80,
  },

  // Style for iPhone and iPad for Profile Pic and Card Details

  profCard: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },

  profPic: {
    width: '80%',
    height: '90%',
    borderRadius: 5,
    marginTop: 0,
  },


  profNamePhone: {
    fontFamily: 'Sydney',
    fontSize: 40,
    color: Themes.light.textSecondary,
    position: 'absolute',
    left: '12%',
    top: '5%',
  },

  profNamePad: {
    fontFamily: 'Sydney',
    fontSize: 65,
    color: Themes.light.textSecondary,
    position: 'absolute',
    left: '12%',
    top: '6%',
  },


  profDistancePhone: {
    fontFamily: 'Sydney',
    fontSize: 18,
    color: Themes.light.textSecondary,
    position: 'absolute',
    left: '12%',
    top: '88%',
  },

  profDistancePad: {
    fontFamily: 'Sydney',
    fontSize: 30,
    color: Themes.light.textSecondary,
    position: 'absolute',
    left: '12%',
    top: '88%',
  },

  // Style for iPhone and iPad for Hot Take Portion of the Profile

  hotTake: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
    height: '20%',
    left: '10%',
    marginBottom: '5%',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },

  hotTakeTextView: {
    flex: 1,
    width: '100%',
    left: 0,
    marginTop: '5%',
    marginLeft: '5%',
  },


  hotTakeTextPhone: {
    fontFamily: 'Sydney',
    fontSize: 25,
    color: Themes.light.text,
  },

  hotTakeTextPad: {
    fontFamily: 'Sydney',
    fontSize: 40,
    color: Themes.light.text,
  },


  hotTakeImagesPhone: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    left: 28,
    marginLeft: '-20%',
    marginBottom: 10,
  },

  hotTakeImagesPad: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    left: 28,
    marginLeft: '-10%',
    marginBottom: 10,
  },


  hotTakeImages: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    left: 28,
    marginLeft: '-20%',
    marginBottom: 10,
  },


  hotTakePlayPhone: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    left: '5%',
    marginRight: 0,
  },

  hotTakePlayPad: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    left: '5%',
    marginRight: 0,
  },


  hotTakeWavePhone: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 5,
  },

  hotTakeWavePad: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 10,
  },

  // Style for iPhone and iPad for Navigation Bar

  navBar: {
    flex: 1/2,
    flexDirection: 'row',
    backgroundColor: Themes.light.navigation,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },

  navComponent: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navPic: {
    height: '40%',
    width: '40%',
    resizeMode: 'contain',
  },


  navFontPhone: {
    fontFamily: 'Sydney',
    fontSize: 20,
    color: Themes.light.textSecondary,
  },

  navFontPad: {
    fontFamily: 'Sydney',
    fontSize: 35,
    color: Themes.light.textSecondary,
  },
});
