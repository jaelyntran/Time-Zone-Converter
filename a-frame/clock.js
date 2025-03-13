AFRAME.registerComponent("clock", {
  schema: {
  },

  init: function () {
    //Create a new element, set 
    this.titleEl = document.createElement("a-text");
    this.titleEl.setAttribute("position", { x: 1.3, y: -0.7, z: 0 });
    this.titleEl.setAttribute("color", "#00ff00");
    this.titleEl.setAttribute("font", "sourcecodepro");
    this.titleEl.setAttribute("value", "Informatics World Clock");
    this.el.appendChild(this.titleEl);

    this.currentTimeEl = document.createElement("a-text");
    this.currentTimeEl.setAttribute("position", { x: 1.695, y: -1, z: 0 });
    this.currentTimeEl.setAttribute("color", "#ffffff");
    this.currentTimeEl.setAttribute("font", "sourcecodepro");
    this.el.appendChild(this.currentTimeEl);

    this.hawaiiTimeEl = document.createElement("a-text");
    this.hawaiiTimeEl.setAttribute("position", { x: 0.75, y: -1.5, z: 0 });
    this.hawaiiTimeEl.setAttribute("color", "#00ff00");
    this.hawaiiTimeEl.setAttribute("font", "sourcecodepro");
    this.el.appendChild(this.hawaiiTimeEl);

    this.vietnamTimeEl = document.createElement("a-text");
    this.vietnamTimeEl.setAttribute("position", { x: 2.4, y: -1.5, z: 0 });
    this.vietnamTimeEl.setAttribute("color", "#00ff00");
    this.vietnamTimeEl.setAttribute("font", "sourcecodepro");
    this.el.appendChild(this.vietnamTimeEl);

    this.icelandTimeEl = document.createElement("a-text");
    this.icelandTimeEl.setAttribute("position", { x: 3.95, y: -1.5, z: 0 });
    this.icelandTimeEl.setAttribute("color", "#00ff00");
    this.icelandTimeEl.setAttribute("font", "sourcecodepro");
    this.el.appendChild(this.icelandTimeEl);

    this.hawaiiLabelEl = document.createElement("a-text");
    this.hawaiiLabelEl.setAttribute("position", { x: 0.76, y: -1.8, z: 0 });
    this.hawaiiLabelEl.setAttribute("color", "#00ff00");
    this.hawaiiLabelEl.setAttribute("font", "sourcecodepro");
    this.hawaiiLabelEl.setAttribute("value", "Hawaii");
    this.el.appendChild(this.hawaiiLabelEl);

    this.vietnamLabelEl = document.createElement("a-text");
    this.vietnamLabelEl.setAttribute("position", { x: 2.35, y: -1.8, z: 0 });
    this.vietnamLabelEl.setAttribute("color", "#00ff00");
    this.vietnamLabelEl.setAttribute("font", "sourcecodepro");
    this.vietnamLabelEl.setAttribute("value", "Vietnam");
    this.el.appendChild(this.vietnamLabelEl);

    this.icelandLabelEl = document.createElement("a-text");
    this.icelandLabelEl.setAttribute("position", { x: 3.955, y: -1.8, z: 0 });
    this.icelandLabelEl.setAttribute("color", "#00ff00");
    this.icelandLabelEl.setAttribute("font", "sourcecodepro");
    this.icelandLabelEl.setAttribute("value", "Iceland");
    this.el.appendChild(this.icelandLabelEl);

    this.updateTime();
  },

  tick: function () {
    this.updateTime();
  },

  updateTime: function () {
    var now = spacetime.now();
    this.currentTimeEl.setAttribute("value", displayTime(now) + " local time");
    this.hawaiiTimeEl.setAttribute("value", displayTime(convertTimeZone(now, "Hawaii")));
    this.vietnamTimeEl.setAttribute("value", displayTime(convertTimeZone(now, "Vietnam")));
    this.icelandTimeEl.setAttribute("value", displayTime(convertTimeZone(now, "Iceland")));
  }
});

function convertUserTime() {
  let userInput = document.getElementById("user-time").value;
  let selectedZone = document.getElementById("timezone-select").value;

  if (!userInput) {
    document.getElementById("converted-time").innerText = "Please enter a valid time!";
    return;
  }

  let userTime = getTime(userInput);
  let convertedTime = convertTimeZone(userTime, selectedZone);

  if (convertedTime) {
    document.getElementById("converted-time").innerText = `${userInput} in local time`
                                                                  + ` is ${displayTime(convertedTime)} in ${selectedZone}`;
  } else {
    document.getElementById("converted-time").innerText = "Invalid time zone selected.";
  }
}

var now = spacetime.now();

console.log("It is currently " + displayTime(now) + " locally");
console.log(
  "It is currently " +
    displayTime(convertTimeZone(now, "London")) +
    " in London"
);
console.log(
  "2:42pm in local time is " +
    displayTime(convertTimeZone(getTime("2:42pm"), "Hawaii")) +
    " in Hawaii"
);
