/**
 * An module for defining and initializing the LoginRecordDailyCount model.
 * Exporting the LoginRecordDailyCount model definition, schema and model instance.
 * @module {Object} loginRecordDailyCount:model
 * @property {Object} definition - The [definition object]{@link loginRecordDailyCount:model~LoginRecordDailyCountDefinition}
 * @property {MongooseSchema} schema - The [mongoose model schema]{@link loginRecordDailyCount:model~LoginRecordDailyCountSchema}
 * @property {MongooseModel} model - The [mongoose model]{@link loginRecordDailyCount:model~LoginRecordDailyCount}
 */
'use strict';

var mongoose = require('mongoose');
var requestContext = require('mongoose-request-context');
var createdModifiedPlugin = require('mongoose-createdmodified').createdModifiedPlugin;

/**
 * The LoginRecordDailyCount model definition
 * @type {Object}
 * @property {String} name - The name of this loginRecordDailyCount
 * @property {String} info - Details about this loginRecordDailyCount
 * @property {Boolean} active - Flag indicating this loginRecordDailyCount is active
 */
var LoginRecordDailyCountDefinition = {
  clientId: String,
  count: Number,
  ownerId: String,
  day: String
};

/**
 * The LoginRecordDailyCount model schema
 * @type {MongooseSchema}
 */
var LoginRecordDailyCountSchema = new mongoose.Schema(LoginRecordDailyCountDefinition);

/**
 * Attach security related plugins
 */
LoginRecordDailyCountSchema.plugin(createdModifiedPlugin);

LoginRecordDailyCountSchema.plugin(requestContext, {
  propertyName: 'modifiedBy',
  contextPath: 'request:acl.user.name'
});

/**
 * Validations
 */
// LoginRecordDailyCountSchema
//   .path('name')
//   .validate(validateUniqueName, 'The specified name is already in use.');

/**
 *  The registered mongoose model instance of the LoginRecordDailyCount model
 *  @type {LoginRecordDailyCount}
 */
var LoginRecordDailyCount;
if (mongoose.models.LoginRecordDailyCount) {
  LoginRecordDailyCount = mongoose.model('LoginRecordDailyCount');
} else {
  LoginRecordDailyCount = mongoose.model('LoginRecordDailyCount', LoginRecordDailyCountSchema, 'login_records');
}

module.exports = {

  /**
   * The LoginRecordDailyCount model definition object
   * @type {Object}
   * @see loginRecordDailyCount:LoginRecordDailyCountModel~LoginRecordDailyCountDefinition
   */
  definition: LoginRecordDailyCountDefinition,

  /**
   * The LoginRecordDailyCount model schema
   * @type {MongooseSchema}
   * @see loginRecordDailyCount:model~LoginRecordDailyCountSchema
   */
  schema: LoginRecordDailyCountSchema,

  /**
   * The LoginRecordDailyCount model instance
   * @type {loginRecordDailyCount:model~LoginRecordDailyCount}
   */
  model: LoginRecordDailyCount

};

/**
 * Validate the uniqueness of the given name
 *
 * @api private
 * @param {String} value - The username to check for uniqueness
 * @param {Function} respond - The callback function
 */
// function validateUniqueName(value, respond) {
//   // jshint validthis: true
//   var self = this;

//   // check for uniqueness of user name
//   this.constructor.findOne({
//     name: value
//   }, function (err, loginRecordDailyCount) {
//     if (err) {
//       throw err;
//     }

//     if (loginRecordDailyCount) {
//       // the searched name is my name or a duplicate
//       return respond(self.id === loginRecordDailyCount.id);
//     }

//     respond(true);
//   });
// }