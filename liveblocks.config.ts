 // Define Liveblocks types for your application
 // https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data
 declare global {
   interface Liveblocks {
     // Each user's Presence, for useMyPresence, useOthers, etc.
     Presence: {
       // Example, real-time cursor coordinates
       cursor: { x: number; y: number };
     };
// The Storage tree for the room, for useMutation, useStorage, etc.
     Storage: {
       // Example, a conflict-free list
       // animals: LiveList<string>;
     };

     // Custom user info set when authenticating with a secret key
    UserMeta: {
      id?: string;
       info?: {
         // Example properties, for useSelf, useUser, useOthers, etc.
         name?: string;
         picture?: string;
       };
     };

     // Custom events, for useBroadcastEvent, useEventListener
   RoomEvent: {};
       // Example has two events, using a union
      // | { type: "PLAY" } 
       // | { type: "REACTION"; emoji: "🔥" };

     // Custom metadata set on threads, for useThreads, useCreateThread, etc.
     ThreadMetadata: {
       // Example, attaching coordinates to a thread
       // x: number;
       // y: number;
     };

     // Custom room info set with resolveRoomsInfo, for useRoomInfo
     RoomInfo: {
       // Example, rooms with a title and url
       // title: string;       // url: string;
     };   }
}

 export {};











// import {
//   createClient,
//   LiveList,
//   LiveMap,
//   LiveObject,
// } from "@liveblocks/client";
// import { createRoomContext } from "@liveblocks/react";
// // import type { Layer, Color } from "@/types/canvas";

// const client = createClient({
//   authEndpoint: "/api/liveblocks-auth",
//   throttle: 16,
// });

// // Presence represents the properties that exist on every user in the Room
// // and that will automatically be kept in sync. Accessible through the
// // `user.presence` property. Must be JSON-serializable.
// type Presence = {
  
// };

// // Optionally, Storage represents the shared document that persists in the
// // Room, even after all users leave. Fields under Storage typically are
// // LiveList, LiveMap, LiveObject instances, for which updates are
// // automatically persisted and synced to all connected clients.
// type Storage = {
 
// };

// // Optionally, UserMeta represents static/readonly metadata on each user, as
// // provided by your own custom auth back end (if used). Useful for data that
// // will not change during a session, like a user's name or avatar.
// type UserMeta = {
 
// };

// // Optionally, the type of custom events broadcast and listened to in this
// // room. Use a union for multiple events. Must be JSON-serializable.
// type RoomEvent = {
//   // type: "NOTIFICATION",
//   // ...
// };

// // Optionally, when using Comments, ThreadMetadata represents metadata on
// // each thread. Can only contain booleans, strings, and numbers.
// export type ThreadMetadata = {
//   // resolved: boolean;
//   // quote: string;
//   // time: number;
// };

// export const {
  
// } = (
  
//   {
//     async resolveUsers({  }) {
//       // Used only for Comments. Return a list of user information retrieved
//       // from `userIds`. This info is used in comments, mentions etc.

//       // const usersData = await __fetchUsersFromDB__(userIds);
//       //
//       // return usersData.map((userData) => ({
//       //   name: userData.name,
//       //   avatar: userData.avatar.src,
//       // }));

//       return [];
//     },
//     async resolveMentionSuggestions({  }) {
//       // Used only for Comments. Return a list of userIds that match `text`.
//       // These userIds are used to create a mention list when typing in the
//       // composer.
//       //
//       // For example when you type "@jo", `text` will be `"jo"`, and
//       // you should to return an array with John and Joanna's userIds:
//       // ["john@example.com", "joanna@example.com"]

//       // const userIds = await __fetchAllUserIdsFromDB__(roomId);
//       //
//       // Return all userIds if no `text`
//       // if (!text) {
//       //   return userIds;
//       // }
//       //
//       // Otherwise, filter userIds for the search `text` and return
//       // return userIds.filter((userId) =>
//       //   userId.toLowerCase().includes(text.toLowerCase())
//       // );

//       return [];
//     },
//   }
// );