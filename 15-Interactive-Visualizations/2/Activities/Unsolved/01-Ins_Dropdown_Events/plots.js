
function init() {
    var data = [{
        values: [19, 26, 55],
        labels: ['Pandora', 'Spotify', 'Shazaam'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
  var PIE = document.getElementById("plot");
  Plotly.plot(PIE, data, layout);
}

function updatePlotly(newValues, newLabels) {
  var PIE = document.getElementById("plot");

  // Note the extra brackets around 'newx' and 'newy'
  Plotly.restyle(PIE, "value", [newValues]);
  Plotly.restyle(PIE, "label", [newLabels]);
}

function getData(data) {

  // Initialize empty arrays to contain our axes
  var values = [];
  var labels = [];

  // Fill the x and y arrays as a function of the selected dataset
  switch (data) {
      case "USA":
          values = [30,30,40];
          labels = ['Pandora', 'Spotify', 'Shazaam'];
          break;
      case "UK":
          values = [10, 40, 50];
          labels = ['Pandora', 'Spotify', 'Shazaam'];
          break;
      case "Australia":
          values = [100, 0,0];
          labels = ['Pandora', 'Spotify', 'Shazaam'];
          break;
      default:
          values = [19, 26, 55];
          labels = ['Pandora', 'Spotify', 'Shazaam'];
          break;
      }

  updatePlotly(data);
}

init();
