import cityData from '../data/cities';
import weatherData from '../data/weather';
import yelpData from '../data/yelp';
import { formatCity, formatWeather, formatYelp } from '../lib/munge-utils';


describe('API Routes', () => {

  const expectedCity = [
    {
      'formatted_query': 'Hiroshima, Hiroshima Prefecture, Japan',
      'latitude': '34.3916058',
      'longitude': '132.4518156'
    }
  ];
  
  const expectedWeather = [
    {
      'forecast': 'Overcast clouds',
      'time': '2021-05-13',
    },
    {
      'forecast': 'Overcast clouds',
      'time': '2021-05-14',
    }
  ];

  const expectedYelp = [
    {
      'name': 'Okonomiyaki Nagataya',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/jXRGizB99IpGmq5FmbXvDg/o.jpg',
      'price': '￥',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/%E3%81%8A%E5%A5%BD%E3%81%BF%E7%84%BC-%E9%95%B7%E7%94%B0%E5%B1%8B-%E5%BA%83%E5%B3%B6%E5%B8%82?adjust_creative=lofqjVkYQ8FOEv9ip-l2tQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=lofqjVkYQ8FOEv9ip-l2tQ'
    },
    {
      'name': 'Atomic Bomb Dome / Hiroshima Peace Memorial',
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/ZSkgkTKUh_-wTyfNE1v9oA/o.jpg',
      'price': '￥',
      'rating': 5.0,
      'url': 'https://www.yelp.com/biz/%E5%8E%9F%E7%88%86%E3%83%89%E3%83%BC%E3%83%A0-%E5%BA%83%E5%B3%B6%E5%B9%B3%E5%92%8C%E8%A8%98%E5%BF%B5%E7%A2%91-%E5%BA%83%E5%B3%B6%E5%B8%82-2?adjust_creative=lofqjVkYQ8FOEv9ip-l2tQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=lofqjVkYQ8FOEv9ip-l2tQ'
    },
  ];
 
  test('munges city data', async () => {
    const output = formatCity(cityData);
    expect(output).toEqual(expectedCity);
  });

  test('munges weather data', async () => {
    const output = formatWeather(weatherData);
    expect(output).toEqual(expectedWeather);
  });

  test('munges yelp data', async () => {
    const output = formatYelp(yelpData);
    expect(output).toEqual(expectedYelp);
  });
});