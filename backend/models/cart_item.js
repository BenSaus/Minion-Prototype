'use strict';

module.exports = (sequelize, DataTypes) => {

    const cart_item = sequelize.define('cart_item', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        timestamps: false,
        underscored: true
    });

    cart_item.associate = function(models) {
        models.cart.hasMany(cart_item, { foreignKey: { allowNull: false }});
        models.product.hasMany(cart_item, { foreignKey: { allowNull: false }});
    };

    return cart_item;
};