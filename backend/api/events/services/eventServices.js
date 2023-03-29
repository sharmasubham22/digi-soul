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
  await newEvent.save();
  return newEvent;
};

const deleteEvent = (eventId) => {
  return Event.deleteOne({ _id: eventId });
};

const updateEvent = async (eventId, event) => {
  const updatedEvent = Event.updateOne(
    { _id: eventId },
    { upsert: true },
    { $set: event }
  );
  return updatedEvent;
};

module.exports = {
  getEvent,
  getAllEvents,
  createNewEvent,
  updateEvent,
  deleteEvent,
};
