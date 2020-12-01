'use strict';

module.exports = (sequelize, DataTypes) => {

    const variant = sequelize.define('variant', {
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
        purchasable: {
            type: DataTypes.BOOLEAN,
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
        }

    }, {
        timestamps: false,
        underscored: true
    });

    variant.associate = function(models) {
        models.product.hasMany(variant);
    };

    return variant;
};