export class MessageEvent {
    /**
     * Constructs a new MessageEvent.
     * @param {string} type - The type of the event (e.g., "message").
     * @param {Object} eventInitDict - Initialization object containing event data.
     */
    constructor(type, eventInitDict = {}) {
      this.type = type; // Event type (e.g., "message").
      this.data = eventInitDict.data || null; // The data sent with the message.
      this.origin = eventInitDict.origin || ""; // Origin of the message.
      this.lastEventId = eventInitDict.lastEventId || ""; // ID of the last event.
      this.ports = eventInitDict.ports || []; // Associated MessagePort objects.
      this.timestamp = Date.now(); // Timestamp of the event creation.
    }
  }
  