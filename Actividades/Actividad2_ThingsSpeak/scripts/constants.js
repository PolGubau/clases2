const API_KEY_READ = "WNINQHWETFWU00BF";
const API_KEY_WRITE = "1PLGNBXR566MRRPI";

const API = {
	READ: `https://api.thingspeak.com/channels/2959181/feeds.json?api_key=${API_KEY_READ}`,
	WRITE: `https://api.thingspeak.com/update?api_key=${API_KEY_WRITE}`,
};
