export function formatCity(data) {

  return data.map(city => {
    return {
      formatted_query: city.display_name,
      latitude: city.lat,
      longitude: city.lon
    };
  });
   
}

export function formatWeather(data) {

  return data.map(weather => {
    return {
      forecast: weather.description,
      time: weather.valid_date
    };
  });
     
}

export function formatYelp(data) {

  return data.map(event => {
    return {
      name: event.name,
      image_url: event.image_url,
      price: event.price,
      rating: event.rating,
      url: event.url
    };
  });
     
}
