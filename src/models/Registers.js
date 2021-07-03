const { Model, DataTypes } = require('sequelize');

class Register extends Model {
    static init(sequelize) {
        super.init({
            contents: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasOne(models.User, { foreignKey: 'id', as: 'user' });
    }
}

module.exports = Register;