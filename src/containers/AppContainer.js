import { connect } from 'react-redux';
import App from '../components/App';
import { signIn, signOut } from '../actions/auth';
import { updateTeam } from '../actions/team';


const mapStateToProps = ({ auth, team }) => {
  return { auth, team };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() { dispatch(signIn()); },
    signOut() { dispatch(signOut()); },
    updateTeam(initialTeam, dragSource, dropTarget) { dispatch(updateTeam(initialTeam, dragSource, dropTarget))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
