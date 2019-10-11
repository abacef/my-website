import React, {Component} from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#171717"
  },
};

// Set app element for screen readers?
Modal.setAppElement(document.getElementById('root'));

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    console.log("modal open")
  }

  render() {
    console.log("rendering top bar");
    return (
        <div>
          <button onClick={this.openModal}>+</button>
          <br/>

          <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              onAfterOpen={this.afterOpenModal}
              style={customStyles}
          >
            <table>
              <tbody>
                <tr>
                  <td>

                    <button onClick={this.closeModal} className="xButton">x</button>

                  </td>
                </tr>
                <tr>
                  <td>

                    <form onSubmit={this.props.addItem}>
                      <label>
                        Name:
                        <input type="text" onChange={this.props.handleChange} />
                      </label>
                      <input type="submit" value="Submit" />
                    </form>

                  </td>
                </tr>
                <tr>
                  <td className="errorMessage">
                    {this.props.message}
                  </td>
                </tr>
              </tbody>
            </table>
          </Modal>

        </div>
    );
  }
}