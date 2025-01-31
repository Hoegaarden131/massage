
/* Общие стили */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Верхняя навигационная панель */
.top-navigation {
    background-color: #f6f6f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.logo-container img {
    height: 40px;
}

.admin-panel {
    display: flex;
    gap: 10px;
}

.admin-panel input {
    padding: 5px;
}

.admin-panel button {
    padding: 5px 10px;
}

/* Левая боковая панель */
.side-navigation {
    position: fixed;
    top: 60px;
    left: 0;
    width: 200px;
    background-color: #f6f6f6;
    padding: 20px;
    height: calc(100% - 60px);
    box-sizing: border-box;
}

.side-navigation ul {
    list-style-type: none;
    padding: 0;
}

.side-navigation li {
    margin-bottom: 10px;
}

.side-navigation a {
    text-decoration: none;
    color: black;
}

/* Основное содержимое */
.main-content {
    margin-left: 220px;
    padding: 20px;
}

.main-content h1 {
    font-size: 2em;
    margin-bottom: 10px;
}

.main-content p {
    line-height: 1.6;
    margin-bottom: 10px;
}

.main-content ul {
    list-style-type: disc;
    margin-left: 20px;
}

/* Нижняя панель навигации */
.bottom-navigation {
    background-color: #f6f6f6;
    text-align: center;
    padding: 10px 0;
}

.bottom-navigation ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.bottom-navigation a {
    text-decoration: none;
    color: black;
}

#editable-text {
    cursor: pointer;
}

.edit-mode {
    border: 1px solid #ccc;
    padding: 10px;
}
