# Бэкенд final-task in RS School

## Используемые технологии и решения
- Typescript в качестве основного языка проекта
- Mongodb и ODM Mongoose для хранения данных пользователей
- Node.js в качестве среды выполнения

Регистрация: https://final-task.ru/signup

POST, {
  name: string,
  image?: string
  email: string,
  password: string
}

Responce : {
  name: string
  _id: string
  email: string
  avatar: string
  token: string
}

#######################################################

Вход: https://final-task.ru/signin

POST, {
  email: string,
  password: string
}

Responce : {
  token: string
  user: {
    name: string
    image: string
    email: string
    _id: string
  }
}

#######################################################

Все пользователи: https://final-task.ru/users

GET

Responce: UserObj[]

#######################################################

Отдельный пользователь: https://final-task.ru/users/:id

GET

Responce : {
  password: string
  _id: string
  email: string
}

#######################################################
Отзывы: https://final-task.ru/feedbacks

GET

Responce : Feedacks[]
########################################################

Создать отзыв: https://final-task.ru/feedbacks

POST, {
  avatar?: string,
  content: string,
  owner: string
}

##########################################################
ОТправить email: https://final-task.ru/sendmail
POST, {
  to: string, email
}

##########################################################
