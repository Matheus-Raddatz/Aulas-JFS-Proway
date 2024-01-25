import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
 
function App( props ) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}
        className={"App-logo" + (props.rotating ? "" : " App-logo-paused")}
        onClick ={
          props.rotating ? props.stopAction : props.startAction
        }
        alt="logo" />
      </header>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
