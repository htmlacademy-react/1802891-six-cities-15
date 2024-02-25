import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
    previewImage: 'https://url-to-image/image.png',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: ['https://url-to-image/image.png'],
    maxAdults: 4,
  },
  {
    id: '70faa463-6bf2-40ec-bca9-4c5d055c5c7f',
    title: 'Waterfront with extraordinary view',
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    type: 'hotel',
    price: 217,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Air conditioning',
      'Washer',
      'Washing machine',
      'Fridge'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 1.5,
    bedrooms: 5,
    maxAdults: 6
  },
  {
    id: '70faa463-6bf2-40ec-ba9-4c5d055c5c7f',
    title: 'Waterfront with extraordinary view',
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    type: 'hotel',
    price: 217,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Air conditioning',
      'Washer',
      'Washing machine',
      'Fridge'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 1.5,
    bedrooms: 5,
    maxAdults: 6
  },
  {
    id: '4367aa15-eb08-49cd-ba6e-f32ac3e95aff',
    title: 'The house among olive ',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'apartment',
    price: 441,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Towels',
      'Washer',
      'Breakfast',
      'Coffee machine',
      'Fridge',
      'Baby seat'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.1,
    bedrooms: 3,
    maxAdults: 6
  }
];

