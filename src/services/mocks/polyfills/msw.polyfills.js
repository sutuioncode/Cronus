// msw.polyfills.js
import 'fast-text-encoding';
import { polyfillGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions";
import { ReadableStream, TransformStream } from "web-streams-polyfill";
import { MessageEvent } from './message-event';
import { Event } from './event';
import { EventTarget } from './event-target';


polyfillGlobal("EventTarget", () => EventTarget);
polyfillGlobal("Event", () => Event);
polyfillGlobal("MessageEvent", () => MessageEvent);
polyfillGlobal("ReadableStream", () => ReadableStream);
polyfillGlobal("TransformStream", () => TransformStream);
polyfillGlobal("TextDecoder", () => TextEncoder);
