'use strict';

module.exports = (sequelize, DataTypes) => {

    const variant_option_value = sequelize.define('variant_option_value', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false
        }

    }, {
        timestamps: false,
        underscored: true
    });

    variant_option_value.associate = function(models) {
        models.variant.hasMany(variant_option_value);
        models.option_value.hasMany(variant_option_value);              // not sure this is correct. option_values only have one variant
    };

    return variant_option_value;
};