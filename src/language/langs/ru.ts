import { ILanguage } from "../interface";
const icon: string = require("assets/langs/ru.svg");
const ru: ILanguage = {
  name: "Русский",
  id: "ru",
  icon,
  sign: {
    anon: "Войти анонимно",
    enter: "Войти",
    in: "Вход",
    start: "Вперед!",
    up: "Регистрация",
    input: {
      login: "Логин",
      pass: "Пароль",
    },
    error: "Ошибка: ",
    signInErrors: {
      0: "Не удалось деrодировать данные, обратитесь к администратору.",
      1: "Пользователя с такими логином и паролем не существует.",
      2: "Не удалось создать токен, обратитесь к администратору.",
    },
    signUpErrors: {
      0: "Не удалось деrодировать данные, обратитесь к администратору.",
      1: "Логин или пароль некоректны, проверьте их ещё раз.",
      2: "Не удалось создать нового пользователя, возможно он уже существует.",
      3: "Не удалось сгенерировать токен, обратитесь к администратору.",
    },
    undefinedError: "Неизвестная ошибка, код ошибки - ",
  },
  chats: {
    search: "Поиск...",
    notFound: "Не найдено",
    usersHeader: "Создать диалог",
  },
  menu: {
    back: "Вернуться в Swap",
    cache: "Кэш",
    logout: "Выйти",
    newChat: "Новый чат",
    newChannel: "Новый канал",
    profile: "Профиль",
    settings: "Настройки",
    signed: "В СЕТИ КАК",
  },
  messages: {
    choose: "Выберите чат слева или создайте новый в меню",
    banned: "Вы были забанены в этом чате",
    input: {
      placeholder: "Сообщение...",
    },
    months: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    header: {
      online: "Онлайн",
    },
    messageCommands: {
      null: "что-то сделал ...",
      userCreatedChat: "создал чат",
      userCreatedChannel: "создал канал",
      userInvitedChat: "был приглашен в чат",
      userInvitedChannel: "был приглашен в канал",
      userInsertedToDialog: "был приглашен в диалог",
      userCreatedDialog: "создал диалог",
      userLeaveChat: "покинул чат",
      userReturnsToChat: "вернулся в чат",
      userWasBanned: "был забанен",
      userWasUnbanned: "был разбанен",
    },
  },
  chatPreferences: {
    up: {
      header: "Настройки",
      placeholder: "Имя",
    },
    people: {
      header: "Участники",
      add: "Пригласить",
      ban: "Заблокировать",
      unban: "Разблокировать",
    },
    deleteFromChat: "Выйти из беседы",
    deleteFromList: "Удалить чат из меню",
    turnBackToChat: "Вернуться в чат",
  },
  popups: {
    createChat: {
      header: "Создать новый чат",
      paragraph: "Введите имя нового чата",
      placeholder: "Имя",
      button: "Создать",
    },
    createChannel: {
      header: "Создать новый канал",
      paragraph: "Введите имя канала",
      placeholder: "Имя",
      button: "Создать",
    },
    addUsers: {
      header: "Пригласить участника",
      placeholder: "Имя",
      notfound: "Не найдено",
    },
    cache: {
      header: "Кэш",
      clearButton: "Очистить",
      size: "Занято",
    },
    lang: {
      header: "Язык",
    },
    userSettings: {
      header: "Настройки профиля",
      name: "Имя",
      saveButton: "Сохранить",
    },
  },
};

export default ru;
