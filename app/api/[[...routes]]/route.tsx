/** @jsxImportSource frog/jsx */

import { serveStatic } from "frog/serve-static";
import { createSystem } from "frog/ui";
import { devtools } from "frog/dev";
import { handle } from "frog/next";
import { Frog } from "frog";

const { Box, Heading, Text, Image, Spacer, Columns, Column, vars } =
  createSystem();

export const app = new Frog({ title: "Frog Frame", basePath: "/api" });

app.frame("/", (c) => {
  console.log("hello");
  return c.res({
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        Select your fruit!
      </div>
    ),
    intents: [],
  });
});

// const app = new Frog({
//   assetsPath: "/",
//   basePath: "/api",
//   title: "Frog",
//   verify: false,
//   imageOptions: {
//     fonts: [
//       {
//         name: "Londrina Solid",
//         weight: 400,
//         source: "google",
//       },
//       {
//         name: "Lora",
//         weight: 700,
//         style: "italic",
//         source: "google",
//       },
//     ],
//   },
// });

// app.frame("/test", (c) => {
//   console.log("hello");
//   return c.res({
//     image: "https://e7e8bf105142.ngrok.app/api/test",
//     intents: [],
//   });
// });

// app.image("/test", (c) => {
//   console.log("goodbye");
//   return c.res({
//     /* ... */
//     image: (
//       <Box>
//         <Text font={{ custom: "Londrina Solid" }} weight="400">
//           This font should be Nouns
//         </Text>
//         <Text font={{ custom: "Lora" }} weight="700">
//           This font should be Farcon
//         </Text>
//       </Box>
//     ),
//   });
// });

// devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
