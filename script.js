document.addEventListener('DOMContentLoaded', () => {
    const emojis = document.querySelectorAll('.emoji');
    const counts = {
        emoji1: 0,
        emoji2: 0,
        emoji3: 0,
        emoji4: 0,
        emoji5: 0
    };

    Object.keys(counts).forEach(emoji => {
        if (localStorage.getItem(emoji)) {
            counts[emoji] = parseInt(localStorage.getItem(emoji));
            document.getElementById(`count${emoji.charAt(emoji.length - 1)}`).innerText = counts[emoji];
        }
    });

    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            const emojiId = emoji.getAttribute('data-id');
            counts[emojiId]++;
            localStorage.setItem(emojiId, counts[emojiId]);
            document.getElementById(`count${emojiId.charAt(emojiId.length - 1)}`).innerText = counts[emojiId];
        });
    });

    document.getElementById('showResults').addEventListener('click', () => {
        let maxVotes = 0;
        let winner = '';
        Object.keys(counts).forEach(emoji => {
            if (counts[emoji] > maxVotes) {
                maxVotes = counts[emoji];
                winner = emoji;
            }
        });
        document.getElementById('winner').innerText = document.querySelector(`[data-id="${winner}"]`).innerHTML;
        document.getElementById('winnerVotes').innerText = maxVotes;
        document.querySelector('.results').style.display = 'block';
    });

    document.getElementById('clearResults').addEventListener('click', () => {
        Object.keys(counts).forEach(emoji => {
            counts[emoji] = 0;
            localStorage.removeItem(emoji);
            document.getElementById(`count${emoji.charAt(emoji.length - 1)}`).innerText = 0;
        });
        document.querySelector('.results').style.display = 'none';
    });
});