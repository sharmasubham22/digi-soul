const express = require("express");
const EventService = require("../services/eventServices");

const router = express.Router();

/**
 * @author Amanjot Singh
 * @description Get all events
 * @params request, response
 * @return events
 */
// router.get("/", async (req, res) => {
//   try {
//     const events = await EventService.getAllEvents();
//     if (events.length > 0) {
//       res.status(200).json({
//         message: "Users retrieved",
//         success: true,
//         events: events,
//       });
//     } else {
//       res.status(404).json({
//         message: "No event found",
//         success: false,
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: err.message || "Internal server error.",
//       success: false,
//     });
//   }
// });

router.get("/", (req, res) => {
  EventService.getAllEvents()
    .then((events) => {
      if (events.length > 0) {
        res.status(200).json({
          message: "Events retrieved",
          success: true,
          users: events,
        });
      } else {
        res.status(404).json({
          message: "No event found",
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        success: false,
      });
    });
});

/**
 * @author Amanjot Singh
 * @description Get event with given id
 * @params request, response
 * @return event
 */
// router.get("/event/:eventId", async (req, res) => {
//   try {
//     const eventIdString = req.params.eventId;
//     if (!eventIdString) {
//       return res.json({
//         success: false,
//         message: "Required parameters are missing",
//         data: "eventId",
//       });
//     }
//     // TODO: handle object id conversion
//     const eventId = eventIdString;
//     const event = EventService.getEvent(eventId);
//     if (event) {
//       return res.status(200).json({
//         success: true,
//         message: "Event fetched",
//         event: event,
//       });
//     } else {
//       return res.status(404).json({
//         success: false,
//         message: "Event with given id not found",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: err.message || "Internal server error.",
//       success: false,
//     });
//   }
// });

router.get("/event/:eventId", (req, res) => {
  EventService.getEvent(req.params.eventId)
    .then((event) => {
      if (event) {
        return res.status(200).json({
          success: true,
          message: "Event fetched",
          event: event,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Event with given id not found",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    });
});

/**
 * @author Amanjot Singh
 * @description Delete event with given id
 * @params request, response
 * @return result
 */
// router.delete("/event/:eventId", async (req, res) => {
//   try {
//     const eventIdString = req.params.eventId;
//     if (!eventIdString) {
//       return res.json({
//         success: false,
//         message: "Required parameters are missing",
//         data: "eventId",
//       });
//     }
//     // TODO: handle object id conversion
//     const eventId = eventIdString;
//     const deletionResult = await EventService.deleteEvent(eventId);
//     if (deletionResult && deletionResult.deletedCount !== 0) {
//       return res.status(200).json({
//         message: "Event deleted",
//         success: true,
//         event: eventId,
//       });
//     } else {
//       return res.status(404).json({
//         message: "Event with given id not found",
//         success: false,
//         event: eventId,
//       });
//     }
//   } catch (err) {
//     return res.status(500).json({
//       message: "Internal server error. Unable to delete the event.",
//       success: false,
//     });
//   }
// });

router.delete("/event/:eventId", (req, res) => {
  EventService.deleteEvent(req.params.eventId)
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        res.status(200).json({
          message: "Event deleted",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "Event not found",
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        success: false,
      });
    });
});

/**
 * @author Amanjot Singh
 * @description Update event with given id
 * @params request, response
 * @return result
 */
router.put("/event/:eventId", async (req, res) => {
  try {
    const eventIdString = req.params.eventId;
    if (!eventIdString) {
      return res.json({
        success: false,
        message: "Required parameters are missing",
        data: "eventId",
      });
    }
    // TODO: handle object id conversion
    const eventId = eventIdString;
    const event = req.body.event;
    if (!event) {
      return res.json({
        success: false,
        message: "Required parameters are missing",
        data: "event",
      });
    }
    const updatedResult = await EventService.updateEvent(eventId, event);
    if (updatedResult.matchedCount) {
      res.status(200).json({
        message: "Event updated",
        success: true,
      });
    } else {
      res.status(404).json({
        message: "Event not found",
        success: false,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error. Unable to delete the event.",
      success: false,
    });
  }
});

/**
 * @author Amanjot Singh
 * @description Create a new event
 * @params request, response
 * @return event
 */
// router.post("/", async (req, res) => {
//   try {
//     const event = req.body;
//     if (!event) {
//       return res.json({
//         success: false,
//         message: "Required parameters are missing",
//         data: "event",
//       });
//     }
//     const createdEvent = await EventService.createNewEvent(event);
//     if (createdEvent) {
//       res.status(200).json({
//         message: "Event created",
//         success: true,
//         event: event,
//       });
//     } else {
//       res.status(200).json({
//         message: "Unable to create event",
//         success: false,
//       });
//     }
//   } catch (err) {
//     return res.status(500).json({
//       message: "Internal server error. Unable to create event.",
//       success: false,
//     });
//   }
// });

router.post("/", (req, res) => {
  const event = req.body;
  if (event) {
    EventService.createNewEvent(event)
      .then((newEvent) => {
        res.status(200).json({
          message: "Event added",
          success: true,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
          success: false,
        });
      });
  } else {
    res.status(500).json({
      message: "Invalid Input - Unable to add user",
      success: false,
    });
  }
});

module.exports = router;
