//select
const element = document.querySelector('.select__content');
const choices = new Choices(element,{
  searchEnabled: false, //удаляет окно поиска
  shouldSort: false, //отключает сортировку по алфавиту
  itemSelectText: '', //удаляет placeholder
});  

//map
// Функция ymaps.ready() будет вызвана, когда загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты. Порядок по умолчанию: «широта, долгота». Чтобы не определять координаты центра карты вручную, воспользуйтесь инструментом Определение координат.
    center: [48.872185073737896,2.354223999999991],
    // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
    zoom: 13,
  });
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [48.872185073737896,2.354223999999991], // координаты точки
    },
  });
   // Вспомогательный класс, который можно использовать вместо GeoObject c типом геометрии «Point» (см. предыдущий пример) - можно добавлять свои метки:
    var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Subtract.svg', // Путь до нашей картинки из index.html
    iconImageSize: [28, 60], // Размер по ширине и высоте
    iconImageOffset: [-42, -42]  // Смещение левого верхнего угла иконки относительно её «ножки» (точки привязки).
  });
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

//tooltip
tippy('[data-tippy-content]');

tippy('.info', {  
  trigger: 'click',
});

// Маска и валидация

//маска
var selector = document.querySelector("input[type='tel']"); //выбираем все инпуты с нужным type
var im = new Inputmask("+7 (999)-999-99-99"); // показываем, как должно выглядеть поле ввода
im.mask(selector); //подключаем селектор, чтобы всё работало.

//валидация
const validation = new JustValidate('.form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    fontSize: '12px',
    color: '#FF5C00',
  },
  focusInvalidField: true,
}); //Меняем стили к сообщению об ошибке

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Как вас зовут?',
    },    
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя не может быть короче 2 знаков',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя не может быть длиннее 30 знаков',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
  ])  
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Email введён в неправильном формате',
    },
  ]) ;

 