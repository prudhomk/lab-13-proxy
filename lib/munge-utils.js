export function formatCity(data) {

  const arr =  data.map(city => {
    return {
      formatted_query: city.display_name,
      latitude: city.lat,
      longitude: city.lon
    };
  });
  return arr[0];
}

export function formatWeather(weather) {
  return weather.data.map(item => {
    return {
      forecast: item.weather.description,
      time: item.valid_date
    };

  });
}

export function formatYelp(data) {
  return data.businesses.map(event => {
    return {
      name: event.name,
      image_url: event.image_url,
      price: event.price,
      rating: event.rating,
      url: event.url
    };
  });
     
}
