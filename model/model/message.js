module.exports = (sequelize, DataTypes) => {
    var message = sequelize.define('message', {
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT
        }
    });

		message.associate = function(models) {
			message.belongsToMany(models.account, {through: models.collection, foreignKey: 'messageId'});
			message.belongsToMany(models.tag, {through: models.articleTag, foreignKey: 'messageId'});
		}

    return message;
}