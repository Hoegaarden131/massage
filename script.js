document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    if (!query) return;

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    // Пример данных для демонстрации результатов
    const sampleResults = [
        { title: 'Статья 1', url: '#', description: 'Описание статьи 1' },
        { title: 'Статья 2', url: '#', description: 'Описание статьи 2' },
        { title: 'Статья 3', url: '#', description: 'Описание статьи 3' }
    ];

    const filteredResults = sampleResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredResults.length === 0) {
        resultsContainer.innerHTML = '<p>Ничего не найдено.</p>';
    } else {
        filteredResults.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <h3><a href="${result.url}">${result.title}</a></h3>
                <p>${result.description}</p>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }
});
