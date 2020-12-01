'use strict';

module.exports = (sequelize, DataTypes) => {

    const transaction = sequelize.define('transaction', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gateway: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transaction_type: {
            type: DataTypes.ENUM('purchase', 'capture', 'authorize', 'refund'),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('complete', 'failed'),
            allowNull: false
        },

    }, {
        timestamps: false,
        underscored: true
    });

    transaction.associate = function(models) {
        models.order.hasMany(transaction, { foreignKey: { allowNull: false }} );            // Not sure why this is one to many??? 
    };

    return transaction;
};