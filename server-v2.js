const fs = require("fs");

// async version
const path = __dirname + "/reports.txt";

// fs.readFile(path, (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log(data.toString());
// });

const someMessage = "some text";
// fs.writeFile(path, someMessage, "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log(data.toString());
// });

// fs.appendFile(path, someMessage, (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log("success");
// });

// fs.unlink(path, (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("success");
// });

// fs.rename("reports.txt", "allReports.txt", (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   } else {
//     console.log("file renamed.");
//   }
// });
