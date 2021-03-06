import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

console.tron.log(general);

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
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonCancel: {
    ...general.buttons,
    flex: 1,
    backgroundColor: colors.regular,
    marginRight: 7.5,
  },

  buttonSave: {
    ...general.buttons,
    flex: 1,
    backgroundColor: colors.success,
    marginLeft: 7.5,
  },
});
