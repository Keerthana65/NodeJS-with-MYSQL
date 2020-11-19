module.exports = (sequelize, DataTypes) => {
    const generalConditions = sequelize.define("generalConditions", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        generalCondition: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        temp: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pulse: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        resp: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        doctorInFormed: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });
    return generalConditions;
};