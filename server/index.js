import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import statusRoutes from "./routes/status.js";
import prisonerRoutes from "./routes/prisoner.js";
import situationRoutes from "./routes/situation.js";

import connectDB from "./config/database.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

// data imports
import User from "./models/user.js";
import Medicine from "./models/Medicine.js";
import Food from "./models/Food.js";
import Staff from "./models/Staff.js";
import Situation from "./models/Situation.js";
import Jails from "./models/Jails.js";
import Jailing from "./models/Jailing.js";
import Category from "./models/Category.js";
import Psychologist from "./models/Psychologist.js";


import {
  dataUser,
  //dataFood, dataMedicine, dataStaff, /*dataJail,*/ /*dataJailing,*/ /*dataJails,*/ /*dataCategory,*/ /*dataPsychologist*/ /*dataSituation*/
} from "./data/index.js";

/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cors());


//Passport config
import passportFunction from './config/passport.js';
// console.log("🚀 ~ file: index.js:43 ~ passportFunction:", passportFunction)

passportFunction(passport)
// console.log("🚀 ~ file: index.js:43 ~ a:")


//Allow requests from frontend
app.use(
    cors({
      origin: process.env.FRONT_END,
      credentials: true,
    })
  );

connectDB();

app.use(cookieParser("keyboard cat"))

// Sessions
app.use(
    session({
      secret: "keyboard cat",
      resave: true,
      saveUninitialized: true,
      proxy: true,
      cookie: {
        sameSite: process.env.ENV == "production" ? 'none' : 'lax',
        secure: process.env.ENV == "production" ? true : ""
      },
      store: new MongoStore({ mongooseConnection: mongoose.connection,
        mongoUrl: process.env.MONGO_URL 
      }),
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());



/*Routes*/
app.use("/status", statusRoutes);
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/prisoner", prisonerRoutes);
app.use("/situation", situationRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);

    //Medicine.insertMany(dataMedicine);

    //Food.insertMany(dataFood);

    //Inventory.insertMany(dataInventory);

    //Staff.insertMany(dataStaff);

    //Jail.insertMany(dataJail);

    //Jailing.insertMany(dataJailing);

    //Category.insertMany(dataCategory);

    //Psychologist.insertMany(dataPsychologist);

    //Jails.insertMany(dataJails);

    //Situation.insertMany(dataSituation);

    // Loop through each user record and use save method so that it triggers the password hashing process. Now, hashed password is saved for each user

    /*dataUser.forEach((user) => {
      let currentUser = new User(user);
      currentUser.save();
    });*/
  })
  .catch((error) => console.log(`${error} did not connect`));
