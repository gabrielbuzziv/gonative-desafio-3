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
    addUserRequest: PropTypes.func.isRequire,
  };

  state = {
    userNameInput: '',
  };

  cancel = () => {
    this.props.toggleModal(false);
  };

  save = () => {
    if (!this.state.userNameInput.length) return;

    this.props.addUserRequest(this.state.userNameInput);
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.props.visible}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <Text>{this.props.visible ? 'Aberto' : 'Fechado'}</Text>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Usuário no Github"
              underlineColorAndroid="transparent"
              value={this.state.userNameInput}
              onChangeText={userName => this.setState({ userNameInput })}
            />

            <View style={styles.footer}>
              <TouchableOpacity style={styles.buttonCancel} onPress={this.cancel}>
                <Text>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonSave} onPress={this.save}>
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
