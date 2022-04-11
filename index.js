//User location
$.getJSON('http://ip-api.com/json', function(data){ //ip-api.com/현재 접속하고 있는 네트워크의 위치를 알려준다.
var lat = data.lat; //# lat=위도
var lon = data.lon; //#lon=경도
var units = "metric"; //#측정단위=미터법

$("#city").html(data.city + ", " + data.country) 
console.log(data);

//Open weather API request 
$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=' + units + 
'&APPID=fb51c6b86eeb06ab9f272171b19b4543', function(json){ 
console.log(json); 
$("#temperature-celcius").html(json.main.temp + ' C&deg'); // 섭씨온도 표시
$("#temperature-farenheit").html((json.main.temp * 1,8 + 32) + ' F&deg'); // 화씨온도 표시
$("#humidity").html(json.main.humidity + ' %'); //습도
$("#overall").html(json.weather[0].main); // 현재 날씨
        


var apiURI ="http://api.openweathermap.org/data/2.5/weather?q=Busan&appid=fb51c6b86eeb06ab9f272171b19b4543"   
          $.ajax({
            url : apiURI,method : 'GET',success :  (data)=> {// 아이콘 취득 

              var imgURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
$('#img').attr("src", imgURL); // 아이콘 표시


            }
          });

        });
    })       
