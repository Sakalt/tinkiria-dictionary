let currentPage = 0;

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        fetchWords();
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    currentPage++;
    fetchWords();
});

function fetchWords() {
    fetch(`http://localhost:8000/words?skip=${currentPage * 10}&limit=10`)
        .then(response => response.json())
        .then(data => {
            const wordList = document.getElementById('word-list');
            wordList.innerHTML = '';
            data.forEach(word => {
                const li = document.createElement('li');
                li.textContent = `${word.word} - ${word.english_translation} - ${word.japanese_translation} - ${word.description} - ${word.pronunciation}`;
                wordList.appendChild(li);
            });
        });
}

fetchWords();
