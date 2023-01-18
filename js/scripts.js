
      function generate() {
        var action = prompt("Was hast du getan?");
        var level = Math.floor(Math.random() * 3) + 1;
        var output;

        if (level === 1) {
          output = "Haram Stufe Grün";
        } else if (level === 2) {
          output = "Haram Stufe Gelb";
        } else {
          output = "Haram Stufe Rot";
        }

        document.getElementById("result").innerHTML = "Du sagst, dass du " + action + " hast und das ist " + output;
      }
