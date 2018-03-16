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

  cancel = () => {
    this.props.toggleModal(false);
  };

  addUser = () => {
    this.props.visible;
    this.props.toggleModal(false);
  };

  render() {
    return (
      <Modal animationType="slide" transparent visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text>{this.props.visible ? 'Aberto' : 'Fechado'}</Text>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput style={styles.input} placeholder="Usuário no Github" />

            <View style={styles.footer}>
              <TouchableOpacity style={styles.buttonCancel} onPress={this.cancel}>
                <Text>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonSave}>
                <Text>Salvar</Text>
              </TouchableOpacity>
            </View>
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
