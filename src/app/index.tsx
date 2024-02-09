import {useStyles} from '@lomray/react-native-responsive';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Section from '../section';
import stylesheet from './styles';

/**
 * App
 * @constructor
 */
const App = () => {
  const styles = useStyles(stylesheet, {isWhite: true});

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.sections}>
        <Section title="Section 1" />
        <Section title="Section 2" />
        <Section title="Section 3" />
      </View>
    </SafeAreaView>
  );
};

export default App;
