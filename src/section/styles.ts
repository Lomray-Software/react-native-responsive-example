import {createStyles} from '@lomray/react-native-responsive';
import {wp, hp, fs} from '../services/responsive-manager';

const styles = createStyles({
  section: {
    paddingHorizontal: wp(24),
    height: hp(200),
    margin: hp(5),
    justifyContent: 'center',
    borderWidth: 1,
    _landscape: {
      backgroundColor: 'black',
      borderColor: 'white',
      width: wp(220),
    },
    _portrait: {
      backgroundColor: 'white',
      borderColor: 'black',
    },
  },
  title: {
    fontSize: fs(24),
    fontWeight: '600',
    _landscape: {
      color: 'white',
    },
    _portrait: {
      color: 'black',
    },
  },
  description: {
    marginTop: hp(8),
    fontSize: fs(18),
    fontWeight: '400',
    _landscape: {
      color: 'white',
    },
    _portrait: {
      color: 'black',
    },
  },
});

export default styles;
