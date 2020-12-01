'use strict';

module.exports = (sequelize, DataTypes) => {

    const option = sequelize.define('option', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('listbox', 'dropdown', 'button list'),
            allowNull: false
        },
        sort_order: {
            type: DataTypes.INTEGER
        }
 
    }, {
        timestamps: false,
        underscored: true
    });

    option.associate = function(models) {
        models.product.hasMany(option);
    };

    return option;
};