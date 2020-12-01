'use strict';

module.exports = (sequelize, DataTypes) => {

    const product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,           //DataTypes.UUID
            primaryKey: true,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        commodity_type: {
            type: DataTypes.ENUM('physical', 'digital'),
            allowNull: false
        },
        manage_stock: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        inventory: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        visible: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        featured: {
            type: DataTypes.BOOLEAN,
        }

    }, {
        timestamps: false,
        underscored: true
    });

    product.associate = function(models) {
        product.hasMany(models.variant);
        product.belongsToMany(models.category, {through: 'product_category', constraints: false});
    };

    return product;
};