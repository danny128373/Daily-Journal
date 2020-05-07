import API from "./data.js";

import listener from "./events.js";

listener.registerPostListener();

API.fetchJournalEntries();

listener.registerDeleteListener();

listener.registerRadioListenerHappy();
