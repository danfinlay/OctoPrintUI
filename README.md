# OctoPrintUI

![Star Trek Style Control Pad](https://cloud.githubusercontent.com/assets/542863/5887033/631e8d74-a370-11e4-9328-3475c39097bf.gif)

A Javascript Library for building custom OctoPrint interfaces.

Originally concenived to allow me to make the above interface functional on small touchscreen attached to an OctoPi, giving me access to a subset of the most important features and controls that I want on my printer, first represented by the above picture in [this thread](https://github.com/foosel/OctoPrint/issues/12).

The old UI was way heavier than I think is neccessary.  It has jQuery, Knockout, Underscore, jQueryUI, jQueryMobile, Underscore, [and more](https://github.com/foosel/OctoPrint/tree/master/src/octoprint/static/js/lib]).  I knew there was a lighter weight, more flexible way.

I saw they have a [nicely documented API](http://docs.octoprint.org/en/master/), so my initial idea was to just build a client-side API interacting module, start with just the info/functions I cared about most, and make it easy for people to add theirs to it.

Before I went far down that road, I saw that the previous [application](https://github.com/foosel/OctoPrint/tree/master/src/octoprint/static/js/app) had already isolated most of its API-interacting code in the form of [Knockout](http://knockoutjs.com/) model classes.

Since I had just been talking to @lkang about how much he's enjoyed Knockout, I knew this meant consumers of this library would be able to build their interfaces using nothing but `HTML` and `CSS`, since the way Knockout watches and updates `DOM` elements is entirely by adding classes to valid HTML tags.  This was starting to look like a great way to approach building 3D printer interfaces.

## Reorganization

The previous codebase did not run well on weaker hardware (like the Raspberry Pi at the time, the Raspi2 had not come out yet).  One of the reasons for this is that the browser was making something like 30 HTTP requests to the server to load all of these individual assets, so one of my first priorities when cleaning up the codebase was to concatenate all of the files.

My first approach (and the one you see here) was a pretty highly destructive branch, wherein I was reorganizing the project to use [Browserify](http://browserify.org/) for its module isolation, concatenation, minification, and dependency management.

I'm now thinking concatenation goal could probably also be achieved (without the namespace isolation or dependency management) simply using [Broccoli](https://github.com/broccolijs/broccoli) to concatenate the file trees.

Just visiting again now, I almost want to just start testing and documenting the existing API, and see if it might already update DOM elements with the right classes!  [Premature optimization](http://c2.com/cgi/wiki?PrematureOptimization), right?


## Tasks To Do

 [ ] Experiment to see if the current Octoprint UI scripts, when imported, don't already automatically update things with the desired html classes.  If this is done, just import all of their scripts, and use the same class names as them, and you might be able to do everything already.

## Nice to haves

 [ ] Building a mock OctoPrint API server in the /test folder so I can have integration tests running as I develop.

The main OctoPrint repository is [here](https://github.com/foosel/OctoPrint).
