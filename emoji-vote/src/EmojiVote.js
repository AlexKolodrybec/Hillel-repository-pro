import React, { useState } from 'react';

const EmojiVote = () => {
  const emojis = [
    { id: 1, emoji: '😃', votes: 0 },
    { id: 2, emoji: '😊', votes: 0 },
    { id: 3, emoji: '😎', votes: 0 },
    { id: 4, emoji: '🤩', votes: 0 },
    { id: 5, emoji: '😍', votes: 0 },
  ];

  const [emojiList, setEmojiList] = useState(emojis);

  const handleVote = (id) => {
    const newEmojiList = emojiList.map((item) => {
      if (item.id === id) {
        return { ...item, votes: item.votes + 1 };
      }
      return item;
    });
    setEmojiList(newEmojiList);
  };

  const getWinner = () => {
    const maxVotes = Math.max(...emojiList.map((item) => item.votes));
    const winners = emojiList.filter((item) => item.votes === maxVotes);
    return winners.length === 1 ? winners[0] : null;
  };

  const winner = getWinner();

  return (
    <div>
      <h1>Голосування за найкращий смайлик</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {emojiList.map((item) => (
          <div key={item.id} onClick={() => handleVote(item.id)} style={{ cursor: 'pointer' }}>
            <span role="img" aria-label="emoji">{item.emoji}</span>
            <div>{item.votes}</div>
          </div>
        ))}
      </div>
      <button onClick={() => alert(`Winner: ${winner ? winner.emoji : 'No winner yet'}`)}>Show Results</button>
      {winner && (
        <div>
          <h2>Результати голосування:</h2>
          <p>Переможець: {winner.emoji}</p>
          <p>Кількість голосів: {winner.votes}</p>
        </div>
      )}
    </div>
  );
};

export default EmojiVote;