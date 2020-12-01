'use strict';

module.exports = (sequelize, DataTypes) => {

    const order = sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('incomplete', 'complete'),
            allowNull: false
        },
        payment: {
            type: DataTypes.ENUM('unpaid', 'paid'),
            allowNull: false
        },
        shipping: {
            type: DataTypes.ENUM('unfulfilled', 'fulfilled'),
            allowNull: false
        }



    }, {
        timestamps: false,
        underscored: true
    });

    order.associate = function(models) {
        order.belongsTo(models.customer, { foreignKey: { allowNull: false }})

        models.address.hasOne(order, { as: 'shipping_address', foreignKey: { allowNull: false }});
        models.address.hasOne(order, { as: 'billing_address', foreignKey: { allowNull: false }});
    };

    return order;
};