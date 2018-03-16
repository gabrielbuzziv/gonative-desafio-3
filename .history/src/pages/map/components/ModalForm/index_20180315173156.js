import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Modal, Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/users';

import styles from './styles';

class ModalForm extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
  };

  addUser = () => {
    this.props.toggleModal(false);
    console.tron.log('Add user right now.');
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Adicionar novo local</Text>
          <TextInput style={styles.input} placeholder="Usuário no Github" />

          <View style={styles.footer}>
            <TouchableOpacity style={styles.buttonCancel}>Cancelar</TouchableOpacity>
            <TouchableOpacity style={styles.buttonSave}>Salvar</TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapState = state => ({
  visible: state.users.modalVisible,
});

const mapActions = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapState, mapActions)(ModalForm);
