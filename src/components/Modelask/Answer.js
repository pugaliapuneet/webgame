import React from "react";
import { Modal, Button, Input } from "antd";
import "./Answer.css";
import { Colors } from "../../Colors";
import popup from '../../assets/popup.mp3'

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { answer: '' };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const modelStyle = {
      buttonStyle: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: Colors.WHITE,
      },
    };

    return (
      <>
      {
        this.showModal && (
          <Modal
            className="Model-Ans"
            title={ `${this.props.from.name} asked you a question` }
            visible={ this.props.show }
            style={{ borderRadius: "10px" }}
            closable={ false }
            footer={ null }
            width={700}
          >
            <audio style={{ display: 'none' }} preload="auto" autoPlay src={ popup }/> 
            <h3 style={{ color: "#000000" }}>
              {
                this.props.from.question
              }
            </h3>
            <h3>How do You Respond?</h3>
            <Input placeholder="Type your answer here..." 
              onChange={ e => this.setState({ ...this.state, answer: e.target.value }) }
            />
            <div style={modelStyle.buttonStyle}>
              <Button
                size="large"
                style={{
                  backgroundColor: Colors.PRIMARY,
                  color: Colors.WHITE,
                  marginTop: "30px",
                  padding: "0 30px",
                }}
                onClick={ () => { 
                  this.props.handleAnswer(this.state)
                  document.body.style.overflow = 'auto'
                }}
              >
                Answer
              </Button>
            </div>
          </Modal>
          )
        }
      </>
    );
  }
}


export default Answer;
