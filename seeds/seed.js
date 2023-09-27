const sequelize = require('../config/connection');
const { Guest } = require('../models');

const guestData = require('./guestData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Guest.bulkCreate(guestData);

  process.exit(0);
};

seedDatabase();