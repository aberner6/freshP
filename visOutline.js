var cwidth=200,cheight=200,cmargin=25,maxr=5;

var m = [15, 20, 40, 120], //top right bottom left
    w = window.innerWidth-cmargin,
    h = window.innerHeight;

var svg = d3.select("#container").append("svg").attr("width",w).attr("height",h);

var frontArd = svg.append("g").attr("class","frontArd")
	.attr("width",w/4)
	.attr("height",h/4);

frontArd.append("rect")
	.attr("width",w/2-cmargin)
	.attr("height",h/2)
	.attr("x", cmargin)
	.attr("y", cmargin)
	.attr("fill","white")

frontArd.append("line")
	.attr("x2",w/2-cmargin)
	.attr("y2",h/2)
	.attr("x1", cmargin)
	.attr("y1", cmargin)
	.attr("stroke","grey")