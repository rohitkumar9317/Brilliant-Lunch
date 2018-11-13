function matchLunchEvent(arr) {
  let flag = false;
  const hours = arr.map(el => {
    let startPos = el.start / 60;
    let endPos = el.end / 60;
    let obj = {};
    return (obj = {
      startPos,
      endPos
    });
  });

  let me = true;
  const newArr1 = hours.map(elem => {
    let section = document.getElementById("main");
    let eventDiv = document.createElement("DIV");
    if (me) {
      let text = document.createTextNode("Me");
      eventDiv.appendChild(text);
      me = false;
    } else {
      let text = document.createTextNode("Brilliant Lunch");
      eventDiv.appendChild(text);
    }

    eventDiv.classList.add("event");
    let transVal = 65 * elem.startPos;
    eventDiv.style.transform = `translateY(${transVal}px)`;
    section.appendChild(eventDiv);
    return transVal;
  });
  const times = [];
  for (var i = 1; i < newArr1.length; i++) {
    times.push(Math.abs(newArr1[i] - newArr1[0]));
  }
  for (let i = 1; i < hours.length; i++) {
    console.log(hours[0].startPos - hours[i].startPos);
    if (Math.abs(hours[0].startPos - hours[i].startPos) > 0.5) {
      console.log("hii", i);
      if (i === hours.length - 1 && flag === false) {
        let allDivs = Array.from(document.getElementsByTagName("div"));
        allDivs.forEach(div => {
          if (div.textContent === "Me") {
            div.style.borderLeft = "2px solid black";
          }
        });
        return "Nikki does not have companion today";
      }
    } else {
      flag = true;
    }
  }
  for (let i = 0; i < times.length; i++) {
    if (times[i] === Math.min(...times)) {
      console.log("Nikki is going to have lunch with:");
      console.log(hours[i + 1]);
      return arr[i + 1];
    }
  }
}

console.log(
  matchLunchEvent([
    { start: 225, end: 285 },
    { start: 210, end: 270 },
    { start: 180, end: 240 },
    { start: 240, end: 300 },
    { start: 300, end: 360 },
    { start: 270, end: 330 }
  ])
);
