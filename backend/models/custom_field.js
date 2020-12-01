'use strict';

module.exports = (sequelize, DataTypes) => {

    const custom_field = sequelize.define('custom_field', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        timestamps: false,
        underscored: true
    });

    custom_field.associate = function(models) {

    };

    return custom_field;
};