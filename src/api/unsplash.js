import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
        Authorization: 'Client-ID Vkn0yy1W9en_JvCeEnkXP_QtIyJF2hycVRAPs2COKto'
      }
    });
