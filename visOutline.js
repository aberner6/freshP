
$(document).ready(function() {

var cwidth=200,cheight=200,cmargin=25,maxr=5;

var m = [15, 20, 40, 120], //top right bottom left
    w = window.innerWidth-12,
    h = window.innerHeight;

var svg = d3.select("#container").append("svg").attr("width",w).attr("height",h);

var menu = d3.select(".menu").append("svg").attr("width",50).attr("height",50);
menu.append("rect")
	.attr("class", "rectLine")
	.attr("width",25)
	.attr("height",25)
	.attr("x", 20)
	.attr("y", 15)
	.attr("fill","lightgrey")
menu.selectAll(".menuLine")
	.data(d3.range(4))
	.enter()
	.append("line")
	.attr("class","menuLine")
	.attr("x1",22)
	.attr("x2",43)
	.attr("y1",function(d,i){
		return 19+5*i;
	})
	.attr("y2",function(d,i){
		return 19+5*i;
	})
	.attr("stroke","white")
	.attr("stroke-width",1);
var toggle = 0;
menu.on("click", function(){
  if (toggle) {
	d3.selectAll(".menuLine")
		.transition()
		.attr("x1",22)
		.attr("x2",43)
		.attr("y1",function(d,i){
			return 19+5*i;
		})
		.attr("y2",function(d,i){
			return 19+5*i;
		})
    toggle = 0;
  } else {
	d3.selectAll(".menuLine")
		.transition()
	    .attr("x1",function(d,i){
			return 24+5.5*i;
		})
	    .attr("x2",function(d,i){
			return 24+5.5*i;
		})
	    .attr("y1",18).attr("y2",35)
	    showMenu();
    toggle = 1;
  }
})

function showMenu(){
	svg.append("rect")
		.attr("class","listRect")
		.attr("width",cmargin*5)
		.attr("height",h/3)
		.attr("x", w-cmargin*5)
		.attr("y", 0)
		.attr("fill","white")
		.attr("stroke","#dce0e0")
}











var frontArd = svg.append("g").attr("class","frontArd")
	.attr("width",w/4)
	.attr("height",h/4);


var lineColor = "white";

frontArd.append("line")
	.attr("x2",w/2-cmargin)
	.attr("y2",h/2)
	.attr("x1", cmargin)
	.attr("y1", cmargin)
	.attr("stroke",lineColor)
frontArd.append("rect")
	.attr("width",w/2-cmargin)
	.attr("height",h/2)
	.attr("x", cmargin)
	.attr("y", cmargin)
	.attr("fill","grey")

frontArd.append("line")
	.attr("x2",w/2-cmargin)
	.attr("y2",h/2)
	.attr("x1", cmargin)
	.attr("y1", cmargin)
	.attr("stroke",lineColor)

frontArd.append("line")
	.attr("x2",w/2-cmargin)
	.attr("y2",h/2)
	.attr("x1", cmargin)
	.attr("y1", cmargin)
	.attr("stroke",lineColor)



















//end document opening
})