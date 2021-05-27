# Модуль Node.js для работы с API Sipuni
### Описание
Библиотека для работы с API Sipuni из Функций Sipuni
### Установка
```
npm i @sipuni/sipuni --save
```
### Подключение
#### CommonJS
```
const SipuniApi = require('@sipuni/sipuni');
```
#### ECMAScript
```
import SipuniApi from '@sipuni/sipuni';
```
#### Инициализация
```
const sipuniApi = new SipuniApi({token:'token', host:'https://sipuni.com'})
```
`token`: JWT-токен пользователя Sipuni

`host`: адрес сервера Sipuni Api (опционально, по умолчанию `https://sipuni.com`)

### Реализованные методы

Методы сгруппированы и доступны через соответствующие свойства у объекта класса SipuniApi.

Уведомить по номеру онлайн-телефона:
```
let success = sipuniApi.sendNotifyWebphone(shortNum);
```
`shortNum`: номер онлайн-телефона сотрудника

`success`: `true` если уведомление успешно отправлено, иначе `false`
