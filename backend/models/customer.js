'use strict';

module.exports = (sequelize, DataTypes) => {

    const customer = sequelize.define('customer', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },       
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        accepts_marketing: {
            type: DataTypes.BOOLEAN
        }
 
    }, {
        timestamps: false,
        underscored: true
    });

    customer.associate = function(models) {

    };

    return customer;
};