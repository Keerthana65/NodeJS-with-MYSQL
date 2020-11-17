module.exports = (sequelize, DataTypes) => {
  const childDetails = sequelize.define("childDetails", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    forname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    school: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    carer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    familyCompositionSurname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    familyCompositionForname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    familyCompositionDateOfBirth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    childReleationship: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ethnicity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    generalPractitionerAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gpTelephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bloodGroup: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BMI: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gpName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BHTNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    yearBHTNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    carerContactNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    months: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return childDetails;
};