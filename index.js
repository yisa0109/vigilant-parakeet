//User location
$.getJSON('index.json', function(data){ 

var lat = data.lat; //# lat=위도
var lon = data.lon; //#lon=경도
var units = "metric"; //#측정단위=미터법
	
var apiURI ="index.json" 
        $.ajax({
            url: apiURI,
            dataType: "json",
            type: "GET",
            async: "false",
            success: function(resp) {
                console.log(resp);
                console.log("현재온도 : "+ (resp.main.temp- 273.15) );
                console.log("현재습도 : "+ resp.main.humidity);
                console.log("날씨 : "+ resp.weather[0].main );
                console.log("상세날씨설명 : "+ resp.weather[0].description );
                console.log("날씨 이미지 : "+ resp.weather[0].icon );
                console.log("바람   : "+ resp.wind.speed );
                console.log("나라   : "+ resp.sys.country );
                console.log("도시이름  : "+ resp.name );
                console.log("구름  : "+ (resp.clouds.all) +"%" );   

          $.ajax({
            url : apiURI,method : 'GET',success :  (data)=> {// 아이콘 취득 

              var imgURL = "//openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
$('#img').attr("src", imgURL); // 아이콘 표시
            }
        })
    }

            }
          });
        })
      })
