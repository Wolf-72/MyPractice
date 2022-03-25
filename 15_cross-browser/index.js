//hero-slider

const slider = document.querySelector('.swiper');

var mySwiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

//tabs

document.addEventListener("DOMContentLoaded", function() { //загружается контент
  document.querySelectorAll('.work-item__link').forEach(function(tabsBtn) { 
    tabsBtn.addEventListener('click', function(event) { //функция срабатывает по клику, происходит связывание атрибута path с атрибутом target с одним значением.
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.work-item__link').forEach(function(btn) {
        btn.classList.remove('work-item__link-active') //по клику удаляет указанный класс
      });
      event.currentTarget.classList.add('work-item__link-active'); //по клику добавляет класс
      document.querySelectorAll('.work-content').forEach(function(tabsBtn){
        tabsBtn.classList.remove('work-content-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('work-content-active');
    });
  });
});

//accordion

$(".accordion").accordion({
  collapsible: true, //делает весь аккордион закрытым
  active: false, //делает весь аккордион закрытым
  heightStyle: "content" //подстраивает ширину открытого окна под контент
});
$(".ui-accordion-header")
.attr("tabindex","0"); //чтобы работал фокус на Tab
  

//burger - длинный путь

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelector("#burger").addEventListener("click", function() {
//     document.querySelector("#menu-burger").classList.toggle("is-active")
//   });    
//   $('.nav__btn_burger').click(function() {
//     $('.nav__btn_burger .burger-line_1').toggleClass('burger-line_1-active');
//     $('.nav__btn_burger .burger-line_2').toggleClass('burger-line_2-active');
//     $('.nav__btn_burger .burger-line_3').toggleClass('burger-line_3-active');
//   });  
// });

//burger - короткий путь

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#burger").addEventListener("click", function() {
    document.querySelector(".header").classList.toggle("is-active")
  }); 
});

//burger-search

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".nav__btn_search").addEventListener("click", function() {
      document.querySelector(".menu-search").classList.add("menu-search-open");
      document.querySelector(".nav__btn_form .svg-form rect").style.fill = "#FF9900";
      document.querySelector(".nav__btn_form .svg-form path").style.stroke = "#FF9900";
  });
    document.querySelector(".menu-search__icon").addEventListener("click", function() {
    document.querySelector(".menu-search").classList.remove("menu-search-open");
    document.querySelector(".nav__btn_form .svg-form rect").style.fill = "#333333";
    document.querySelector(".nav__btn_form .svg-form path").style.stroke = "#333333";
  }); 
});

