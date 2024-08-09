/** @jsxImportSource frog/jsx */

import { serveStatic } from "frog/serve-static";
import { createSystem } from "frog/ui";
import { devtools } from "frog/dev";
import { handle } from "frog/next";
import { Frog } from "frog";

const { Box, Text } = createSystem();

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  title: "Frog",
  imageOptions: {
    fonts: [
      {
        name: "Inter",
        weight: 400,
        source: "google",
      },
      {
        name: "Londrina Solid",
        weight: 400,
        source: "google",
      },
      // {
      //   name: "Lora",
      //   weight: 700,
      //   style: "italic",
      //   source: "google",
      // },
    ],
  },
});

app.frame("/", (c) => {
  return c.res({
    headers: {
      "Cache-Control": "max-age=0",
      "cache-control": "max-age=0",
    },
    image: "/img-test",
    intents: [],
  });
});

app.image("/img-test", (c) => {
  return c.res({
    imageOptions: {
      fonts: [
        {
          name: "Lora",
          weight: 700,
          style: "italic",
          source: "google",
        },
      ],
    },
    image: (
      <Box>
        <Text font={{ custom: "Londrina Solid" }} size="24" weight="400">
          This font should be Londrina.
        </Text>
        <Text font={{ custom: "Lora" }} size="24" weight="700" style="italic">
          This font should be Lora but doesn't load properly.
        </Text>
        <Text font={{ custom: "Inter" }} size="24" weight="400">
          This font should be Inter.
        </Text>
      </Box>
    ),
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
