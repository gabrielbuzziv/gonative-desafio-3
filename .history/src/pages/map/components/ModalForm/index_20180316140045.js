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
    coordinates: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }).isRequired,
    toggleModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    userNameInput: '',
  };

  cancel = () => {
    this.props.toggleModal(false);
  };

  save = () => {
    if (!this.state.userNameInput.length) return;

    this.props.addUserRequest(this.state.userNameInput, this.props.coordinates);
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
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Usuário no Github"
              underlineColorAndroid="transparent"
              value={this.state.userNameInput}
              onChangeText={userNameInput => this.setState({ userNameInput })}
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
  coordinates: state.users.coordinates,
  visible: state.users.modalVisible,
});

const mapActions = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapState, mapActions)(ModalForm);
