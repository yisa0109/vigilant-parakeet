//User location
$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=35.1028&lon=129.0403&APPID=1844db1080e02fd7f0b9e3b8136ec4bf', function(data){ 

var lat = data.lat; //# lat=위도
var lon = data.lon; //#lon=경도
var units = "metric"; //#측정단위=미터법

$("#name").html(data.name) 

//Open weather API request 
$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=35.1028&lon=129.0403&APPID=1844db1080e02fd7f0b9e3b8136ec4bf', function(json){ 

$("#temp").html((json.main.temp+(-273.15))); // 섭씨온도 표시
$("#style").html(json.main.style) // 옷스타일 표시
$("#humidity").html(json.main.humidity + ' %'); //습도
$("#overall").html(json.weather[0].main); // 현재 날씨
	

var apiURI ="https://api.openweathermap.org/data/2.5/weather?lat=35.1028&lon=129.0403&APPID=1844db1080e02fd7f0b9e3b8136ec4bf"
          $.ajax({
            url : apiURI,method : 'GET',success :  (data)=> {// 아이콘 취득 

              var imgURL = "//openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
$('#img').attr("src", imgURL); // 아이콘 표시

            }
          });
        })
      })

