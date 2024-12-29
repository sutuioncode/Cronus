export class Event {
    /**
     * Constructs a new Event.
     * @param {string} type - The type of the event (e.g., "click", "message").
     * @param {Object} [eventInitDict={}] - Initialization object for the event.
     */
    constructor(type, eventInitDict = {}) {
      if (!type) {
        throw new TypeError("Failed to construct 'Event': An event name must be provided.");
      }
  
      this.type = type;
      this.bubbles = eventInitDict.bubbles || false; // Indicates whether the event bubbles up through the DOM.
      this.cancelable = eventInitDict.cancelable || false; // Indicates whether the event can be canceled.
      this.defaultPrevented = false; // Tracks whether `preventDefault` was called.
      this.timestamp = Date.now(); // Event creation timestamp.
  
      // Read-only properties
      Object.defineProperty(this, "isTrusted", {
        value: false, // Always false for manually created events.
        writable: false,
      });
    }
  
    /**
     * Prevents the default action associated with the event.
     */
    preventDefault() {
      if (this.cancelable) {
        this.defaultPrevented = true;
      }
    }
  
    /**
     * Stops the propagation of the event.
     * (This is a placeholder in the polyfill, as there's no DOM in React Native.)
     */
    stopPropagation() {
      // No DOM hierarchy, so this is a no-op.
    }
  
    /**
     * Stops the propagation of the event immediately.
     * (This is also a placeholder in this polyfill.)
     */
    stopImmediatePropagation() {
      // No DOM hierarchy, so this is a no-op.
    }
  }
  
