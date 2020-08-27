'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert ('Sectors',[
    {
      districtId:1,
      name: 'Bumbogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Gatsata',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Gikomero',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Gisozi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Jabana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Jali',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Kacyiru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Kimihurura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Kimironko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Kinyinya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Ndera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Nduba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Remera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Rusororo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      name: 'Rutunga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Gahanga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Gatenga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Gikondo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Kagarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Kanombe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Kicukiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Kigarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Masaka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Niboye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      name: 'Nyarugunga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Gitega',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Kanyinya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Kigali',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Kimisagara',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Mageragere',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Muhima',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Nyakabanda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Nyamirambo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Nyarugenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      name: 'Rwezamenyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Bwishyura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Gishari',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Gishyita',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Gitesi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Mubuga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Murambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Murundi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Mutuntu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Rubengera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Rugabano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Ruganda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Rwankuba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      name: 'Twumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Bwira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Gatumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Hindiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Kabaya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Kageyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Kavumu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Matyazo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Muhanda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Muhororo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Ndaro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Ngororero',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Nyange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      name: 'Sovu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Bigogwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Jenda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Jomba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Kabatwa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Karago',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Kintobo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Mukamira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Muringa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Rambura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Rugera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Rurembo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      name: 'Shirya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Bushekeri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Bushenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Cyato',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Gihombo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Kagano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Kanjongo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Karambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Karengera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Kirimbi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Macuba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Mahembe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Nyabitekeri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Rangiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Ruharambuga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      name: 'Shangi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Bugeshi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Busasamana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Cyanzarwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Gisenyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Kanama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Kanzenze',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Mudende',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Nyakiriba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Nyamyumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Nyundo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Rubavu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      name: 'Rugero',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Bugarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Butare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Bweyeye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Gashonga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Giheke',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Gihundwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Gikundamvura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Gitambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Kamembe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Muganza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Mururu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Nkanka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Nkombo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Nkungu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Nyakabuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Nyakarenzo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Nzahaha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      name: 'Rwimbogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Boneza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Gihango',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Kigeyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Kivumu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Manihira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Mukura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Murunda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Musasa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Mushonyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Mushubati',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Nyabirasi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Ruhango',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      name: 'Rusebeya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Gashora',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Juru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Kamabuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Mareba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Mayange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Musenyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Mwogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Ngeruka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Ntarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Nyamata',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Nyarugenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Rilima',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Ruhuha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Rweru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      name: 'Shyara',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Gasange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Gatsibo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Gitoki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Kabarore',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Kageyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Kiramuruzi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Kiziguro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Muhura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Murambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Ngarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Nyagihanga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Remera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Rugarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      name: 'Rwimbogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Gahini',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Kabare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Kabarondo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Mukarange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Murama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Murundi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Mwiri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Ndego',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Nyamirama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Rukara',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Ruramira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      name: 'Rwinkwavu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Gahara',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Gatore',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Kigarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Kigina',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Kirehe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Mahama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Mpanga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Musaza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Mushikiri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Nasho',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Nyamugari',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      name: 'Nyarubuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Gashanda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Jarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Karembo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Kazo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Kibungo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Mugesera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Murama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Mutenderi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Remera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Rukira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Rukumberi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Rurenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Sake',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      name: 'Zaza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Gatunda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Karama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Karangazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Katabagemu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Kiyombe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Matimba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Mimuri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Mukama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Musheri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Nyagatare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Rukomo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Rwempasha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Rwimiyaga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      name: 'Tabagwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Fumbwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Gahengeri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Gishali',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Karenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Kigabiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Muhazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Munyaga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Munyiginya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Musha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Muyumbu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Mwulire',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Nyakariro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Nzige',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      name: 'Rubona',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Bungwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Butaro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Cyanika',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Cyeru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Gahunga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Gatebe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Gitovu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Kagogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Kinoni',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Kinyababa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Kivuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Nemba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Rugarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Rugengabari',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Ruhunde',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Rusarabuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      name: 'Rwerere',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Busengo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Coko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Cyabingo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Gakenke',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Gashenyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Janja',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Kamubuga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Karambo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Kivuruga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Mataba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Minazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Mugunga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Muhondo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Muyongwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Muzo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Nemba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Ruli',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Rusasa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      name: 'Rushashi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Bukure',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Bwisige',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Byumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Cyumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Giti',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Kageyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Kaniga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Manyagiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Miyove',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Mukarange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Muko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Mutete',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Nyamiyaga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Nyankenke',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Rubaya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Rukomo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Rushaki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Rutare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Ruvune',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Rwamiko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      name: 'Shangasha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Busogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Cyuve',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Gacaca',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Gashaki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Gataraga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Kimonyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Kinigi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Muhoza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Muko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Musanze',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Nkotsi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Nyange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Remera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Rwaza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      name: 'Shingiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Base',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Burega',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Bushoki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Buyoga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Cyinzuzi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Cyungo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Kinihira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Kisaro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Masoro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Mbogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Murambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Ngoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Ntarabana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Rukozo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Rusiga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Shyorongi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      name: 'Tumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Gikonko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Gishubi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Kansi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Kibirizi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Kigembe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Mamba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Muganza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Mugombwa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Mukingo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Musha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Ndora',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Nyanza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      name: 'Save',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Gishamvu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Huye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Karama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Kigoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Kinazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Maraba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Mbazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Mukura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Ngoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Ruhashya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Rusatira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Rwaniro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Simbi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      name: 'Tumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Gacurabwenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Karama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Kayenzi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Kayumbu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Mugina',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Musambira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Ngamba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Nyamiyaga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Nyarubaka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Rugarika',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Rukoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      name: 'Runda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Cyeza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Kabacuzi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Kibangu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Kiyumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Muhanga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Mushishiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Nyabinoni',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Nyamabuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Nyarusange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Rongi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Rugendabari',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      name: 'Shyogwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Buruhukiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Cyanika',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Gasaka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Gatare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Kaduha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Kamegeri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Kibirizi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Kibumbwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Kitabi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Mbazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Mugano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Musange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Musebeya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Mushubi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Nkomane',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Tare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      name: 'Uwinkingi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Busasamana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Busoro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Cyabakamyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Kibirizi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Kigoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Mukingo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Muyira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Ntyazo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Nyagisozi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      name: 'Rwabicuma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Busanze',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Cyahinda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Kibeho',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Kivu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Mata',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Muganza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Munini',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Ngera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Ngoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Nyabimata',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Nyagisozi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Ruheru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Ruramba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      name: 'Rusenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      name: 'Bweramana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      name: 'Byimana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      name: 'Kabagali',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      name: 'Kinazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      name: 'Kinihira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      name: 'Mbuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      name: 'Mwendo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      name: 'Ntongwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      name: 'Ruhango',
      createdAt: new Date(),
      updatedAt: new Date()
    }
       ],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Sectors', null, {});
  }
};
