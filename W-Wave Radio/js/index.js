//burger //in ether // search
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("is-active");
  });
  document
    .querySelector(".header__ether-link")
    .addEventListener("click", function () {
      document.querySelector(".header").classList.toggle("is-open");
    });
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

let btnClear = document.querySelector(".enter-modal__btn-closed");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

//validation формы для входа

const validation = new JustValidate(".enter-modal__form", {
  errorFieldCssClass: "is-invalid",
  focusInvalidField: true,
}); //Здесь были стили к ошибке, теперь они в CSS

validation
  .addField(".enter-modal__input-login", [
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
  .addField(".enter-modal__input-password", [
    {
      rule: "required",
      errorMessage: "Введите пароль",
    },
    {
      rule: "customRegexp",
      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
      errorMessage: "Пароль введён в неправильном формате",
    }, //Установление обязательных символов
  ])
  .onSuccess((ev) => {
    console.log("form reset", ev);
    let formData = new FormData(ev.target);
    ev.target.reset();
  }); //очищает форму по клику на кнопку Войти - форму не закрывает

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
    $(".podcast__btn-bottom").addClass("podcast__btn-hidden"); //удаляет кнопку после открытия карточек
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

$(".accordion").accordion({
  active: 0, //делает открытым 1-й блок
  heightStyle: "content", //подстраивает ширину открытого окна под контент
});
$(".ui-accordion-header").attr("tabindex", "0"); //чтобы работал фокус на Tab

//tabs in accordion

document.querySelectorAll(".guest__name").forEach(function (tabsBtn) {
  //выбираем все кнопки и для каждой назначаем функцию
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

//Прокрутка до карточки гостя на мобильных устройствах

let guestBtn = document.querySelectorAll(".guest__name-btn");
let el = document.querySelector(".guest__persona");
guestBtn.forEach(function (ev) {
  ev.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 992px)").matches) {
      el.scrollIntoView(true); //условие - скролл работает с 992px и меньше
    } else {
      ev.removeEventListener("click", function () {
        el.scrollIntoView(true); //иначе - скролл не работает, удаляем событие клика
      });
    }
  });
});

//swipper - Product

const slider = document.querySelector(".swiper");

var mySwiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },  
});

//swipper - About - adaptive

var swiper = new Swiper(".mySwiper-2", {
  slidesPerView: 2,
  loop: true, //бесконечная прокрутка
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    451: {
      slidesPerView: 3,
    },
    621: {
      slidesPerView: 4,
    },
    741: {
      slidesPerView: 2,
    },
    1131: {
      slidesPerView: 4,
    },
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
  .addField(".about__checkbox", [
    {
      rule: "required",
      errorMessage: "Поставьте галочку!",
    },
  ])
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          document
            .querySelector(".about__distribution-wrap")
            .classList.add("open-distribution");
        } //именно в этих фигурных скобках вызывается модальное окно или событие отправления
      }
    };

    //открываем соединение и отправяем письмо
    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    //очищаем форму после отправки
    event.target.reset();
  });

//валидация подписки на рассылку
const validation3 = new JustValidate(".about__distribution-form", {
  errorFieldCssClass: "is-invalid",
  focusInvalidField: true,
});
validation3.addField(".about__input-email", [
  {
    rule: "required",
    errorMessage: "E-mail обязателен!",
  },
  {
    rule: "email",
    errorMessage: "Email введён в неправильном формате",
  },
]);
