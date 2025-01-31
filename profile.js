document.getElementById('profile-photo').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('profile-image').src = e.target.result;
        document.getElementById('profile-image').style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Здесь можно добавить логику для сохранения и отображения статистики из localStorage или другого источника данных.
