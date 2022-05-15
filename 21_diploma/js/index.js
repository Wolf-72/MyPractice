//burger
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("is-active");
  });
});

//in ether
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header__ether-link").addEventListener("click", function () {
      document.querySelector(".header").classList.toggle("is-open");
    });
});

// search
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header__btn-search").addEventListener("click", function () {
      document.querySelector(".menu-search__form").classList.toggle("menu-search-open");
    });
});

//validation формы для входа

const validation = new JustValidate(".header__form-enter", {
  errorFieldCssClass: "is-invalid",
  errorLabelStyle: {
    fontSize: "12px",
    color: "#ff6f6f",
  },
  focusInvalidField: true,
}); //Меняем стили к сообщению об ошибке

validation
  .addField(".header__input-login", [
    {
      rule: "required",
      errorMessage: "Введите ваш логин",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Логин не может быть короче 2 знаков",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Логин не может быть длиннее 30 знаков",
    },
    {
      rule: "customRegexp",
      value: /(?=.*[а-яА-ЯёЁa-zA-Z0-9])/,
      errorMessage: "Ошибка",
    }, // В логине используются латиница, кириллица и цифры
  ])
  .addField(".header__input-password", [
    {
      rule: "required",
      errorMessage: "Введите пароль",
    },
    {
      rule: "customRegexp",
      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
      errorMessage: "Пароль введён в неправильном формате",
    }, //Установление обязательных символов
  ]);

//Кнопки play-pause в навигации

let btns = document.querySelectorAll(".header__play-btn");
btns.forEach(function (i) {
  i.addEventListener("click", function () {
    this.classList.toggle("header__btn_pause");
  });
});

// Кнопки play-pause в подкастах

let btn = document.querySelectorAll(".podcast__btn-play");
btn.forEach(function (i) {
  i.addEventListener("click", function () {
    this.classList.toggle("podcast__btn-pause");
  });
});









//код от куратора чата на кнопки play
// const button = document.querySelectorAll('.btn'); // здесь класс всех кнопок

// button.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     button.forEach((item) => {
//       item.classList.remove('класс');
//     });
//     e.currentTarget.classList.add('класс');
//   });
// });
