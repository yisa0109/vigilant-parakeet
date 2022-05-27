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
		    var style = document.getElementById(("temp").src)
						if(temp <= 4){
							document.images[0].src =('4~.png')
							document.images[0].width = 600;
							document.images[0].height = 200;
						}else if(temp >= 5 && temp < 8){
							document.images[0].src =('5~8.png')
							document.images[0].width = 600;
							document.images[0].height = 200;					
						}else if(temp >= 9 && temp < 12){
							document.images[0].src =('9~11.png')
							document.images[0].width = 600;
							document.images[0].height = 200;
						}else if(temp >= 12 && temp < 17){
							document.images[0].src =('12~16.png')
							document.images[0].width = 600;
							document.images[0].height = 200;
						}else if(temp >= 17 && temp < 20){
							document.images[0].src =('17~19.png')
							document.images[0].width = 600;
							document.images[0].height = 200;
						}else if(temp >= 20 && temp < 23){
							document.images[0].src =('20~22.png')
							document.images[0].width = 600;
							document.images[0].height = 200;
						}else if(temp >= 23 && temp < 28){
							document.images[0].src =('23~27.png')
							document.images[0].width = 600;
							document.images[0].height = 200;
						}else if(temp >= 28){
							document.images[0].src =('28.png')
							document.images[0].width = 600;
							document.images[0].height = 200;
						}
					
				

	

		    


            }
          });
        });
    })
   
