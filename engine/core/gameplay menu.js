var newDiv = document.createElement("div");
var newButton = document.createElement("button");
//newButton.SetAttribute("id", "attack");
newButton.id = "attack";
var buttonName = document.createTextNode("Attack");
newButton.disable = "false";
newButton.appendChild(buttonName);
newDiv.appendChild(newButton);

var newButtonPick1 = document.createElement("button");
newButtonPick1.disable = "false";
newButtonPick1.id = "1enemy";
var buttonPick1name = document.createTextNode("1 enemy");
var newButtonPick2 = document.createElement("button");
newButtonPick2.disable = "false";
newButtonPick2.id = "2enemy";
var buttonPick2name = document.createTextNode("2 enemy");
var newButtonPick3 = document.createElement("button");
newButtonPick3.disable = "false";
newButtonPick3.id = "3enemy";
var buttonPick3name = document.createTextNode("3 enemy");
newButtonPick1.appendChild(buttonPick1name);
newButtonPick2.appendChild(buttonPick2name);
newButtonPick3.appendChild(buttonPick3name);
newDiv.appendChild(newButtonPick1);
newDiv.appendChild(newButtonPick2);
newDiv.appendChild(newButtonPick3);

document.body.appendChild(newDiv);