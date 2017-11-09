[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

# Furkot Tripshot Widget

Embed [Furkot] tripshot on your website and show off your trip.

## Installation

  Install with [npm]:

```sh
$ npm install --save tripshot
```

  Load with a standalone script:

```html
<script src="https://cdn.furkot.com/scripts/furkot-tripshot.min.js" defer></script>
```

## Usage

  Upon loading, the script modifies the tripshot widget according to the specified options. The guide to integration options is [here][help].

  When used with a module bundling framework like [browserify]:

```javascript
var furkotTripshot = require('tripshot');
```

  When loaded as a standalone, the script instantiates the global variable `furkotTripshot`.

## License

MIT © [Natalia Kowalczyk](https://furkot.com)

[browserify]: http://browserify.org/
[Furkot]: https://trips.furkot.com
[help]: https://help.furkot.com/widgets/embed.html
[npm]: https://www.npmjs.com/

[npm-image]: https://img.shields.io/npm/v/tripshot.svg
[npm-url]: https://npmjs.org/package/tripshot

[travis-url]: https://travis-ci.org/furkot/tripshot
[travis-image]: https://img.shields.io/travis/furkot/tripshot.svg

[gemnasium-image]: https://img.shields.io/gemnasium/furkot/tripshot.svg
[gemnasium-url]: https://gemnasium.com/furkot/tripshot
