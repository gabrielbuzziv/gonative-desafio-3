import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flex: 0,
    alignSelf: 'center',
  },

  title: {
    fontSize: 18,
    color: colors.darker,
  },

  input: {
    marginTop: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },

  footer {
    flexDireation: 'row',
    justifyContent: 'space-between'
  },

  buttonCancel: {
    ...general.button,
    backgroundColor: colors.regular,
  },

  buttonSave: {
    ...general.button,
    backgroundColor: colors.success,
  },
});
