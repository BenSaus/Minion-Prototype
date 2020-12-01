'use strict';

module.exports = (sequelize, DataTypes) => {

    const option_value = sequelize.define('option_value', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sort_order: {
            type: DataTypes.INTEGER
        },
        is_default: {
            type: DataTypes.BOOLEAN,
        }
 
    }, {
        timestamps: false,
        underscored: true
    });

    option_value.associate = function(models) {
        models.option.hasMany(option_value);
    };

    return option_value;
};