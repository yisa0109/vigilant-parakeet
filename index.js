//User location
$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=35.1028&lon=129.0403&appid=1844db1080e02fd7f0b9e3b8136ec4bf&units=metric', function(data){ 
$("#name").html(data.name) 
//Open weather API request 
$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=35.1028&lon=129.0403&appid=1844db1080e02fd7f0b9e3b8136ec4bf&units=metric', function(json){ 
$("#temp").html(json.main.temp + ' C&deg')// 섭씨온도 표시
$("#humidity").html(json.main.humidity + ' %'); //습도
$("#overall").html(json.weather[0].main); // 현재 날씨
var apiURI ="https://api.openweathermap.org/data/2.5/weather?lat=35.1028&lon=129.0403&appid=1844db1080e02fd7f0b9e3b8136ec4bf&units=metric"
          $.ajax({
            url : apiURI,method : 'GET',success :  (data)=> {// 아이콘 취득 

              var imgURL = "//openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
$('#img').attr("src", imgURL); // 아이콘 표시
		    

		    
$("#style").html(json.main.style) // 옷스타일 표시
		    var style =json.main.temp
						if(style <= 4){
							document.images[0].src =('4~.png')
							document.body.style.backgroundColor = 'deepblue';							
						}else if(style >= 5 && style < 8){
							document.images[0].src =('5~8.png')
							document.body.style.backgroundColor = 'blue';
						}else if(style >= 9 && style < 12){
							document.images[0].src =('9~11.png')
							document.body.style.backgroundColor = 'Navy';
						}else if(style >= 12 && style < 17){
							document.images[0].src =('12~16.png')
							document.body.style.backgroundColor = 'skyblue';
						}else if(style >= 17 && style < 20){
							document.images[0].src =('17~19.png')
							document.body.style.backgroundColor = 'orange';
						}else if(style >= 20 && style < 23){
							document.images[0].src =('20~22.png')
							document.body.style.backgroundColor = 'yellow';
						}else if(style >= 23 && style < 28){
							document.images[0].src =('23~27.png')
							document.body.style.backgroundColor = 'pink';
						}else if(style >= 28){
							document.images[0].src =('28.png')
							document.body.style.backgroundColor = 'red';
						}

		    
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨 
    }; 

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
      });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    

            }
          });
        });
    })
   
