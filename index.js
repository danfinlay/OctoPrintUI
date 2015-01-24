var inherits = require('inherits');

function OctoPrintUI (options) {

	var defaults = {

	};

	this.opts = inherits( options, defaults );

}

window.OctoPrintUI = OctoPrintUI;
