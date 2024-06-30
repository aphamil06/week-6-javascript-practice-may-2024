let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  playerOne.age = prompt("How old are you?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.

  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}? would you like to play with other ${playerOne.age} year olds?`;
}

part1.onclick = day1Part1;

function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  customer.birth = prompt("What is your birthday?");

  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.

  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address} and your date of birth is ${customer.birth}.`;
}
part2.onclick = day1Part2;

function day1Part3() {
  let pet;
  pet = {};
  pet.name = prompt("What is the name of your pet?");
  pet.gender = prompt("What is the Gender of your pet?");
  pet.owner = prompt("Who is the owner of the pet");
  pet.species = prompt("What type/species of pet do you have?");

  // Try it!
  // TODO: create a prompt to ask about a pet

  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `Dear ${pet.owner}, i'm writing to notify you that ${pet.name} has a ${pet.gender} ${pet.species} appointment comming up soon.  Please reach out if you have any questions or concerns.`;
}
part3.onclick = day1Part3;

// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  let clientOne;
  clientOne = {}
  clientOne.name = prompt("What is your name?");
  clientOne.age = prompt("How old are you?");
  clientOne.sessionCount = prompt("How many sessions have you had with us so far")

  alert("Please read below");
  messageParagraph.innerHTML = `Dear ${clientOne.name}, we're delighted to have you here for your ${clientOne.sessionCount} session with us.  We hope you enjoy your ${clientOne.age} birthday session.`
}

part4.onclick = day1Part4;
