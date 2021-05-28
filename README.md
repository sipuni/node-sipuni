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
//Со всеми данными для уведомления
let success = sipuniApi.sendNotifyWebphone(shortNum, notifyData);
//Упрощенный вызов
let success = sipuniApi.sendNotifyWebphoneSimple(shortNum, cardTitle, urlTitle, url); 
```
`shortNum`: номер онлайн-телефона сотрудника<br>
`notifyData`: полные данные для уведомления<br>
`cardTitle`: заголовок уведомления<br>
`urlTitle`: заголовок ссылки в уведомлении<br>
`url`: ссылка в уведомлении<br>
`success`: `true` если уведомление успешно отправлено, иначе `false`<br>

Формат `notifyData`:
```
{
    "crm": "bitrix24",
    "title": "Битрикс 24",
    "call_id": "1245654654.42525",
    "fields": [
      {
        "title": "Имя",
        "value": "Николай Семенов 12121"
      },
      {
        "title": "Компания",
        "value": "ООО ТрансАэро"
      },
      ...
    ],
    "links": [
      {
        "title": "Карточка клиента",
        "url": "https://amocrm.ru/contact/11441"
      },
      {
        "title": "Сделка",
        "url": "https://amocrm.ru/deals/11441"
      }
      ...
    ]
  }
```

