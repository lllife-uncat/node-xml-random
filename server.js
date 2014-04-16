// Node module.
var fs = require("fs");
var _ = require("lodash");

// Test read.
// BOM from windows file is utf16le.
function testFile() {
  var input = "./sample/LET_NB_D001-UW_004.xml";
  fs.readFile(input, "utf16le", function(err, data) {
    parser.parseString(data, function(err, result){  });
  });
}

// Xml generator.
// @function start(number)
function Generator() {
  this.start = function (number) {
    var models = require("./model/mds");
    var xml2js = require("xml2js");
    var parser = xml2js.Parser();
    var builder = new xml2js.Builder({
      rootName: "outbound"
    });

    var randomService = new require("./service/random");
    var random = new randomService.Random();

    var outbound = new models.Outbound();
    var range = Array.apply(null, Array(number)).map(function(_,i) { return i; } );
    console.log(number);
    console.log(range);

    range.forEach(function(i){
      var item= new models.Item();
      var record = new models.Record();

      random.randomRecord(record);
      random.randomItem(item);

      item.addRecord(record);
      outbound.addItem(item);
      outbound.batch.ids.elixirid.push(item.elixirid);
    });


    var xml = builder.buildObject(outbound);
    return xml;
  }
}

// Web service manager.
// @function start(port)
function WS() {
  this.start = function(port) {

    var express = require("express");
    var http = require("http");
    var app = express();
    var bodyParser = require("body-parser");
    var logger = require("morgan");
    var methodOverride = require("method-override");

    app.use(bodyParser());
    app.use(logger());
    app.use(methodOverride());

    http.createServer(app).listen(port, function(){
      console.log("find me ;) @" + port);
    });

    app.get("/api/xml/:number", function(req, res){
      var number = parseInt(req.params.number);
      var gen = new Generator();
      var xml = gen.start(number);

      res.header("Content-Type", "text/xml");
      res.send(xml);
    });
  };
}

var ws = new WS();
ws.start(8881);
