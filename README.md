# Бэкенд final-task in RS School

## Используемые технологии и решения
- Typescript в качестве основного языка проекта
- Mongodb и ODM Mongoose для хранения данных пользователей
- Node.js в качестве среды выполнения

Регистрация: http://127.0.0.1:3001/signup
POST, {
  email: string,
  password: string
}

Responce : {
  password: string
  _id: string
  email: string
}
#######################################################

Вход:http://127.0.0.1:3001/signin
POST, {
  email: string,
  password: string
}

Responce : {
  token: string
}
#######################################################

Все пользователи: http://127.0.0.1:3001/users
GET
Headers {
  Authorization : `Bearer ${token}`
}

Responce: UserObj[]
#######################################################

Отдельный пользователь: http://127.0.0.1:3001/users/:id
GET
Headers {
  Authorization : `Bearer ${token}`
}

Responce : {
  password: string
  _id: string
  email: string
}
#######################################################
