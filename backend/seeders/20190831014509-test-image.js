'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {




    return queryInterface.bulkInsert('images', [

        {
            id: 20,
            is_thumbnail: true,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/6dbab9b7-1dac-4e90-9788-c4fa260fabe9.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/73aa2d21-d224-4c67-aac6-42380f33b5a6.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/a68ab2ec-d0a3-4991-a496-825464df01b5.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/9256e19e-a30b-4fe3-8436-68f5de6018dc.jpg',
            product_id: 1
        },
        {
            id: 21,
            is_thumbnail: false,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/5b88046f-32c1-4d0d-bc35-44207035a65b.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/caa4d30d-211a-4e66-b51a-0017fd09b8a0.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d4f7e4a3-96c1-47ea-a576-a2121ef186f4.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/2f8597ee-a8d3-45ce-b5c1-336b4b9ea378.jpg',
            product_id: 1
        },
        {
            id: 22,
            is_thumbnail: false,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/6b263b23-ee1c-4257-ae78-deb6bf2d689a.jpg"',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/515b029c-c0de-4784-96da-88c72da38aa8.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/278ce455-8b5d-4b9e-a306-515b01005f41.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/2c5d9f70-0c99-4bb4-afb0-99d1d1294a7f.jpg',
            product_id: 1
        },




        {
            id: 23,
            is_thumbnail: true,
            url_zoom:'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/8b3cc366-513e-4a47-9c90-e6187904a714.jpg',
            url_standard:'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/7e9bb119-8816-4ecf-bd76-e24e313ae603.jpg',
            url_thumbnail:'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/3313d8a7-c509-4f77-abbb-cb6d86a9c3ee.jpg',
            url_tiny:'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/1dff58ed-c7d6-4e92-94e4-bc80b8b416f3.jpg',
            product_id: 2
        },
        {
            id: 24,
            is_thumbnail: false,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/6c6e3659-1618-4365-9c2d-0f2562a1f72f.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/2a39d070-60db-40d7-8448-999e7baa7e90.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/bc1948af-4da7-42c2-a6ec-86f800e4720d.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d2c3a2e9-dcf1-4ec6-96b9-4f2e06b1d3f0.jpg',
            product_id: 2
        },





        {
            id: 25,
            is_thumbnail: true,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/fd897ca4-1a5d-4be0-b9a1-2c82a80df125.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/eabd3690-306b-4db9-91de-f6b3e924a904.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d8123d3c-5f4a-438c-a1f9-450d7366732e.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/5111c0e8-251a-4c4d-b863-3bce4722ee0a.jpg',
            product_id: 3
        },
        {
            id: 26,
            is_thumbnail: false,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/03a0b6a3-302a-44cf-a740-6d5d975a3e83.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/80a455fd-5a51-473a-88db-92c87a3b6bec.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d033a887-9aca-475f-aaa6-397403c0f861.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/ab85d76d-9931-4764-a193-fb56994278c3.jpg',
            product_id: 3
        },
        {
            id: 27,
            is_thumbnail: false,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/ad9fe3b9-432d-48fc-8d7f-7fe8be5c340c.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/6258b4bd-598b-4511-8089-e9c54aa556be.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/9ea6c158-d9b0-48ab-8ec9-3e3a0e422278.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d92b60f9-5e96-41cd-931a-889171ed6f8b.jpg',
            product_id: 3
        },



        {
            id: 28,
            is_thumbnail: true,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/fd897ca4-1a5d-4be0-b9a1-2c82a80df125.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/eabd3690-306b-4db9-91de-f6b3e924a904.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d8123d3c-5f4a-438c-a1f9-450d7366732e.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/5111c0e8-251a-4c4d-b863-3bce4722ee0a.jpg',
            product_id: 4
        },
        {
            id: 29,
            is_thumbnail: false,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/03a0b6a3-302a-44cf-a740-6d5d975a3e83.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/80a455fd-5a51-473a-88db-92c87a3b6bec.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d033a887-9aca-475f-aaa6-397403c0f861.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/ab85d76d-9931-4764-a193-fb56994278c3.jpg',
            product_id: 4
        },
        {
            id: 30,
            is_thumbnail: false,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/ad9fe3b9-432d-48fc-8d7f-7fe8be5c340c.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/6258b4bd-598b-4511-8089-e9c54aa556be.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/9ea6c158-d9b0-48ab-8ec9-3e3a0e422278.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d92b60f9-5e96-41cd-931a-889171ed6f8b.jpg',
            product_id: 4
        },



        

        {
            id: 31,
            is_thumbnail: true,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/fd897ca4-1a5d-4be0-b9a1-2c82a80df125.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/eabd3690-306b-4db9-91de-f6b3e924a904.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d8123d3c-5f4a-438c-a1f9-450d7366732e.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/5111c0e8-251a-4c4d-b863-3bce4722ee0a.jpg',
            product_id: 5
        },
        {
            id: 32,
            is_thumbnail: false,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/03a0b6a3-302a-44cf-a740-6d5d975a3e83.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/80a455fd-5a51-473a-88db-92c87a3b6bec.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d033a887-9aca-475f-aaa6-397403c0f861.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/ab85d76d-9931-4764-a193-fb56994278c3.jpg',
            product_id: 5
        },
        {
            id: 33,
            is_thumbnail: false,
            url_zoom: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/ad9fe3b9-432d-48fc-8d7f-7fe8be5c340c.jpg',
            url_standard: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/6258b4bd-598b-4511-8089-e9c54aa556be.jpg',
            url_thumbnail: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/9ea6c158-d9b0-48ab-8ec9-3e3a0e422278.jpg',
            url_tiny: 'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/89eaaeb4-f5fe-4fb9-91d9-096ab09f0130/d92b60f9-5e96-41cd-931a-889171ed6f8b.jpg',
            product_id: 5
        },


        // {id: 23, is_thumbnail: true, url_tiny: '', product_id: 1},
        // {id: 24, is_thumbnail: false, url_standard: 'http://lorempixel.com/300/300/', product_id: 1},
        // {id: 25, is_thumbnail: false, url_standard: 'http://lorempixel.com/300/300/', product_id: 1},
        
        // {id: 26, is_thumbnail: false, url_standard: 'http://lorempixel.com/300/300/', product_id: 2},
        // {id: 27, is_thumbnail: true, url_standard: 'http://lorempixel.com/300/300/', product_id: 2},

        // {id: 28, is_thumbnail: true, url_standard: 'http://lorempixel.com/300/300/', product_id: 3},
        // {id: 29, is_thumbnail: false, url_standard: 'http://lorempixel.com/300/300/', product_id: 3},
        // {id: 30, is_thumbnail: false, url_standard: 'http://lorempixel.com/300/300/', product_id: 3},
        // {id: 31, is_thumbnail: false, url_standard: 'http://lorempixel.com/300/300/', product_id: 3},

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('images', null, {trunecate: true});
  }
};
