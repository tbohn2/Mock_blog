const sequelize = require('../config/connection');
const { User, Post, Comments } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comments.bulkCreate(commentsData, {
    individualHooks: true,
    returning: true,
  });

  console.log(users);
  console.log(posts);
  console.log(comments);

  process.exit(0);
};

seedDatabase();
