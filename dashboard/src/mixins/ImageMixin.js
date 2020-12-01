export const ImageMixin = {

    methods: {

        async saveImages(images, productId){
            for(let image of images){
                await this.saveImage(image, productId);
            }
        },

        async saveImage(image, productId){
            try{
                const imageData = {
                    is_thumbnail: true,
                    url_zoom: image.url_zoom,
                    url_standard: image.url_standard,
                    url_thumbnail: image.url_thumbnail,
                    url_tiny: image.url_tiny,
                }
                let resp = await this.$http.post(`http://localhost:9000/products/${productId}/images`, imageData);
                console.log(resp);
            }
            catch(err){
                console.error(err);
            }
        },

        async deleteImage(imageId, productId){
            try{
                let resp = await this.$http.delete(`http://localhost:9000/products/${productId}/images/${imageId}`);
                console.log(resp);
            }
            catch(err){
                console.error(err);
            }
        },


        // This a temporary function that gets all the ALREADY sized image names
        getImageUrls(imageUrl){
            // http://www.pickledbraingames.com/temp/images/0258b0_tn.jpg

            const fileRegEx = /^(http:\/\/www.pickledbraingames.com\/temp\/images\/)(.*)_(lg|md|sm|tn).jpg$/;
            let matches = fileRegEx.exec(imageUrl);

            if(matches !== null){
                return({
                    id: Math.floor(Math.random() * 10000),                                  // This is a temporary id used to index the images for deletion ect. It is not saved to the database
                    url_zoom: `${matches[1]}${matches[2]}_lg.jpg`,
                    url_standard: `${matches[1]}${matches[2]}_md.jpg`,
                    url_thumbnail: `${matches[1]}${matches[2]}_sm.jpg`,
                    url_tiny: `${matches[1]}${matches[2]}_tn.jpg`,
                });
            }
            else{
                throw new Error('Photo filename does not match: ' + imageUrl);
            }
        },


    }
}