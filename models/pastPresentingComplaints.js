module.exports = (sequelize, DataTypes) => {
    const pastPresentingComplaints = sequelize.define("pastPresentingComplaints", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        history: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    return pastPresentingComplaints;
};