import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: {
        emoji1: 0,
        emoji2: 0,
        emoji3: 0,
        emoji4: 0,
        emoji5: 0,
      },
      winner: '',
      winnerVotes: 0,
    };
  }

  componentDidMount() {
    const counts = {
      emoji1: localStorage.getItem('emoji1') ? parseInt(localStorage.getItem('emoji1')) : 0,
      emoji2: localStorage.getItem('emoji2') ? parseInt(localStorage.getItem('emoji2')) : 0,
      emoji3: localStorage.getItem('emoji3') ? parseInt(localStorage.getItem('emoji3')) : 0,
      emoji4: localStorage.getItem('emoji4') ? parseInt(localStorage.getItem('emoji4')) : 0,
      emoji5: localStorage.getItem('emoji5') ? parseInt(localStorage.getItem('emoji5')) : 0,
    };
    this.setState({ counts });
  }

  handleVote = (emoji) => {
    const newCounts = { ...this.state.counts };
    newCounts[emoji]++;
    this.setState({ counts: newCounts });
    localStorage.setItem(emoji, newCounts[emoji]);
  }

  showResults = () => {
    const { counts } = this.state;
    let maxVotes = 0;
    let winner = '';
    Object.keys(counts).forEach(emoji => {
      if (counts[emoji] > maxVotes) {
        maxVotes = counts[emoji];
        winner = emoji;
      }
    });
    this.setState({ winner, winnerVotes: maxVotes });
  }

  clearResults = () => {
    const newCounts = {
      emoji1: 0,
      emoji2: 0,
      emoji3: 0,
      emoji4: 0,
      emoji5: 0,
    };
    this.setState({ counts: newCounts, winner: '', winnerVotes: 0 });
    Object.keys(newCounts).forEach(emoji => {
      localStorage.removeItem(emoji);
    });
  }

  render() {
    const { counts, winner, winnerVotes } = this.state;
    return (
      <div className="App">
        <h1>Голосування за найкращий смайлик</h1>
        <div id="emojis">
          {Object.keys(counts).map((emoji, index) => (
            <div key={index}>
              <span className="emoji" onClick={() => this.handleVote(emoji)}>
                {emoji === 'emoji1' ? '😀' :
                 emoji === 'emoji2' ? '😊' :
                 emoji === 'emoji3' ? '😎' :
                 emoji === 'emoji4' ? '😍' :
                 emoji === 'emoji5' ? '😘' : ''}
              </span>
              <span>{counts[emoji]}</span>
            </div>
          ))}
        </div>
        <button onClick={this.showResults}>Show Results</button>
        <button onClick={this.clearResults}>Очистити результати</button>
        {winner && (
          <div className="results">
            <h2>Результати голосування:</h2>
            <p>Переможець: <span>{winner === 'emoji1' ? '😀' :
                                        winner === 'emoji2' ? '😊' :
                                        winner === 'emoji3' ? '😎' :
                                        winner === 'emoji4' ? '😍' :
                                        winner === 'emoji5' ? '😘' : ''}</span></p>
            <p>Кількість голосів: <span>{winnerVotes}</span></p>
          </div>
        )}
      </div>
    );
  }
}

export default App;