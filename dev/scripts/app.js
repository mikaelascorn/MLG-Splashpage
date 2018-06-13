import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <LandingPage userinputs={this.enterSite} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
