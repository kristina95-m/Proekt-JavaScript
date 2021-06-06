let text_button = document.getElementById('city_name');
let click_button = document.getElementById('button');

let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let f_like = document.querySelector('.f_like');
let max_temp = document.querySelector('.max_temp');
let min_temp = document.querySelector('.min_temp');
let pre = document.querySelector('.pre');
let hum = document.querySelector('.hum');







     click_button.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Kumanovo,&appid=e33fa964cd9558903a9f7ca57b0b8b25')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        let name_value = data['name'];
        let temp_value = data['main']['temp'];
        let f_like_value = data['main']['feels_like'];
        let max_temp_value = data['main']['temp_max'];
        let min_temp_value = data['main']['temp_min'];
        let pre_value = data['main']['pressure'];
        let hum_value = data['main']['humidity'];
        let desc_value = data['weather'][0]['description'];



        name.innerHTML = name_value;
        temp.innerHTML = temp_value;
        f_like.innerHTML = f_like_value;
        max_temp.innerHTML = max_temp_value;
        min_temp.innerHTML = min_temp_value;
        pre.innerHTML = pre_value;
        hum.innerHTML = hum_value;
        desc.innerHTML = desc_value;


    })
    .catch(error => {
        console.error('City not found', error);
    })

    }); 


   


