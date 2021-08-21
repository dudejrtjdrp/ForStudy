import React from "react";


export default class Eaxmple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: "변경 전이요",
          cnt: 0,
        };
      }
      changeText = () => {
        this.setState({
          text: "변경 성공!",
        });
        console.log(this.state.cnt + "번째 로그 남기기");
        this.state.cnt = this.state.cnt + 1;
      };
      render() {
        return (
          <div>
            <h1>{this.state.text}</h1>
            <button onClick={this.changeText}>버튼</button>
          </div>
        );
      }
}