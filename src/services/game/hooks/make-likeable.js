'use strict'

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((game) => {
        if (hook.params.user._id !== game.hostId) {

          if (hook.data.like === undefined) {
            throw new errors.Forbidden('You must be the host to do that.');
          }

          const action = hook.data.like ? '$addToSet' : '$pull';
          let data = {};
          data[action] = { likedBy: hook.params.user._id };
          hook.data = data;
        }
      })
  }
}
