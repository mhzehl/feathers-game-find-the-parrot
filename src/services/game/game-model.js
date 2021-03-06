// src/services/game/game-model.js

'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tileSchema = new Schema({
  parrots: { type: Number, required: false },
})

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  initials: { type: String, required: false },
  color: { type: String, required: false },
  name: { type: String, required: false },
});

const gameSchema = new Schema({
  title: { type: String, required: false },
  players: [ Schema.Types.ObjectId ],
  tiles: [ tileSchema ],
  parrots: [],
  scorePlayerHost: { type: Number, 'default': 0},
  scorePlayerGuest: { type: Number, 'default': 0},
  hostId: { type: Schema.Types.ObjectId, ref: 'user' },
  secondPlayerId: { type: Schema.Types.ObjectId, ref: 'user' },
  playerHostreadyToStart: { type: Boolean, 'default': false },
  playerGuestreadyToStart: { type: Boolean, 'default': false },
  started: { type: Boolean, 'default': false },
  activeRound: { type: Schema.Types.ObjectId, ref: 'user' },
  winner: { type: Number, required: false },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
