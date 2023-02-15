const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Dipu Ahmed To Any Update Whatsapp 01312701392");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your link Her Without https://www. Ok ", (value) => {
  console.log(value);
  fs.writeFile(
    "link.js",
    `const offerLink = "vnd.youtube://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbkRxOHVpc2cwa3BFQXVieE5OMlpYTHRTS1RYZ3xBQ3Jtc0ttQy1EMXVvNHRGSGR0SEJscGhVNmh1ajNyRHF4OVRQYnhPXzljZFBZU0VaVC15X3hTNEN6SmU5RFMyM0JWS2pSYzFBYmhPdm5RQXFGbGdTZzV6OTZPZHg1aW91SWhXVFd3WFh3a1ZFYy11U1VLZUJrRQ&q=${value}&html_redirect=1";`,
    function (err) {
      console.log("Link set seccussful.");
 
      process.exit();
    }
  );
  //
  fs.writeFile("./st/link.js", `const offerLink = "${value}";`, function (err) {
    console.log("Link set seccussful.");
    process.exit();
  });
});
