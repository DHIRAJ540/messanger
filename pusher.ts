import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1523019",
  key: "04acc619ef7dab85fc54",
  secret: "b6290192099b9ac37b41",
  cluster: "ap2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("04acc619ef7dab85fc54", {
  cluster: "ap2",
  forceTLS: true,
});
