'use strict';

	var footerLabel = window.getComputedStyle(document.querySelector("footer .footer__label"));

new Vue({
	el: '#main',
	data: {
		logotip: "Test`s",

		arrow: ["&uArr;", "&dArr;"],

		showFooter: 0,
		showBurgermenu: 1,
		labelShow: 0,


		htmlWithoutStyles: [
			{
				id: 1,
				name: "Только день не повторится...",
				link: "/html/without_css/test-1.html",
				dificult: "green",
				task: "/html/without_css/task-1.html",
				decision: "/html/without_css/decision-1.html",
				isShow: false,
			},
			{
				id: 2,
				name: "Заповедь",
				link: "/html/without_css/test-2.html",
				dificult: "green",
				task: "/html/without_css/task-2.html",
				decision: "/html/without_css/decision-2.html",
				isShow: false,
			},
			{
				id: 3,
				name: "Silence is golden",
				link: "/html/without_css/test-3.html",
				dificult: "green",
				task: "/html/without_css/task-3.html",
				decision: "/html/without_css/decision-3.html",
				isShow: false,
			},
			{
				id: 4,
				name: "Проект",
				link: "/html/without_css/test-4.html",
				dificult: "green",
				task: "/html/without_css/task-4.html",
				decision: "/html/without_css/decision-4.html",
				isShow: false,
			},
			{
				id: 5,
				name: "Статьи",
				link: "/html/without_css/test-5.html",
				dificult: "green",
				task: "/html/without_css/task-5.html",
				decision: "/html/without_css/decision-5.html",
				isShow: false,
			},
			{
				id: 6,
				name: "Генераторы",
				link: "/html/without_css/test-6.html",
				dificult: "green",
				task: "/html/without_css/task-6.html",
				decision: "/html/without_css/decision-6.html",
				isShow: false,
			},
			{
				id: 7,
				name: "Время",
				link: "/html/without_css/test-7.html",
				dificult: "green",
				task: "/html/without_css/task-7.html",
				decision: "/html/without_css/decision-7.html",
				isShow: false,
			},
			{
				id: 8,
				name: "Код",
				link: "/html/without_css/test-8.html",
				dificult: "green",
				task: "/html/without_css/task-8.html",
				decision: "/html/without_css/decision-8.html",
				isShow: false,
			},
			{
				id: 9,
				name: "Волшебные формулы",
				link: "/html/without_css/test-9.html",
				dificult: "green",
				task: "/html/without_css/task-9.html",
				decision: "/html/without_css/decision-9.html",
				isShow: false,
			},
			{
				id: 10,
				name: "Странные буквы",
				link: "/html/without_css/test-10.html",
				dificult: "green",
				task: "/html/without_css/task-10.html",
				decision: "/html/without_css/decision-10.html",
				isShow: false,
			},
			{
				id: 11,
				name: "Химические элементы",
				link: "/html/without_css/test-11.html",
				dificult: "yellow",
				task: "/html/without_css/task-11.html",
				decision: "/html/without_css/decision-11.html",
				isShow: false,
			},
			{
				id: 12,
				name: "Карта сокровищ",
				link: "/html/without_css/test-12.html",
				dificult: "yellow",
				task: "/html/without_css/task-12.html",
				decision: "/html/without_css/decision-12.html",
				isShow: false,
			},
			{
				id: 13,
				name: "Запись на курсы",
				link: "/html/without_css/test-13.html",
				dificult: "yellow",
				task: "/html/without_css/task-13.html",
				decision: "/html/without_css/decision-13.html",
				isShow: false,
			},
			{
				id: 14,
				name: "Простое тестовое",
				link: "/html/without_css/test-14.html",
				dificult: "red",
				task: "/html/without_css/task-14html",
				decision: "/html/without_css/decision-14.html",
			},

		],



		htmlWithStyles: [
			{
				id: 1,
				name: "Центрированный блок",
				link: "/html/with_css/test-1.html",
				dificult: "green",
			},
			{
				id: 2,
				name: "Центрированный блок 2",
				link: "/html/with_css/test-2.html",
				dificult: "green",
			},
			{
				id: 3,
				name: "Буква и строка",
				link: "/html/with_css/test-3.html",
				dificult: "green",
			},
			{
				id: 4,
				name: "Всему свой резон",
				link: "/html/with_css/test-4.html",
				dificult: "green",
			},
			{
				id: 5,
				name: "Полезные ссылки",
				link: "/html/with_css/test-5.html",
				dificult: "green",
			},
			{
				id: 6,
				name: "Математические задачи",
				link: "/html/with_css/test-6.html",
				dificult: "green",
			},
			{
				id: 7,
				name: "Интересная затея",
				link: "/html/with_css/test-7.html",
				dificult: "green",
			},
			{
				id: 8,
				name: "Два принципа",
				link: "/html/with_css/test-8.html",
				dificult: "green",
			},
			{
				id: 9,
				name: "Принципы успеха",
				link: "/html/with_css/test-9.html",
				dificult: "green",
			},
			{
				id: 10,
				name: "Собираем проект",
				link: "/html/with_css/test-10.html",
				dificult: "green",
			},
			{
				id: 11,
				name: "Создание графика",
				link: "/html/with_css/test-11.html",
				dificult: "green",
			},
			{
				id: 12,
				name: "Koans",
				link: "/html/with_css/test-12.html",
				dificult: "green",
			},
			{
				id: 13,
				name: "Всякое разное",
				link: "/html/with_css/test-13.html",
				dificult: "green",
			},
			{
				id: 14,
				name: "Наши достижения",
				link: "/html/with_css/test-14.html",
				dificult: "green",
			},
			{
				id: 15,
				name: "Словари",
				link: "/html/with_css/test-15.html",
				dificult: "green",
			},
			{
				id: 16,
				name: "Фиксированное избранное",
				link: "/html/with_css/test-16.html",
				dificult: "green",
			},
			{
				id: 17,
				name: "Разноцветные блоки",
				link: "/html/with_css/test-17.html",
				dificult: "green",
			},
			{
				id: 18,
				name: "Две колонки",
				link: "/html/with_css/test-18.html",
				dificult: "green",
			},
			{
				id: 19,
				name: "В два ряда",
				link: "/html/with_css/test-19.html",
				dificult: "green",
			},
			{
				id: 20,
				name: "Серия блоков",
				link: "/html/with_css/test-20.html",
				dificult: "green",
			},
			{
				id: 21,
				name: "Молчание - золото",
				link: "/html/with_css/test-21.html",
				dificult: "green",
			},
			{
				id: 22,
				name: "Кольцо",
				link: "/html/with_css/test-22.html",
				dificult: "green",
			},
			{
				id: 23,
				name: "Три треугольника",
				link: "/html/with_css/test-23.html",
				dificult: "green",
			},
			{
				id: 24,
				name: "Три квадрата",
				link: "/html/with_css/test-24.html",
				dificult: "green",
			},
			{
				id: 25,
				name: "Smart pixel",
				link: "/html/with_css/test-25.html",
				dificult: "green",
			},
			{
				id: 26,
				name: "Безопасность",
				link: "/html/with_css/test-26.html",
				dificult: "green",
			},
			{
				id: 27,
				name: "Распродажа стайлеров",
				link: "/html/with_css/test-27.html",
				dificult: "green",
			},
			{
				id: 28,
				name: "Зафиксируйте цену",
				link: "/html/with_css/test-28.html",
				dificult: "green",
			},
			{
				id: 29,
				name: "Научное наследие",
				link: "/html/with_css/test-29.html",
				dificult: "green",
			},
			{
				id: 30,
				name: "Эйнштейн",
				link: "/html/with_css/test-30.html",
				dificult: "green",
			},
			{
				id: 31,
				name: "Яндекс",
				link: "/html/with_css/test-31.html",
				dificult: "green",
			},
			{
				id: 32,
				name: "Сегодня на сайте",
				link: "/html/with_css/test-32.html",
				dificult: "green",
			},
			{
				id: 33,
				name: "Самое читаемое",
				link: "/html/with_css/test-33.html",
				dificult: "green",
			},
			{
				id: 34,
				name: "Код CSS",
				link: "/html/with_css/test-34.html",
				dificult: "green",
			},
			{
				id: 35,
				name: "Английский",
				link: "/html/with_css/test-35.html",
				dificult: "green",
			},
			{
				id: 36,
				name: "Переводчики онлайн",
				link: "/html/with_css/test-36.html",
				dificult: "green",
			},
			{
				id: 37,
				name: "План занятий",
				link: "/html/with_css/test-37.html",
				dificult: "green",
			},
			{
				id: 38,
				name: "Книги на форуме",
				link: "/html/with_css/test-38.html",
				dificult: "green",
			},
			{
				id: 39,
				name: "Акценты",
				link: "/html/with_css/test-39.html",
				dificult: "green",
			},
			{
				id: 40,
				name: "",
				link: "/html/with_css/test-40.html",
				dificult: "green",
			},
			{
				id: 41,
				name: "",
				link: "/html/with_css/test-41.html",
				dificult: "green",
			},

		],

	},

		methods: {
//			show: function(){
//				var footerContainer = document.querySelector("footer .footer__container");
//				var footerLabel = window.getComputedStyle(document.querySelector("footer .footer__label"));
//
//				if(footerLabel.display === "block"){
//					if(this.footerShow === 0) {
//						footerContainer.style.height = 'auto';
//						this.footerShow = 1;
//					}
//					else {
//						footerContainer.style.height = 15 + 'px';
//						this.footerShow = 0;
//					}
//				}
//			},

			show: function(id){
				this.htmlWithoutStyles = this.htmlWithoutStyles.map(card => {
					if(card.id === id){ card.isShow = !card.isShow; }
					else { card.isShow = false}
					return card;
				});
			},
		}
});

