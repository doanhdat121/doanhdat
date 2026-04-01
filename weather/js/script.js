$(document).ready(function() {
	const UI = {
		loading: {
			show: () => $('#loading').show(),
			hide: () => $('#loading').hide()
		},
		error: {
			show: (message) => $('#error-message').text(message).addClass('show'),
			hide: () => $('#error-message').removeClass('show'),
		},
		
		weather: {
			show: () => $('#weather-info').show(),
			hide: () => $('#weather-info').hide()
		}
	};
	
	const API = {
		weather: {
			url: 'https://api.open-meteo.com/v1/forecast',
			params: {
				current: 'temperature_2m,wind_speed_10m',
				hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m'
			}
		},
		geocoding: {
			url: 'https://nominatim.openstreetmap.org/reverse',
			params: {
				format: 'json',
				'accept-language': 'vi'
			}
		}
	};
	
	const formatTime = {
		current: (timeString) => new Date(timeString).toLocaleString('vi-VN', {
			hour: '2-digit',
			minute: '2-digit',
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		}),
		
		hourly: (timeString) => new Date(timeString).toLocaleTimeString('vi-VN', {
			hour: '2-digit',
			minute: '2-digit'
		})
	};
	
	UI.weather.hide();
	UI.error.hide();
	
	if(!navigator.geolocation) {
		UI.error.show('Trình duyệt của bạn không hỗ trợ Geolocation');
		return
	}
	
	UI.loading.show();
	navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
	
function handleSuccess(position) {
	const {latitude, longitude} = position.coords;
	updateCoordinates(latitude, longitude);
	
	Promise.all([
		fetchWeatherData(latitude, longitude),
		fetchLocationData(latitude, longitude)
	]).catch(error => UI.error.show(error.message))
	.finally(() => UI.loading.hide());
}

function fetchWeatherData(lat, lon) {
	return $.ajax({
		url: API.weather.url,
		data: {...API.weather.params, latitude: lat, longitude: lon},
		success: updateWeatherUI,
		error: () => {throw new Error('không thể lấy thông tin thời tiết :('); }
	});
}


function fetchLocationData(lat, lon) {
	return $.ajax({
		url: API.geocoding.url,
		data: {...API.geocoding.params, lat, lon},
		success: data => $('#address-text').text(data.display_name),
		error: () =>{throw new Error('Không thể lấy thông tin địa điểm T^T');}
	});
}

function updateWeatherUI(weatherData) {
	const currentTime = formatTime.current(weatherData.current.time);
	const currentHourIndex = weatherData.hourly.time.indexOf(weatherData.current.time);
	
	updateCurrentWeather(weatherData, currentTime);
	updateHourlyForecast(weatherData, currentHourIndex);
	UI.weather.show();
}

function updateCoordinates(lat, lon) {
	$('#latitude').text(lat);
	$('#longitude').text(lon);
}

function updateCurrentWeather(data, time) {
	$('#current-time').text(time);
	$('#temperature').
		text(`${data.current.temperature_2m} ${data.current_units.temperature_2m}`);
	$('#wind-speed').
		text(`${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`);
	$('#timezone').text(data.timezone);
	$('#elevation').text(`${data.elevation} m`);
}
function updateHourlyForecast(data, startIndex) {
	const hourlyList = $('#hourly-list').empty();
	const endIndex = Math.min(startIndex + 24, data.hourly.time.length);
	
	for (let i = startIndex; i < endIndex; i++) {
		const time = formatTime.hourly(data.hourly.time[i]);
		const temperature = data.hourly.temperature_2m[i];
		const humidity = data.hourly.relative_humidity_2m[i];
		const windSpeed = data.hourly.wind_speed_10m[i];
		
		if (temperature !== undefined
		&& humidity !== undefined
		&& windSpeed !== undefined) {
			hourlyList.append(
			createHourlyWeatherCard(
				time, temperature, humidity, windSpeed, data.hourly_units));
		}
	}
}

function createHourlyWeatherCard(time, temp, humidity, wind, units) {
	return `
		<div class="hourly-item">
			<div class="time">${time}</div>
			<div class="temp">${temp}${units.temperature_2m}</div>
			<div class="humidity">${humidity}${units.relative_humidity_2m}</div>
			<div class="wind">${wind}${units.wind_speed_10m}</div>
		</div>
	`;
}

function handleError(error) {
	UI.loading.hide();
	const errorMessages = {
		1: "Người dùng từ chối cung cấp vị trí.",
		2: "Thông tin vị trí không khả dụng",
		3: "Yêu cầu vị trí đã hết thời gian chờ",
		default: "Đã xảy ra lỗi không xác định",
	};
	UI.error.show(errorMessages[error.code] || errorMessages.default);
}
});