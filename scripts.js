// Получаем элементы из DOM
const adminCodeInput = document.getElementById('admin-code');
const adminLoginButton = document.getElementById('admin-login');
const editableText = document.getElementById('editable-text');
const saveChangesButton = document.getElementById('save-changes');

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
        adminCodeInput.style.display = 'block';
        adminLoginButton.textContent = 'Submit';
    } else {
        adminCodeInput.style.display = 'none';
        adminLoginButton.textContent = 'Admin Login';
        editableText.contentEditable = false;
        editableText.classList.remove('edit-mode');
        saveChangesButton.style.display = 'none';
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
    alert('Changes saved!');
});
