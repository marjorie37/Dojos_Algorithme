const express = require("express");
const axios = require("axios");
const _ = require("lodash");
const pdf = require("html-pdf");
const options = { format: "Letter" };
const nodemailer = require("nodemailer");
const app = express();

/* GET home page. */

app.get("/", (req, res) => {
  axios
    .get("https://randomuser.me/api/?results=500&gender=female&nat=fr")
    .then(response => {
      const femmes = response.data.results;
      // console.log(response.data.results);
      const groups = _.groupBy(femmes, element => element.location.city);
      //console.log(groups);
      // grouper par ville les femmes
      const statOne = {};
      for (let key in groups) {
        // console.log(key); // ville
        // console.log(groups[key]); // tableaux
        statOne[key] = groups[key].length; // nombre de femmes
      }
      console.log(statOne);

      // /**
      //  * Generation of HTML
      //  */

      // /**
      //  * Generation of PDF since HTML and Options
      //  */

      res.send(`L'email est bien partis ! Check That !`);
    });
});

app.listen(3001, () => {
  console.log("Example app listening on port 3000!");
});
