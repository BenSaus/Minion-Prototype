'use strict';

module.exports = (sequelize, DataTypes) => {

    const image = sequelize.define('image', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        is_thumbnail: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        sort_order: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        },
        image_files: {                              // Local path of the original file...why is this needed?
            type: DataTypes.STRING,
        },
        url_zoom: {
            type: DataTypes.STRING,
        },
        url_standard: {
            type: DataTypes.STRING,
        },
        url_thumbnail: {
            type: DataTypes.STRING,
        },
        url_tiny: {
            type: DataTypes.STRING,
        }

    }, {
        timestamps: false,
        underscored: true
    });

    image.associate = function(models) {
        models.product.hasMany(image);
    };

    return image;
};