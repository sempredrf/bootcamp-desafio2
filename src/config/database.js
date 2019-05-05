module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: '5433',
  username: 'docker',
  password: 'docker',
  database: 'gobarber',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
  timezone: 'America/Sao_Paulo',
  dialectOptions: {
    useUTC: false, // for reading from database
    dateStrings: true,
    typeCast: true,
    timezone: 'America/Sao_Paulo'
  }
}
