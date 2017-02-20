'use strict'

module.exports = function(options) {
  return function assignHost(hook) {
    // The authenticated user
    const user = hook.params.user;
    hook.data.hostId = user._id;
    hook.data.players = user._id;
  }
}
