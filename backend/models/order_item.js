'use strict';

module.exports = (sequelize, DataTypes) => {

    const order_item = sequelize.define('order_item', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }, {
        timestamps: false,
        underscored: true
    });

    order_item.associate = function(models) {
        order_item.belongsTo(models.order, { foreignKey: { allowNull: false }} );
        order_item.belongsTo(models.product, { foreignKey: { allowNull: false }} );
    };

    return order_item;
};