'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SubCategories', [
      {
        idCategory: 1,
        title: 'Apartemen',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdpJQhVBnuJJM7kqg84oRgPWOnBUY1GG3tSHuewb_hv4Zxnga&s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 1,
        title: 'Hotel',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDn3ir7Nc8jkA-765zP6SbEQ8WLlemv_FsKncxlx72tdnlPMy&s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 1,
        title: 'Villa',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrnl4MslOBkG7EOf-00HZ6ooDzRXny5U9X_42iXJHxtwKZ2nj&s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 1,
        title: 'Bungalow',
        image: 'https://pngimage.net/wp-content/uploads/2018/06/villas-png-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 2,
        title: 'Lapang Futsal',
        image: 'https://pngimage.net/wp-content/uploads/2018/06/lapangan-futsal-png-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 2,
        title: 'Lapang Sepak Bola',
        image: 'https://www.vippng.com/png/detail/300-3005527_lawn-field-foot-football-terrain-terrain-de-foot.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 2,
        title: 'Lapang Tenis',
        image: 'https://secure.webtoolhub.com/static/resources/icons/set173/3a8753c7.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 2,
        title: 'Lapang Basket',
        image: 'https://atlas-content-cdn.pixelsquid.com/assets_v2/174/1741468540273170085/jpeg-600/G03.jpg?modifiedAt=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 3,
        title: 'Apartemen',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdpJQhVBnuJJM7kqg84oRgPWOnBUY1GG3tSHuewb_hv4Zxnga&s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 3,
        title: 'Hotel',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDn3ir7Nc8jkA-765zP6SbEQ8WLlemv_FsKncxlx72tdnlPMy&s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 3,
        title: 'Villa',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrnl4MslOBkG7EOf-00HZ6ooDzRXny5U9X_42iXJHxtwKZ2nj&s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCategory: 3,
        title: 'Bungalow',
        image: 'https://pngimage.net/wp-content/uploads/2018/06/villas-png-3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SubCategories', null, {})
  }
};
