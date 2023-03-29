const Event = require("../models/Event");

export const getEvent = async (eventId) => {
  const fetchedEvent = await Event.findOne({ _id: eventId });
  return fetchedEvent;
};

export const getAllEvents = async () => {
  const fetchedEvents = await Event.find({});
  return fetchedEvents;
};

export const createNewEvent = async (event) => {
  const newEvent = new Event(event);
  await newEvent.save();
  return newEvent;
};

export const deleteEvent = async (eventId) => {
  const delEvent = Event.deleteOne({ _id: eventId });
  return delEvent;
};

export const updateEvent = async (eventId, event) => {
  const updatedEvent = Event.updateOne(
    { _id: eventId },
    { upsert: true },
    { $set: event }
  );
  return updatedEvent;
};
