import {TParams} from '@lomray/react-native-responsive';
import {StyleSheet} from 'react-native';

interface ICustomParams {
  isWhite: boolean;
}

const styles = ({orientation, isWhite}: TParams<ICustomParams>) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: isWhite ? 'white' : 'red',
      flex: 1,
    },
    sections: {
      flex: 1,
      ...(orientation === 'landscape'
        ? {
            justifyContent: 'space-between',
            flexDirection: 'row',
          }
        : {}),
    },
  });

export default styles;
