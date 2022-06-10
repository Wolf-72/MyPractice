//burger
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("is-active");
  });
});

//in ether
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".header__ether-link")
    .addEventListener("click", function () {
      document.querySelector(".header").classList.toggle("is-open");
    });
});

// search
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".header__btn-search")
    .addEventListener("click", function () {
      document
        .querySelector(".menu-search__form")
        .classList.toggle("menu-search-open");
    });
});

//Подключение модального окна
const modal = new GraphModal();

//Очистка инпутов формы входа по нажатию кнопки "Закрыть"

let btnClear = document.querySelector(".header__btn-closed");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

//validation формы для входа

const validation = new JustValidate(".header__form-enter", {
  errorFieldCssClass: "is-invalid",
  focusInvalidField: true,
}); //Здесь были стили к ошибке, теперь они в CSS

validation
  .addField(".header__input-login", [
    {
      rule: "required",
      errorMessage: "Введите ваш логин",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Логин не может быть короче 3 знаков",
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

// Кнопка ещё подкасты

$(function () {
  $(".podcast__btn-bottom").on("click", function () {
    $(".podcast__item:hidden").slideDown(1000);
  });
});

//select
const element = document.querySelector(".broadcast__select");
const choices = new Choices(element, {
  searchEnabled: false, //удаляет окно поиска
  shouldSort: false, //отключает сортировку по алфавиту
  itemSelectText: "", //удаляет placeholder
});

//accordion

$(".guest__accordion-list").accordion({
  active: 0, //делает открытым 1-й блок
  heightStyle: "content", //подстраивает ширину открытого окна под контент
});
$(".ui-accordion-header").attr("tabindex", "0"); //чтобы работал фокус на Tab

//tabs in accordion

document.querySelectorAll(".guest__name").forEach(function (tabsBtn) {
  //выбираем все кнопки и для каждой назначаем функуию
  tabsBtn.addEventListener("click", function (event) {
    //функция срабатывает по клику, происходит связывание атрибута path с атрибутом target с одним значением.
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll(".guest__name").forEach(function (btnAct) {
      btnAct.classList.remove("presona-active"); //по клику удаляет указанный класс
    });
    event.currentTarget.classList.add("presona-active"); //по клику добавляет класс
    document
      .querySelectorAll(".guest__persona-item")
      .forEach(function (tabsBtn) {
        tabsBtn.classList.remove("presona-active");
      });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("presona-active");
  });
});

//swipper

const slider = document.querySelector(".swiper");

var mySwiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//validation отправки сообщения

const validation2 = new JustValidate(".about__form", {
  errorFieldCssClass: "is-invalid",
  focusInvalidField: true,
});

validation2
  .addField(".about__textarea", [
    {
      rule: "required",
      errorMessage: "Введите сообщение",
    },
  ])
  .addField(".about__input-name", [
    {
      rule: "required",
      errorMessage: "Введите ваше имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Имя не может быть короче 2 знаков",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Имя не может быть длиннее 30 знаков",
    },
    {
      rule: "customRegexp",
      value: /(?=.*[а-яА-ЯёЁa-zA-Z])/,
      errorMessage: "Ошибка",
    }, // В имени используются латиница, кириллица
  ])
  .addField(".about__input-email", [
    {
      rule: "required",
      errorMessage: "Введите E-mail",
    },
    {
      rule: "email",
      errorMessage: "Email введён в неправильном формате",
    },
  ])

  //Отправка формы на почту
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    event.target.reset();
  });

//Подключение картинки sending.gif
  // document.querySelector(".about__form-btn").addEventListener("click", function () {
  //   document.querySelector(".about__form-wrap").classList.add("sending");    
  // });
  