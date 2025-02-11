import { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { createAndJoin } from "../Header/UserBar/CreateAndJoin";

class NicknameModalJoinGame extends Component {
  state = {
    gameCode: "",
  };
  setGameCode = (e) => {
    this.setState({ gameCode: e.target.value });
  };

  handleJoiningGame = () => {
    this.props.setIsNickNameSet(() => {
      if (this.props.nickName !== "" && this.props.isNickNameSet === true) {
        createAndJoin(this.props.nickName, "join", this.state.gameCode)
          .then((x) => {
            console.log(x.data);
            this.props.showModal();
          })
          .catch((x) => {
            console.log(x.message);
          });
      } else {
        alert("Nickname is not set");
      }
    });
  };
  render() {
    return (
      <div
        className={`${
          this.props.modal ? "block" : "hidden"
        } fixed top-0 left-0 bg-black/50 w-full h-full flex justify-center items-center`}
      >
        <div className="rounded-2xl p-10 bg-slate-900 relative">
          <div
            onClick={this.props.showModal}
            className="absolute top-1 right-1 buttonSchema buttonHover"
          >
            <CloseIcon />
          </div>
          <div>
            {this.props.isNickNameSet === false ? (
              <div>What is your nickname?</div>
            ) : null}
            {this.props.isNickNameSet === false ? (
              <input
                className="mt-2 bg-slate-800 block"
                onChange={this.props.setNickName}
                value={this.props.nickName}
              />
            ) : null}
            <div>What is game code?</div>
            <input
              className="mt-2 bg-slate-800 block"
              onChange={this.setGameCode}
              value={this.state.gameCode}
            />
            <div
              className="flex justify-end mt-2 buttonHover buttonSchema"
              onClick={this.handleJoiningGame}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NicknameModalJoinGame;
