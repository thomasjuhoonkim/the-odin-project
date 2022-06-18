user = prompt("Who's there?");
if (user === "Admin") {
  password = prompt("Password?");
  if (password === "TheMaster") {
    console.log("Welcome!");
  } else if (password === "\n" || password === "") {
    console.log("Cancelled");
  } else {
    console.log("Wrong password");
  }
} else if (user === "\n") {
  console.log("Cancelled");
} else {
  console.log("I don't know you");
}
