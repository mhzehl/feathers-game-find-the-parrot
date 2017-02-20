// src/services/game/game-model.js

'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tileSchema = new Schema({
  parrot: { type: String, required: false },
})

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  initials: { type: String, required: false },
  color: { type: String, required: false },
  name: { type: String, required: false },
});

const gameSchema = new Schema({
  title: { type: String, required: false },
  players: [ playerSchema ],
  tiles: [ tileSchema ],
  hostId: { type: Schema.Types.ObjectId, ref: 'user' },
  secondPlayerId: { type: Schema.Types.ObjectId, ref: 'user' },
  readyToStart: { type: Boolean, 'default': false },
  started: { type: Boolean, 'default': false },
  activeRound: { type: Schema.Types.ObjectId, ref: 'user' },
  winner: { type: Number, required: false },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
