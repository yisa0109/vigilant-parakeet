//User location
$.getJSON('index.json', function(data){ 
$("#country").html(data.country + ", " + data.regionName + ", " + data.city) 
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
		    
$("#overall").html(json.weather[0].main); // 우산유무
		    		    
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
		    
	setInterval(function(){                         
	var timer = new Date();            
	var h = timer.getHours();           
	var m = timer.getMinutes();            
	var s = timer.getSeconds();            
	document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;        },1000);    

		    


            }
          });
        });
    })
   
