import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = { tweetsList: [] };
  }
  addTweet(tweetToAdd){
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });

    this.setState({ tweetsList: newTweetsList });
  }
  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(
      <Main />,
      reactNode
    );    
  }

};

$(documentReady);