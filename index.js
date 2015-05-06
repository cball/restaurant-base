/* jshint node: true */
'use strict';

module.exports = {
  name: 'restaurant-base',

  included: function(app) {
    // console.log(this.project.config(app.env));
    this._super.included(app);
  }
};
