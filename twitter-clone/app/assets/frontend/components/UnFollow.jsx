import React from 'react';
import { Link } from 'react-router';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

let getAppState = () => {
  return { users: UserStore.getAll() };
}

export default class Follow extends React.Component {
  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    UserActions.getAllUsers();
    UserStore.addChangeListener(this._onChange)
  }
  componentWillUnmount(){
    UserStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    this.setState(getAppState());
  }
  UnFollowUser(userId) {
    UserActions.UnFollowUser(userId)
  }
  followClasses(following) {
    return "secondary-content btn-floating " + (following ? "green" : "grey")
  }
  render () {

}