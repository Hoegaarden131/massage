// Глобальная переменная для хранения ID пользователя
let userId = null;

// Функция для обработки покупок
function buy(item) {
    if (!userId) {
        alert('Пожалуйста, введите ваш игровой ID перед покупкой.');
        return;
    }

    // Отправляем данные на сервер
    fetch('/process-payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            item: item,
            userId: userId
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Покупка успешно оформлена!');
        } else {
            alert('Произошла ошибка при оформлении покупки.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при связи с сервером.');
    });
}

// Обработчик формы для ввода ID
document.getElementById('userIdForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    userId = document.getElementById('userId').value.trim();
    if (userId) {
        document.getElementById('userIdMessage').textContent = `Ваш игровой ID: ${userId}`;
    } else {
        alert('Пожалуйста, введите ваш игровой ID.');
    }
});
