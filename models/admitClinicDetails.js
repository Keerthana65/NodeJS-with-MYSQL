module.exports = (sequelize, DataTypes) => {
    const admitClinicDetails = sequelize.define("admitClinicDetails", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        admitDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        admissionType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        discharge: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dischargeDate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        noOfAdmit: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        BHTNO: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        BHTYEAR: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        transferInDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        place: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    return admitClinicDetails;
};