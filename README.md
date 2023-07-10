# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
Результат:
https://ibb.co/jbwnvjc
# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
Результат:
https://ibb.co/jhQMdF7
# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
Результат:
https://ibb.co/KxJYN1D
# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
Результат:
https://ibb.co/MfHSgzz