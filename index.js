//User location
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=fb51c6b86eeb06ab9f272171b19b4543', function(data){ 

var lat = data.lat; //# lat=위도
var lon = data.lon; //#lon=경도
var units = "metric"; //#측정단위=미터법

$("#city").html(data.city + ", " + data.country) 
console.log(data);
//Open weather API request 
$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=' + units + 
'&APPID=fb51c6b86eeb06ab9f272171b19b4543', function(json){ 
console.log(json); 
$("#temp").html(json.main.temp); // 섭씨온도 표시
$("#style").html(json.main.style) // 옷스타일 표시
$("#humidity").html(json.main.humidity + ' %'); //습도
$("#overall").html(json.weather[0].main); // 현재 날씨

	
var style = prompt("지금 날씨에 적당한 옷 차림은?"); ///각 온도에 따라 글자는 넣었으나 이미지는 못넣었습니다.
				
{
  if(style <= 4){
    document.images[0].src =('4~.png')
    document.images[0].width = 600;
    document.images[0].height = 200;
  }else if(style >= 5 && style < 8){
    document.images[0].src =('5~8.png')
    document.images[0].width = 600;
    document.images[0].height = 200;					
  }else if(style >= 9 && style < 12){
    document.images[0].src =('9~11.png')
    document.images[0].width = 600;
    document.images[0].height = 200;
  }else if(style >= 12 && style < 17){
    document.images[0].src =('12~16.png')
    document.images[0].width = 600;
    document.images[0].height = 200;
  }else if(style >= 17 && style < 20){
    document.images[0].src =('17~19.png')
    document.images[0].width = 600;
    document.images[0].height = 200;
  }else if(style >= 20 && style < 23){
    document.images[0].src =('20~22.png')
    document.images[0].width = 600;
    document.images[0].height = 200;
  }else if(style >= 23 && style < 28){
    document.images[0].src =('23~27.png')
    document.images[0].width = 600;
    document.images[0].height = 200;
  }else if(style >= 28){
    document.images[0].src =('28.png')
    document.images[0].width = 600;
    document.images[0].height = 200;
  }
}

var apiURI ="http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=fb51c6b86eeb06ab9f272171b19b4543"   
          $.ajax({
            url : apiURI,method : 'GET',success :  (data)=> {// 아이콘 취득 

              var imgURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
$('#img').attr("src", imgURL); // 아이콘 표시

            }
          });
        })
      })
