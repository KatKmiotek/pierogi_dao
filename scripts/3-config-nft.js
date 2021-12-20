import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x3A9B1CD8461183210356Ca71C94d81Ee2e8Af626",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "pierogi ruskie",
        description: "This NFT will give you access to pierogiDAO!",
        image: readFileSync("scripts/assets/ruskie.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()