'use strict';

module.exports = (sequelize, DataTypes) => {

    const address = sequelize.define('address', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_2: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },       
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // phone: {                                         // Why is this here? Phone numbers are associated with customers, not addresses
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
        // instructions: {                                     // Like 'leave on porch' for shipping
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }

    }, {
        timestamps: false,
        underscored: true
    });

    address.associate = function(models) {
        // models.customer.hasOne(address);                 This limits one address per customer, they may have several shipping addresses and a different billing address
    };

    return address;
};