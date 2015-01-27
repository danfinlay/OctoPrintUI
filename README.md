# OctoPrintUI

A Javascript Library for building custom OctoPrint interfaces.

Right now just getting set up.  Building a mock OctoPrint API server in the /test folder so I can have integration tests running as I develop.

The old UI was way heavier than I think is neccessary.  It has jQuery, Knockout, Underscore, jQueryUI, jQueryMobile, Underscore, and more.

I've noticed most of the core logic is using Knockout for its model synchronization, so I might be able to just reuse those Knockout Model-View classes to synchronize with OctoPrint right away, and then just document the method for binding the interface to those view models.

Of course I'm also going to wrap it up into browserifyable modules, so it's packed up neatly, minified, and doesn't waste global namespace.  I think it should be possible to make something very lean that anyone with basic HTML and CSS can use to make whatever interface they'd like.

The OctoPrint API documentation is [currently online here](http://docs.octoprint.org/en/master/).

The main OctoPrint repository is [here](https://github.com/foosel/OctoPrint).
