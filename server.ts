import { app } from "./app";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import { connectDb } from "./utils/db";
import { v2 as cloudnary} from 'cloudinary'


// cloudnary config
cloudnary.config({
  cloud_name:process.env.CLOUDNARY_NAME,
  api_key:process.env.CLOUDNARY_API_KEY,
  api_secret:process.env.CLOUDNARY_SECRET_KEY
});

// create server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is connected with port ${process.env.PORT || 8000}`);
  connectDb();
});
