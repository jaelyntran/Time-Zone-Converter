AFRAME.registerComponent("clock", {
  schema: {},

  init: function () {
    this.titleEl = document.createElement("a-text");
    this.titleEl.setAttribute("position", { x: 1.3, y: -1.05, z: 0 });
    this.titleEl.setAttribute("color", "#00ff00");
    this.titleEl.setAttribute("font", "sourcecodepro");
    this.titleEl.setAttribute("value", "Informatics World Clock");
    this.el.appendChild(this.titleEl);

    this.currentTimeEl = document.createElement("a-text");
    this.currentTimeEl.setAttribute("position", { x: 1.5, y: -1.35, z: 0 });
    this.currentTimeEl.setAttribute("color", "#ffffff");
    this.currentTimeEl.setAttribute("font", "sourcecodepro");
    this.el.appendChild(this.currentTimeEl);

    this.updateTime();
  },

  tick: function () {
    this.updateTime();
  },

  updateTime: function () {
    var now = spacetime.now();
    this.currentTimeEl.setAttribute("value", `Current Time: ${displayTime(now)}`);
  }
});


AFRAME.registerComponent('timezone-converter', {
  init: function () {
    this.timeZoneEl = document.createElement("a-text");
    this.timeZoneEl.setAttribute("position", {x: 1.15, y: -0.95, z: 0});
    this.timeZoneEl.setAttribute("color", "#00ff00");
    this.timeZoneEl.setAttribute("font", "sourcecodepro");
    this.timeZoneEl.setAttribute("value", "Select Timezone to Convert");
    this.el.appendChild(this.timeZoneEl);
  },
});

window.onload = function() {
  function clearPreviousResults() {
    const scene = document.querySelector('a-scene');
    const previousResults = scene.querySelectorAll('.result-text');
    previousResults.forEach(result => {
      result.parentElement.removeChild(result);
    });
  }

  document.querySelector('#hawaiiButton').addEventListener('click', function () {
    console.log("hawaii");
    clearPreviousResults();
    var now = spacetime.now();
    var convertedTime = convertTimeZone(now, "Hawaii");
    console.log(displayTime(convertedTime));

    if (convertedTime) {
      var result = document.createElement("a-text");
      result.setAttribute("position", {x: -2, y: 0.85, z: -1.75});
      result.setAttribute("color", "#00ff00");
      result.setAttribute("font", "sourcecodepro");
      result.setAttribute(
          "value",
          `It's currently ${displayTime(convertedTime)} in Hawaii`
      );
      result.classList.add('result-text');
      document.querySelector("a-scene").appendChild(result);
    }
  })

  document.querySelector('#vietnamButton').addEventListener('click', function () {
    console.log("vietnam");
    clearPreviousResults();
    var now = spacetime.now();
    var convertedTime = convertTimeZone(now, "Vietnam");
    console.log(displayTime(convertedTime));

    if (convertedTime) {
      var result = document.createElement("a-text");
      result.setAttribute("position", {x: -2, y: 0.85, z: -1.75});
      result.setAttribute("color", "#00ff00");
      result.setAttribute("font", "sourcecodepro");
      result.setAttribute(
          "value",
          `It's currently ${displayTime(convertedTime)} in Vietnam`
      );
      result.classList.add('result-text');
      document.querySelector("a-scene").appendChild(result);
    }
  })

  document.querySelector('#australiaButton').addEventListener('click', function () {
    console.log("australia");
    clearPreviousResults();
    var now = spacetime.now();
    var convertedTime = convertTimeZone(now, "Australia");
    console.log(displayTime(convertedTime));

    if (convertedTime) {
      var result = document.createElement("a-text");
      result.setAttribute("position", {x: -2, y: 0.85, z: -1.75});
      result.setAttribute("color", "#00ff00");
      result.setAttribute("font", "sourcecodepro");
      result.setAttribute(
          "value",
          `It's currently ${displayTime(convertedTime)} in Australia`
      );
      result.classList.add('result-text');
      document.querySelector("a-scene").appendChild(result);
    }
  })
};