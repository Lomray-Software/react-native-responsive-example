import {TParams} from '@lomray/react-native-responsive';
import {StyleSheet} from 'react-native';
import {wp, hp, fs} from '../services/responsive-manager';

const styles = ({orientation}: TParams) =>
  StyleSheet.create({
    section: {
      paddingHorizontal: wp(24),
      height: hp(200),
      margin: hp(5),
      justifyContent: 'center',
      borderWidth: 1,
      ...(orientation === 'portrait'
        ? {
            backgroundColor: 'white',
            borderColor: 'black',
          }
        : {
            backgroundColor: 'black',
            borderColor: 'white',
            width: wp(220),
          }),
    },
    title: {
      fontSize: fs(24),
      fontWeight: '600',
      color: orientation === 'portrait' ? 'black' : 'white',
    },
    description: {
      marginTop: hp(8),
      fontSize: fs(18),
      fontWeight: '400',
      color: orientation === 'portrait' ? 'black' : 'white',
    },
  });

export default styles;
