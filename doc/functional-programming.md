# Функциональное программирование на JavaScript

## Основы функционального программирование

### Сущность функционального программирования

Цель состоит в том, чтобы _абстрагировать_ потоки управления и операции над данными с помощью функций и тем самым _исключить_ побочные эффекты и _сократить_ изменение состояний в приложении.

Принципы функционального программирования:

- декларативное программирование
- чистые функции
- ссылочная прозрачность
- неизменяемость

В функциональных программах нужно стремиться к _отсутствию сохранения состояния_ и _неизменяемости_ в как можно большей степени.

Если код не зависит от состояния программы, то ничто не может нарушить его работу.

#### Чистые функции

Свойства:

- Зависит только от предоставляемых входных данных, а не от любого скрытого или внешнего состояния, которое может измениться во время ее вычисления или в промежутках между ее вызовами
- Не вносит изменения за пределами области своей видимости, например, не изменяет глобальный объект или параметр, передаваемый по ссылке

Побочные эффекты:

- Глобальное изменение переменной, свойства или структуры данных
- Изменение первоначального значения аргумента функции
- Обработка вводимых пользователем данных
- Генерирование исключения, если только оно не перхватывается в той же самой функции
- Вывод сообщения на экран или в журнал регистрации
- Запрос HTML-документов, браузерных cookie-файлов или баз данных

На практике функциональное программирование накладывает ограничение не на _все_ изменения состояния.

Оно лищь предоставляет каркас, помогающий управлять или и сокращать их, позволяя в то же время отделять "чистое" от "нечистого". "Нечистый" код производит _внешне видимые_ побочные эффекты.