$(document).ready(function() {

	ymaps.ready(initYandexMap);

	// function initYandexMap(){ 
	// 	var location = ymaps.geolocation;
	// 	var myMap = new ymaps.Map('myLocation', {
	// 		center: [49.423631699999994, 26.976389899999997],
	// 		zoom: 10
	// 	}, {
	// 		searchControlProvider: 'yandex#search'
	// 	});

	// 	// Получение местоположения и автоматическое отображение его на карте.
	// 	location.get({
	// 		mapStateAutoApply: true
	// 	})
	// 	.then(
	// 		function(result) {
	// 	        // Получение местоположения пользователя.
	// 	        var userAddress = result.geoObjects.get(0).properties.get('text');
	// 	        var userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();
	// 	        // Пропишем полученный адрес в балуне.
	// 	        result.geoObjects.get(0).properties.set({
	// 	        	balloonContentBody: 'Адрес: ' + userAddress +
	// 	        	'<br/>Координаты:' + userCoodinates
	// 	        });
	// 	        myMap.geoObjects.add(result.geoObjects)
	// 	    },
	// 	    function(err) {
	// 	    	console.log('Ошибка: ' + err)
	// 	    }
	// 	    );
	// }


	function initYandexMap(){
		var center = [49.423631699999994, 26.976389899999997];
		var myMap = new ymaps.Map('myLocation', {
			center: center,
			zoom: 14
		});
		var myPlacemark = new ymaps.Placemark(center, {}, {
		    iconLayout: 'default#image',
		    iconImageHref: 'images/icon_1.png',
		    iconImageSize: [25, 25],
		});
		myMap.geoObjects.add(myPlacemark);
	}

	
});