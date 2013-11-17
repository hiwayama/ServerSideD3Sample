exports.viz = function(req, res){
  var d3 = require("d3");

  var width = 960,
      height = 500;

  var color = d3.scale.category20();

  var force = d3.layout.force()
      .charge(-120)
      .linkDistance(300)
      .gravity(1.0)
      .size([width, height]);

  var svg = d3.select("body").append("svg")
      .attr({
        "width": width, 
        "height": height
      });

  var graph = require('./../sample.json')

  force.nodes(graph.nodes).links(graph.links).start();

  var link = svg.selectAll(".link")
                .data(graph.links)
                .enter().append("line")
                .attr("class", "link")
                .style("stroke-width", function(d) { 
                  return Math.sqrt(d.value); 
                });

  var node = svg.selectAll(".node")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .style("fill", function(d) { return color(d.group); })
      .call(force.drag);

    node.append("title")
        .text(function(d) { return d.name; });

    force.on("end", function() {
      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });

      console.log(svg); 
      res.locals.svg = svg.html();
      res.render('graph');
    });
}
