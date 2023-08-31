const newman = require("newman");

newman.run(
  {
    collection:'https://api.postman.com/collections/29168453-ea2420c9-06a5-4ac1-ba17-05d00ec2111e?access_key=PMAT-01H959STW9CPVNN5V9EAA6A8PV', // pointing to local JSON file.

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