/*************************************************
ФУНКЦИЯ НАБЛЮДЕНИЯ ЗА DOM В MAIN
**************************************************/

let observer = new MutationObserver(mutationRecords => {
  	//console.log(mutationRecords); // console.log(изменения)
	includeHTML();
});

// наблюдать за всем, кроме атрибутов
observer.observe(main, {
  childList: true, // наблюдать за непосредственными детьми
  subtree: true, // и более глубокими потомками
  characterDataOldValue: true // передавать старое значение в колбэк
});


/*************************************************
ФУНКЦИЯ ПОДКЛЮЧЕНИЯ ДОП. СТРАНИЦ HTML
**************************************************/
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
	elmnt = z[i];
	/*search for elements with a certain atrribute:*/
	file = elmnt.getAttribute("maskit-include-html");
	if (file) {
	  /*make an HTTP request using the attribute value as the file name:*/
	  xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
		  if (this.status == 200) {elmnt.innerHTML = this.responseText;}
		  if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
		  /*remove the attribute, and call this function once more:*/
		  elmnt.removeAttribute("maskit-include-html");
		  includeHTML();
		}
	  }
	  xhttp.open("GET", file, true);
	  xhttp.send();
	  /*exit the function:*/
	  return;
	}
  }
};










//var footer = document.querySelector("footer");
//var footerContainer = document.querySelector("footer .footer__container");
//var footerShow = 0;
//
//footer.addEventListener("click", function(){
//	console.log(footerContainer.style);
//
//	if(footerShow === 0) {
//		footerContainer.style.height = 'auto';
//		footerShow = 1;
//	}
//	else {
//		footerContainer.style.height = 15 + 'px';
//		footerShow = 0;
//	}
//});


