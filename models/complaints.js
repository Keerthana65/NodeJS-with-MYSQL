module.exports = (sequelize, DataTypes) => {
    const complaints = sequelize.define("complaints", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        complaintsName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });
    return complaints;
};