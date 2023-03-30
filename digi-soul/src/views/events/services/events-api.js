import { httpClient } from "../../../lib/httpClient";

const getAllEvents = () => {
  return httpClient.get("/events");
};

const getEvent = (eventId) => {
  return httpClient.get(`/events/event/${eventId}`);
};

const createEvent = (event) => {
  return httpClient.post("/events", { event });
};

const removeEvent = (eventId) => {
  return httpClient.delete(`/events/event/${eventId}`);
};

const updateEvent = (eventId, event) => {
  return httpClient.put(`/events/event/${eventId}`, { event });
};

export const eventsApi = {
    getAllEvents,
    getEvent,
    updateEvent,
    removeEvent,
    createEvent
}