'use strict';

module.exports = (sequelize, DataTypes) => {

    const cart = sequelize.define('cart', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },

    }, {
        timestamps: false,
        underscored: true
    });

    cart.associate = function(models) {
        // models.customer.hasOne(cart, { foreignKey: { allowNull: false }});              // one customer, one cart
    };

    return cart; 
};