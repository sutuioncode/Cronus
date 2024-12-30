export class EventTarget {
    constructor() {
      this.listeners = {};
    }
  
    /**
     * Adds an event listener for a specific event type.
     * @param {string} type - The event type to listen for.
     * @param {Function} callback - The function to call when the event is dispatched.
     */
    addEventListener(type, callback) {
      if (typeof callback !== "function") {
        throw new TypeError("Event listener must be a function.");
      }
  
      if (!this.listeners[type]) {
        this.listeners[type] = [];
      }
      this.listeners[type].push(callback);
    }
  
    /**
     * Removes an event listener for a specific event type.
     * @param {string} type - The event type to stop listening for.
     * @param {Function} callback - The function to remove.
     */
    removeEventListener(type, callback) {
      if (!this.listeners[type]) return;
  
      this.listeners[type] = this.listeners[type].filter((listener) => listener !== callback);
    }
  
    /**
     * Dispatches an event of a specific type to all registered listeners.
     * @param {Event} event - The event object to dispatch.
     * @returns {boolean} - Indicates whether the event was canceled by any listener.
     */
    dispatchEvent(event) {
      if (!event || typeof event.type !== "string") {
        throw new TypeError("Event object must have a type property.");
      }
  
      const listeners = this.listeners[event.type] || [];
      for (const listener of listeners) {
        listener.call(this, event);
      }
  
      return !event.defaultPrevented;
    }
  }
  