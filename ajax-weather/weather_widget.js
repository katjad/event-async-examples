var WeatherWidget =
{
  init: function()
  {
    var weatherWidget = document.getElementById("weatherWidget");
    var anchors = weatherWidget.getElementsByTagName("a");

    for (var i = 0; i < anchors.length; i++)
    {
      Core.addEventListener(anchors[i], "click", WeatherWidget.clickListener);
    }
  },
  clickListener: function(event)
  {
    try
    {
      var requester = new XMLHttpRequest();
    }
    catch (error)
    {
      var requester = null;
    }

    if (requester != null)
    {
      var widgetLink = this;
      widgetLink._timer = setTimeout(function()
          {
            requester.abort();
          
            WeatherWidget.writeError("The server timed out while making your request.");
          }, 10000);
      
      var city = this.firstChild.nodeValue;

      requester.open("GET", "ajax_weather.php?city=" + encodeURIComponent(city), true);
      requester.onreadystatechange = function()
      {
        if (requester.readyState == 4)
        {
          clearTimeout(widgetLink._timer);
          
          if (requester.status == 200 || requester.status == 304)
          {
            WeatherWidget.writeUpdate(requester.response);
          }
          else
          {
            WeatherWidget.writeError("The server was unable to be contacted.");
          }
        }
      };
      requester.send(null);
      
      Core.preventDefault(event);
    }
  },
  writeUpdate: function(response)
  {
    var city = JSON.parse(response).city;
    var name = city.name;
    var temperature = city.temperature;
    var description = city.description;
    var descriptionClass = city.description_class;


    var weatherWidget = document.getElementById("weatherWidget");
    while (weatherWidget.hasChildNodes())
    {
      weatherWidget.removeChild(weatherWidget.firstChild);
    }
    
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(name + " Weather"));
    weatherWidget.appendChild(h2);
    
    var div = document.createElement("div");
    div.setAttribute("id", "forecast");
    div.className = descriptionClass;
    weatherWidget.appendChild(div);
    
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", "temperature");
    paragraph.appendChild(document.createTextNode(temperature + "\u00B0C"));
    div.appendChild(paragraph);
    
    var paragraph2 = document.createElement("p");
    paragraph2.appendChild(document.createTextNode(description));
    div.appendChild(paragraph2);
  },
  writeError: function(errorMsg)
  {
    alert(errorMsg);
  }

};

Core.start(WeatherWidget);