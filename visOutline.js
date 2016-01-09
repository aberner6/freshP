
$(document).ready(function() {

// var toggle = 0;

// $(".box-shadow-menu").on("click", function() {
  
//   if (toggle) {
//     $(".box-shadow-menu").css("font-size", "36px");
//     toggle = 0;
//   } else {
//     $(".box-shadow-menu").css("font-size", "16px");
//     toggle = 1;
//   }
  
// });

var cwidth=200,cheight=200,cmargin=25,maxr=5;

var m = [15, 20, 40, 120], //top right bottom left
    w = window.innerWidth-cmargin,
    h = window.innerHeight;

var svg = d3.select("#container").append("svg").attr("width",w).attr("height",h);

var menu = d3.select(".menu").append("svg").attr("width",30).attr("height",30);
menu.append("rect")
	.attr("class", "rectLine")
	.attr("width",25)
	.attr("height",25)
	.attr("x", 0)
	.attr("y", 0)
	.attr("fill","white")
menu.selectAll(".menuLine")
	.data(d3.range(4))
	.enter()
	.append("line")
	.attr("class","menuLine")
	.attr("x1",4)
	.attr("x2",21)
	.attr("y1",function(d,i){
		return 5+5*i;
	})
	.attr("y2",function(d,i){
		return 5+5*i;
	})
	.attr("stroke","grey")
	.attr("stroke-width",.25);
menu.on("click", function(){
	console.log("clicked");
	// d3.select(".menu").attr("transform", "translate("+(-14)+",0)")

	d3.selectAll(".menuLine")
		.transition()
		// .attr("transform", "translate("+(-14)+",0)")
      .attr("x1",function(d,i){
		return 5+5*i;
	})
      .attr("x2",function(d,i){
		return 5+5*i;
	})
      .attr("y1",4).attr("y2",21)
})













var frontArd = svg.append("g").attr("class","frontArd")
	.attr("width",w/4)
	.attr("height",h/4);



frontArd.append("line")
	.attr("x2",w/2-cmargin)
	.attr("y2",h/2)
	.attr("x1", cmargin)
	.attr("y1", cmargin)
	.attr("stroke","grey")
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

frontArd.append("line")
	.attr("x2",w/2-cmargin)
	.attr("y2",h/2)
	.attr("x1", cmargin)
	.attr("y1", cmargin)
	.attr("stroke","grey")



















//end document opening
})