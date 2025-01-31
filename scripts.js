// Получаем элементы из DOM
const adminCodeInput = document.getElementById('admin-code');
const adminLoginButton = document.getElementById('admin-login');
const editableText = document.getElementById('editable-text');
const saveChangesButton = document.getElementById('save-changes');
const newArticleButton = document.getElementById('new-article');

let isAdminLoggedIn = false;

// Загрузка сохраненного текста при загрузке страницы
window.onload = function() {
    const savedText = localStorage.getItem('editableText');
    if (savedText) {
        editableText.innerHTML = savedText;
    }
};

// Обработчик клика на кнопку "Admin Login"
adminLoginButton.addEventListener('click', () => {
    if (!isAdminLoggedIn) {
        adminCodeInput.style.display = 'inline-block';
        adminLoginButton.textContent = 'Submit';
    } else {
        adminCodeInput.style.display = 'none';
        adminLoginButton.textContent = 'Admin Login';
        editableText.contentEditable = false;
        editableText.classList.remove('edit-mode');
        saveChangesButton.style.display = 'none';
        newArticleButton.style.display = 'none';
    }
});

// Обработчик изменения значения в поле ввода для проверки кода админа
adminCodeInput.addEventListener('change', (event) => {
    if (event.target.value === '3322') {
        isAdminLoggedIn = true;
        adminLoginButton.click(); // Переключаем состояние кнопки
        editableText.contentEditable = true;
        editableText.classList.add('edit-mode');
        saveChangesButton.style.display = 'inline-block';
        newArticleButton.style.display = 'inline-block';
    } else {
        alert('Incorrect admin code');
    }
    event.target.value = ''; // Очищаем поле ввода
});

// Обработчик клика на текст для редактирования
editableText.addEventListener('click', () => {
    if (isAdminLoggedIn) {
        editableText.focus();
    }
});

// Обработчик клика на кнопку "Save Changes"
saveChangesButton.addEventListener('click', () => {
    localStorage.setItem('editableText', editableText.innerHTML);
    axios.post('https://api.github.com/repos/your-username/your-repo/contents/index.html', {
        message: 'Update index.html',
        content: btoa(unescape(encodeURIComponent(document.documentElement.outerHTML))),
        sha: '' // Здесь нужно указать SHA последней версии файла
    }, {
        headers: {
            Authorization: 'token YOUR_GITHUB_TOKEN'
        }
    })
    .then(response => {
        alert('Changes saved!');
    })
    .catch(error => {
        console.error('Error saving changes:', error);
        alert('Failed to save changes.');
    });
});

// Обработчик клика на кнопку "New Article"
newArticleButton.addEventListener('click', () => {
    const articleTitle = prompt('Enter the title of the new article:');
    if (articleTitle) {
        const articleContent = prompt('Enter the content of the new article:');
        if (articleContent) {
            const newArticle = `<h2>${articleTitle}</h2><p>${articleContent}</p>`;
            editableText.insertAdjacentHTML('beforeend', newArticle);
        }
    }
});

// Темная тема
document.querySelector('.navbar').addEventListener('dblclick', () => {
    document.body.classList.toggle('dark-theme');
});
