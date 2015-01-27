var LoginStateViewModel = require('./viewmodels/loginstate'),
    loginStateViewModel = new LoginStateViewModel(),

    ConnectionViewModel = require('./viewmodels/connection'),
    connectionViewModel = new ConnectionViewModel(),

    PrinterStateViewModel = require('./viewmodels/printerstate'),
    printerStateViewModel = new PrinterStateViewModel,

    TemperatureViewModel = require('./viewmodels/printerstate'),
    TemperatureViewModel = new TemperatureViewModel(),

    ControlViewModel = require('./viewmodels/control'),
    controlViewModel = new ControlViewModel(),

    TerminalViewModel = require('./viewmodels/terminal'),
    terminalViewModel = new TerminalViewModel(),

    GcodeFilesViewModel = require('./viewmodels/files'),
    gcodeFilesViewModel = new GcodeFilesViewModel(),

    TimelapseViewModel = require('./viewmodels/timelapse'),
    timelapseViewModel = new TimelapseViewModel(),

    GcodeViewModel = require('./viewmodels/gcode'),
    gcodeViewModel = new GcodeViewModel(),

    LogViewModel = require('./viewmodels/log'),
    logViewModel = new LogViewModel();

var dataUpdater = new DataUpdater(
                  loginStateViewModel,
                  connectionViewModel,
                  printerStateViewModel,
                  temperatureViewModel,
                  controlViewModel,
                  terminalViewModel,
                  gcodeFilesViewModel,
                  timelapseViewModel,
                  gcodeViewModel,
                  logViewModel);

// work around a stupid iOS6 bug where ajax requests get cached and only work once, as described at
// http://stackoverflow.com/questions/12506897/is-safari-on-ios-6-caching-ajax-results
$.ajaxSetup({
    type: 'POST',
    headers: { "cache-control": "no-cache" }
});


