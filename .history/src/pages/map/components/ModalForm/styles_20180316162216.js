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

  error: {
    fontWeight: 'bold',
    color: colors.danger,
    alignSelf: 'center',
    marginTop: metrics.basePadding,
  },

  input: {
    marginTop: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.light,
    paddingHorizontal: metrics.baseMargin,
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
