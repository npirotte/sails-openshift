/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'openshiftMongodbServer'
  },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/
  host: process.env.OPENSHIFT_NODEJS_IP,
  port: process.env.OPENSHIFT_NODEJS_PORT,

  session: {
    adapter: 'redis',
    host: process.env.OPENSHIFT_REDIS_DB_HOST,
    port: process.env.OPENSHIFT_REDIS_DB_PORT,
    pass: process.env.OPENSHIFT_REDIS_DB_PASSWORD,
    db: 'server',
    prefix: 'sessions'
  },

  sockets: {
    adapter: 'socket.io-redis',
    host: process.env.OPENSHIFT_REDIS_DB_HOST,
    port: process.env.OPENSHIFT_REDIS_DB_PORT,
    pass: process.env.OPENSHIFT_REDIS_DB_PASSWORD,
    db: 'server',
    prefix: 'sockets'
  },

  grunt: {
    _hookTimeout: 100000
  }

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }

};
