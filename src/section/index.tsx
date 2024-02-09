import {useStyles} from '@lomray/react-native-responsive';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import stylesheet from './styles';

interface ISection {
  title: string;
}

/**
 * Section
 * @constructor
 */
const Section: FC<ISection> = ({title}) => {
  const styles = useStyles(stylesheet);

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Section;
