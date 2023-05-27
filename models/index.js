const User = require('./User');
const Project = require('./Post');

User.hasMany(Posts, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
