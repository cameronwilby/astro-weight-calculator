$(document)
  .ready(function() {

    var planets = [
      [
        'Pluto', 0.06
      ],
      [
        'Neptune', 1.148
      ],
      [
        'Uranus', 0.917
      ],
      [
        'Saturn', 1.139
      ],
      [
        'Jupiter', 2.640
      ],
      [
        'Mars', 0.3895
      ],
      [
        'Moon', 0.1655
      ],
      [
        'Earth', 1
      ],
      [
        'Venus', 0.9032
      ],
      [
        'Mercury', 0.377
      ],
      ['Sun', 27.9]
    ];

    planets = planets.reverse();

    for (var i = 0; i < planets.length; i++) {
      $("#planetsDropdown").append("<option value='" + planets[i][1] + "'>" + planets[i][0] + "</option>");
    }

    $("#astroWeightForm")
      .submit(function(e) {
        e.preventDefault();

        var weight = $("#userWeight").val();
        var multiplier = $("#planetsDropdown").val();
        var planetName = $("#planetsDropdown option:selected").text();

        var weightOnPlanet = Math.round((weight * multiplier) * 100);

        weightOnPlanet = weightOnPlanet / 100;

        $("#output").html('<strong>If</strong> you were on ' + planetName + ', you would weigh ' + weightOnPlanet + 'lbs');

        return false;
      });

  });
