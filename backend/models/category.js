'use strict';

module.exports = (sequelize, DataTypes) => {

    const category = sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING, 
        },
        description: {
            type: DataTypes.STRING,
        },
        sort_order: {
            type: DataTypes.INTEGER, 
        },
        is_visible: {
            type: DataTypes.BOOLEAN, 
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING, 
        }

    }, {
        timestamps: false,
        underscored: true
    });

    category.associate = function(models) {
        category.hasOne(category, {as: 'parent'});
        category.belongsToMany(models.product, {through: 'product_category'});
    };

    return category;
};