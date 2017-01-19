googleMaps.js - An optimized Google Maps javascript library
=========================================================

googleMaps.js allows you to use the potential of Google Maps in a simple way. No more extensive documentation or large amount of code.

Quick Start
-----

1. Add a reference to Google Maps API
2. Add googleMaps.js in your HTML
3. Enjoy!

```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script src="http://maps.google.com/maps/api/js"></script>
  <script src="googleMaps.js"></script>
  <style type="text/css">
    #map {
      width: 400px;
      height: 400px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    var map = new googleMaps({
      el: '#map',
      lat: -12.043333,
      lng: -77.028333
    });
  </script>
</body>
</html>
```

Use with AMD
-----

With require.js, you need to load Google Maps JavaScript API first. For example, assuming you have a `googlemapsapi.js` file:

```javascript
define(['async!http://maps.google.com/maps/api/js?v=3&sensor=false'], function() {});
```

Next you have to define the dependency for googleMaps.js:

```javascript
require.config({
  paths: {
    "googlemapsapi": "googlemapsapi",
  },
  shim: {
    googleMaps: {
      deps: ["googlemapsapi"],
      exports: "googleMaps"
    }
  }
});
```

Build
------

If you would like to build googleMaps from source run the following at the terminal:

```sh
git clone https://github.com/mehulmakwana97/googleMaps.git
cd googleMaps
npm install
grunt
```

License
---------
MIT License. Copyright 2014 Gustavo Leon. http://github.com/mehulmakwana97

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions of
the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
