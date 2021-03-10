module.exports = function(sequelize, dataTypes) {
    let alias = "Nota";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        texto: {
            type: dataTypes.TEXT
        }
    }
    let config = {
        tableName: 'notas',
        timestamps: false,
        underscored: true,
        paranoid: true
    }

    const Nota = sequelize.define(alias, cols, config);
    return Nota;
}