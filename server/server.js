const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const useRouter = require("./routes/doctors.js");
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let whitelist = ["http://localhost:5173" /** other domains if any */];
let corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// app.use(cors());
app.use(cors(corsOptions));

dotenv.config();

useRouter(app);

const PORT = process.env.PORT || 8000;
// const HOST = "192.168.0.103";
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

// function requireAdmin(req, res, next) {
//   if (req.body && req.body.isAdmin) {
//     next();
//   } else {
//     res.redirect('/');
//   }
// }

// app.get('/admin', requireAdmin, (req, res) => {
//   if (!req.patient || !req.patient.isAdmin) {
//     return res.redirect('/');
//   }

//   // Render the admin page
// });

mongoose.set("strictQuery", true);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/doctors`);
      console.log("connect");
    });
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
    process.exit();
  });
