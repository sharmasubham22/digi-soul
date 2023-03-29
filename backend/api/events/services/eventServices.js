const Event = require("../models/Event");

const getEvent = (eventId) => {
  return Event.findById(eventId);
};

const getAllEvents = async () => {
  return Event.find({});
};

const createNewEvent = async (event) => {
  const newEvent = new Event(event);
  await newEvent.save();
  return newEvent;
};

const deleteEvent = async (eventId) => {
  const delEvent = Event.deleteOne({ _id: eventId });
  return delEvent;
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
