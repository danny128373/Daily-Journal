import API from "./data.js";
import listener from "./events.js";

API.fetchJournalEntries();
listener.registerPostListener();
listener.registerDeleteListener();
listener.registerRadioListenerHappy();
listener.registerRadioListenerSad();
listener.registerRadioListenerTired();
listener.registerEditListener();
