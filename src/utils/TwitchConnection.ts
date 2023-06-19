import tmi from "tmi.js";

export const TwitchConnection = (channel: string, onConnect: () => void) => {
  const client = new tmi.Client({
    options: { debug: true },
    channels: [channel],
  });

  client.connect();

  client.on("connected", onConnect);

  client.on("message", (channel, tags, message) => {
    if (message.toLowerCase() === "!test") {
      console.log(message);
    }
  });
};
