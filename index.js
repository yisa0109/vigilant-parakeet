//User location
$.getJSON('https://api.openweathermap.org/data/2.5/weather?id=1838524&appid=1844db1080e02fd7f0b9e3b8136ec4bf&units=metric', function(data){ 


$("#name").html(data.name) 

//Open weather API request 
$.getJSON('https://api.openweathermap.org/data/2.5/weather?id=1838524&appid=1844db1080e02fd7f0b9e3b8136ec4bf&units=metric', function(json){ 

$("#temp").html(json.main.temp ' C&deg');// 섭씨온도 표시
$("#style").html(json.main.style) // 옷스타일 표시
$("#humidity").html(json.main.humidity + ' %'); //습도
$("#overall").html(json.weather[0].main); // 현재 날씨
	

	
	
var apiURI ="https://api.openweathermap.org/data/2.5/weather?id=1838524&appid=1844db1080e02fd7f0b9e3b8136ec4bf&units=metric"
          $.ajax({
            url : apiURI,method : 'GET',success :  (data)=> {// 아이콘 취득 

              var imgURL = "//openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
$('#img').attr("src", imgURL); // 아이콘 표시

            }
          });
        })
      })
