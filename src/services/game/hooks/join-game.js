'use strict'

module.exports = function(options) {
  return function joinGame(hook) {
    console.log(hook.id, hook.data, hook.params.user);
    return hook.app.service('games').get(hook.id)
      .then((game) => {
        if (game.hostId !== hook.params.user._id) {
          console.log('Is not host, can only join');
          const action = '$push';
          let data = {};
          data[action] = { players: hook.params.user._id };
          hook.data = data;
          console.log(hook.data);
        }
      })
  }
}
