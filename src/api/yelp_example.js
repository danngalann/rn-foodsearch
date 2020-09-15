// Add API KEY and rename to yelp.js

import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer [API KEY]",
  },
});
