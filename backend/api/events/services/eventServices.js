const { eventNames } = require("../models/Event");
const Event = require("../models/Event");

const getEvent = (eventId) => {
  return Event.findById(eventId);
};

const getAllEvents = () => {
  return Event.find({});
};

const createNewEvent = async (event) => {
  const newEvent = new Event(event);
  return newEvent.save();
};

const deleteEvent = (eventId) => {
  return Event.deleteOne({ _id: eventId });
};

const updateEvent = (eventId, event) => {
  return Event.updateOne({ _id: eventId }, event);
};

module.exports = {
  getEvent,
  getAllEvents,
  createNewEvent,
  updateEvent,
  deleteEvent,
};
