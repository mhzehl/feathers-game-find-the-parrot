// 'use strict'
//
// module.exports = function(options) {
//   return function(hook) {
//     // The authenticated user
//     const user = hook.params.user;
//     const name = user.name
//
//     // Get User Initials to Display in Avatar (put in hooks)
//     getInitials() {
//       const initials = name.match(/\b\w/g) || [];
//
//       initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
//       alert(initials);
//     }
//
//     hook.data.initials = user.name;
//   }
// }
