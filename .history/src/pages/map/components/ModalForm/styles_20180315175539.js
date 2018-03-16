import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
  },

  box: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flex: 0,
  },

  title: {
    fontSize: 18,
    color: colors.darker,
  },

  input: {
    marginTop: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },

  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
