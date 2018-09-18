const ncp = require('ncp').ncp;
const fs = require('fs-extra');
const _ = require('lodash');


module.exports = function (sails) {
  return {
    initialize: function (cb) {
      let assetDest;
      let assetOrigin;
      ncp.limit = 16;
      const tmpAssetLocation = '.tmp/public/';
      else {
        assetOrigin = 'node_modules/sails-hook-eresearch-customisations/assets';
        assetDest = './assets';
      }
      console.log('Copying Institutional build asset customisations');
      ncp(assetOrigin, assetDest, function (err) {
        if (err) {
          return console.error(err);
        }
        ncp(assetOrigin, tmpAssetLocation, function (err) {
          if (err) {
            return console.error(err);
          }
          return cb();
        });
      });
    },
    //If each route middleware do not exist sails.lift will fail during hook.load()
    routes: {
      before: {},
      after: {
      }
    },
    configure: function () {
    }
  }
};
