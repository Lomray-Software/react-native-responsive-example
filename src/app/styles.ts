import { createStyles } from '@lomray/react-native-responsive';

const styles = createStyles({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  sections: {
    flex: 1,
    _landscape: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
});

export default styles;
