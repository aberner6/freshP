
var data;
var types = ["hand","ide","particle","face"];
var handData = [];
var moduleTypes = ["B","CC","BM","M","L"];
var interactionTypes = ["inputs","outputs","programming","games"];
var uniqueNames;
var theseNames = [];

var uniqueHards;
var uniqueSofts;
var hardNames = [];
var softNames = [];

var toggling = true;

// var links;
var newguy = [];
var onlyalpha = [];
var links = [];
var nodes = {};
var newData = [];
var newguy2 = [];
var links2 = [];
var nodes2 = {};

var cwidth=200,cheight=200,cmargin=25,maxr=5;

var nested_data;
var m = [15, 20, 40, 120], //top right bottom left
    w = (window.innerWidth-cmargin)/2,
    h = window.innerHeight;
var goAhead;
var svg = d3.select("#container").append("svg").attr("width",w).attr("height",h)            
.attr("transform", "translate(" + 0 + "," + 0 + ")");

var svg2 = d3.select("#container").append("svg").attr("width",w).attr("height",h)
.attr("transform", "translate(" + 0 + "," + 0 + ")");

var nest_again;
var ideData;

var ide_nest, ide_nest2;
var open = [];
var close = [];
var letspush = [];
var letsadjust = [];
var arr = [];
var only1 = [];

var timeMin, timeMax;
var timeX = d3.scale.linear();
var maxtime = [];
var whatTime = [];	



var inputs = [];
var outputs = [];
var programming = [];
var games = [];
options=("BTN","POT","TMP","ACR","COL","ROT","LDR","LED","PEZ", "RGB","IF", "Interval", "Fade", "Swap", "Map","MAP","MAPTOHIGHER", "Counter", "Trigger","Note", "Random", "PONG", "SimonSays");
inputs.push("BTN","POT","TMP","ACR","COL","ROT","LDR")
outputs.push("LED","PEZ", "RGB")
programming.push("IF", "Interval", "Fade", "Swap", "Map","MAP","MAPTOHIGHER", "Counter", "Trigger")
games.push("Note", "Random", "PONG", "SimonSays")
var radiusMin = 5;
var spaceFactor = radiusMin;
var colorScale = d3.scale.ordinal()
    .domain(moduleTypes)
    .range(d3.scale.category20c().range());
var colorNet = d3.scale.ordinal()
    .domain(options)
    .range(d3.scale.category10().range());
var handColor = d3.scale.ordinal()
    // .domain()
    .range(d3.scale.category20c().range());

var yspace = radiusMin*2.5;
var y_i = h/1.7,
y_o = h/1.7+yspace,
y_p = h/1.7+yspace*2,
y_g = h/1.7+yspace*3;

var y = d3.scale.ordinal()
    .domain(interactionTypes)
    .rangePoints([h/2, (h/2)+yspace*3]);


//hands face stuff
var radSize = 3;
var summaryHands;
var summaryFace;
var minRX, maxRX, minRY, maxRY, minFX, minFY, maxFX, maxFY;
var rx = [];
var ry = [];
var xIs = [];
var yIs = [];
var x=d3.scale.linear().range([cmargin,cwidth-cmargin]);
var y=d3.scale.linear().range([cheight-cmargin,cmargin]);
var o=d3.scale.linear().domain([0,300000]).range([.5,1]);

var fx=d3.scale.linear().range([cmargin,cwidth-cmargin]);
var fy=d3.scale.linear().range([cheight-cmargin,cmargin]);

var rows = 2;
var endTime;
$(document).ready(function() {
	console.log("ready")
	// var token = "NJ5_977mmIdWcA6rLa2Ha3X9pcAYXs8PakpS_iBYWK64bSfe6BLy4NBTyp3CviFtkBcqH18E_gY8uDQLfN39HJbySYDw-3bYfLX0BGMh89sv-B7luIE91A6Af3K1lD91";
	// var  token = pelars_authenticate();
	// $.getJSON("http://pelars.sssup.it:8080/pelars/data/615/session?token="+token ,function(json){
			// console.log("ready")
// console.log(json);
// if(token){
	// $.getJSON( "http://pelars.sssup.it:8080/pelars/data/615/session?token="+token,function(json) { 
		// document.getElementById("id").innerHTML = JSON.stringify(json); 
queue()
	.defer(d3.json, "assets/data1.json")
	.defer(d3.json, "assets/data2.json")
	.await(ready);



function ready(error, data1, data2) {

// d3.json("assets/data.json", function(json) {
		data = (data1);
		// console.log(data2);
endTime = data[data.length-1].time;
		nested_data = d3.nest()
			.key(function(d) { return d.type; })
			.key(function(d){ return d.num; })
			.entries(data);


		data2 = (data2);
endTime2 = data2[data2.length-1].time;
		nested_data2 = d3.nest()
			.key(function(d) { return d.type; })
			.key(function(d){ return d.num; })
			.entries(data2);



		nested_face = d3.nest()
			.key(function(d) { return d.type; })
			.entries(data);
var rex = [];
var rey = [];
		nest_again = d3.nest()
			.key(function(d) { return d.type; })
			.key(function(d){ return d.num; })
			.rollup(function(leaves) { 
				return { 
						"max_time": d3.max(leaves, function(d) {
							return parseFloat(d.time);
						}),
						"min_time": d3.min(leaves, function(d) {
							return parseFloat(d.time);
						}),
						"meanX": d3.mean(leaves, function(d) {
							return parseFloat(d.rx);
						}),
						"meanY": d3.mean(leaves, function(d) {
							return parseFloat(d.ry);
						}),
						"deviationX": d3.variance(leaves, function(d){ 
							return parseFloat(d.rx) 
						}),
						"deviationY": d3.variance(leaves, function(d){ 
							return parseFloat(d.ry) 
						})
					} 
				})
			.entries(data)

		nest_again2 = d3.nest()
			.key(function(d) { return d.type; })
			.key(function(d){ return d.num; })
			.rollup(function(leaves) { 
				return { 
						"max_time": d3.max(leaves, function(d) {
							return parseFloat(d.time);
						}),
						"min_time": d3.min(leaves, function(d) {
							return parseFloat(d.time);
						}),
						"meanX": d3.mean(leaves, function(d) {
							return parseFloat(d.rx);
						}),
						"meanY": d3.mean(leaves, function(d) {
							return parseFloat(d.ry);
						}),
						"deviationX": d3.variance(leaves, function(d){ 
							return parseFloat(d.rx) 
						}),
						"deviationY": d3.variance(leaves, function(d){ 
							return parseFloat(d.ry) 
						})
					} 
				})
			.entries(data2)


		if (typeof nested_data !== "undefined"){
			for(i=0; i<nested_data.length; i++){
				if(nested_data[i].key&&nest_again[i].key==types[0]){
					console.log(nested_data[i].key)
					goHands(nested_data[i], nest_again[i].values);
				}
				if(nested_face[i].key&&nest_again[i].key==types[3]){
					console.log(nested_face[i].key)
					goFace(nested_face[i], nest_again[i].values);
				}
				if(nested_data[i].key&&nest_again[i].key=="ide"){
					console.log(nested_data[i].key)
					goIDE(nested_data[i].values, nest_again[i].values);
				}
				compress();
				// else{ console.log("nope")}
			}	
		}


		if (typeof nested_data2 !== "undefined"){
			for(i=0; i<nested_data2.length; i++){
				if(nested_data2[i].key&&nest_again2[i].key=="ide"){
					console.log(nested_data2[i].key)
					goIDE2(nested_data2[i].values);
				}
			}	
		}
	};


// var token = "tjoKrRSRFdq8Aw5I-_i7uvBjdCBbiNzHBMeaGl3k0UH4KE7zwzYSeogzqHg1-EQvIUH5Gdtx7Uc3IdMb30uR5AJYUS_yan4pHh1pFcQX2s7KGdnvSpCm9QJ91Ndsk4Ry";
// var token;
	// pelars_authenticate();

function pelars_authenticate(){
	var email = "d.paiva@ciid.dk";
	var pswd = "pelars123!";
	var jsres;
	var res = "";
	jQuery.ajax({
		timeout : 1000,
		type : "POST",
		url : "http://pelars.sssup.it:8080/pelars/password?user=" + email + "&pwd=" + pswd,
		async: false,
		success : function(jqXHR, status, result){
		jsres = JSON.parse(jqXHR);
		res = jsres["token"];
		},
		error : function(jqXHR, status) {
			res = 0; }
	});
	//document.getElementById("tag").innerHTML = res;
	return res;
}

//probably have to fix this
svg.on("click", function(){
	toggling = !toggling;
	console.log(toggling)
	if(!toggling){
		d3.selectAll(".hand")
			.transition()
			.attr("transform",function(d,i) {
		  		return "translate("+cmargin+",0)";
		  	});
		// d3.selectAll(".face")
		// 	.transition()
		// 	.attr("transform",function(d,i) {
		//   		return "translate("+cmargin+",0)";
		//   	});
		$(".rectText").hide();
		$(".faceText").hide();
	}
	if(toggling){
		d3.selectAll(".hand")
			.transition()
			.attr("transform",function(d,i) {
		  		return "translate("+cwidth*i+",0)";
		  	});
		// d3.selectAll(".face")
		// 	.transition()
		// 	.attr("transform",function(d,i) {
	 //  		return "translate("+(cwidth*i)+","+(cheight*rows)+")";
		//   	});
		$(".rectText").show();
		$(".faceText").show();
	}
})

function goIDE(incomingD, summary){
	ideData = incomingD[0].values;
	sumIDE = summary;
	console.log("in IDE");
    var patt1 = /[A-Z]/gi; 
	// console.log(ideData);
	for(i=0; i<ideData.length; i++){
		if(ideData[i].opt.match(patt1)!=null) {
		// if((ideData[i].opt.match(patt1).join().replace(/,/g, '')).toUpperCase()!=null) {
			ideData[i].name= (ideData[i].opt.match(patt1).join().replace(/,/g, '')).toUpperCase();	
		}
		if(ideData[i].action_id.length>2){
			ideData[i].mod = ideData[i].action_id.substr(0, 2);
			ideData[i].oc = ideData[i].action_id.substr(2, 2);
		}else{ //doesn't matter about the CC without open close
			ideData[i].mod = ideData[i].action_id.substr(0, 1);
			ideData[i].oc = ideData[i].action_id.substr(1, 1);
		}
		ideData[i].special_id = ideData[i].mod+ideData[i].opt;
	}
	ide_nest = d3.nest()
		.key(function(d) { 
			return d.time; 
		})
		.sortKeys(d3.ascending)
		.entries(ideData);

	ide_nest2 = d3.nest()
		.key(function(d) { 
			return d.special_id; 
		})		
		.entries(ideData);


		//trying to figure out links here
        links = ideData.filter(function(d) {
            return d.mod == "L";
        });
		for(i=0; i<links.length; i++){
			newguy.push(links[i].opt.split(" "));
			links[i].source = newguy[i][1];
			links[i].target = newguy[i][3];
		}

	        //TOTAL JOB COUNT FOR EACH PAPER TYPE
	            // for (j=0;j<paperTypes.length; j++){
	            //     for (i=0; i<totalJobs; i++) {
	            //                 if (data[i].JobType == paperTypes[j].name) {
	            //                     paperTypes[j].totalJobCount = paperTypes[j].totalJobCount + 1;
	            //                 } else {
	            //                 }
	            //             }
	            //                console.log("Totals" + paperTypes[j].totalJobCount);
	            //         }
	var circle, path, text;
	var force;
	// Compute the distinct nodes from the links.
	links.forEach(function(link) {
	  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
	  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
	});

	force = d3.layout.force()
	    .nodes(d3.values(nodes))
	    .links(links)
	    .size([w, h])
	    .linkDistance(300)
	    .charge(-200)
	    .on("tick", tick)
	    .start();  
	path = svg.selectAll("path")
	    .data(force.links())
	    .enter().append("path")
	    .attr("class","link") 
	    .attr("stroke","gray")
	    .attr("fill","none")

	var rMap;
	var maxWeight;
	var thisWeight = [];
	circle = svg.selectAll("node")
	    .data(force.nodes())
	    .enter().append("circle")
	    .attr("class",function(d){
	        thisWeight.push(d.weight);
	        maxWeight = d3.max(thisWeight, function(d){ return d; })
	        rMap = d3.scale.linear()
	            .domain([0,maxWeight])
	            .range([radiusMin, radiusMin*10])   
	    	return "node"
	    })
    circle
	    .attr("r", function(d){
	    	// console.log(d.weight);
	    	return rMap(d.weight);
	    })
	    .attr("fill", function(d){
	    	return colorNet(d.name);
	    })
	text= svg.selectAll("labels")
	    .data(force.nodes())
	    .enter().append("text")
	    .attr("class","labels")
	    .attr("x", 8)
	    .attr("y", ".31em")
	    .text(function(d,i) {
	             return d.name;           
	    }) 

	function tick() {
	  path.attr("d", linkArc);
	  circle
	  .attr("transform", transform);
	  text.attr("transform", transform);
	}
	function linkArc(d) {
	  var dx = d.target.x - d.source.x,
	      dy = d.target.y - d.source.y,
	      dr = Math.sqrt(dx * dx + dy * dy);
	  return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
	}
	function transform(d) {
	  d.x = Math.max(radiusMin, Math.min(w - radiusMin, d.x));
	  d.y = Math.max(radiusMin, Math.min(h - radiusMin, d.y));  
	    // node.attr("cx", function(d) { return d.x = Math.max(r, Math.min(w - r, d.x)); })
	    //     .attr("cy", function(d) { return d.y = Math.max(r, Math.min(h - r, d.y)); });    
	  return "translate(" + d.x+ "," + d.y + ")";
	}
	for(i=0; i<ide_nest2.length; i++){
		for(j=0; j<ide_nest2[i].values.length-1; j++){
			if(ide_nest2[i].values[j].oc==1 && ide_nest2[i].values[j+1].oc==2){
				var secondguy = ide_nest2[i].values[j+1].time;
				ide_nest2[i].values[j].end = secondguy;
			} else{ 
				// idenest2[i].values[j].end = +Date.now(); 
			}
		}
	}
}

function goIDE2(incomingD2){
	var ideData2;
	ideData2 = incomingD2[0].values;
	// console.log(ideData);
    var patt1 = /[A-Z]/gi; 
	// console.log(ideData);
	for(i=0; i<ideData2.length; i++){
		if(ideData2[i].opt.match(patt1)!=null) {
			ideData2[i].name= (ideData2[i].opt.match(patt1).join().replace(/,/g, '')).toUpperCase();	
		}
		if(ideData2[i].action_id.length>2){
			ideData2[i].mod = ideData2[i].action_id.substr(0, 2);
			ideData2[i].oc = ideData2[i].action_id.substr(2, 2);
		}else{ //doesn't matter about the CC without open close
			ideData2[i].mod = ideData2[i].action_id.substr(0, 1);
			ideData2[i].oc = ideData2[i].action_id.substr(1, 1);
		}
		ideData2[i].special_id = ideData2[i].mod+ideData2[i].opt;
	}
		//trying to figure out links here
        links2 = ideData2.filter(function(d) {
            return d.mod == "L";
        });
		for(i=0; i<links2.length; i++){
			newguy2.push(links2[i].opt.split(" "));
			links2[i].source = newguy2[i][1];
			links2[i].target = newguy2[i][3];
		}

var circle2, path2, text2;
var force2;
var nodes = {};

// Compute the distinct nodes from the links.
links2.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
});

force2 = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links2)
    .size([w, h])
	    .linkDistance(300)
	    .charge(-200)
    .on("tick", tick2)
    .start();  
path2 = svg2.selectAll("path.linkPath")
    .data(force2.links())
    .enter().append("path")
    .attr("class","linkPath") 
    .attr("stroke","gray")
    .attr("fill","none")

var rMap;
var maxWeight;
var thisWeight = [];
	circle2 = svg2.selectAll("node")
	    .data(force2.nodes())
	    .enter().append("circle")
	    .attr("class",function(d){
	        thisWeight.push(d.weight);
	        maxWeight = d3.max(thisWeight, function(d){ return d; })
	        rMap = d3.scale.linear()
	            .domain([0,maxWeight])
	            .range([radiusMin, radiusMin*10])   
	    	return "node"
	    })
    circle2
	    .attr("r", function(d){
	    	// console.log(d.weight);
	    	return rMap(d.weight);
	    })
	    .attr("fill", function(d){
	    	return colorNet(d.name);
	    })
	text2 = svg2.selectAll("labels")
	    .data(force2.nodes())
	    .enter().append("text")
	    .attr("class","labels")
	    .attr("x", 8)
	    .attr("y", ".31em")
	    .text(function(d,i) {
	             return d.name;           
	    }) 

	function tick2() {
	  path2.attr("d", linkArc2);
	  circle2
	  .attr("transform", transform2);
	  text2.attr("transform", transform2);
	}
	function linkArc2(d) {
	  var dx = d.target.x - d.source.x,
	      dy = d.target.y - d.source.y,
	      dr = Math.sqrt(dx * dx + dy * dy);
	  return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
	}
	function transform2(d) {
	  d.x = Math.max(radiusMin, Math.min(w - radiusMin, d.x));
	  d.y = Math.max(radiusMin, Math.min(h - radiusMin, d.y));  
	    // node.attr("cx", function(d) { return d.x = Math.max(r, Math.min(w - r, d.x)); })
	    //     .attr("cy", function(d) { return d.y = Math.max(r, Math.min(h - r, d.y)); });    
	  return "translate(" + d.x+ "," + d.y + ")";
	}

}
























































var miniTime = [];
function goFace(incomingData, summary){
	faceData = incomingData;
	// console.log(toD)
	summaryFace = summary;
	// console.log(summary);
	for(j=0; j<summaryFace.length; j++){
		miniTime.push(summaryFace[j].values.min_time)
		whatTime.push(summaryFace[j].values.max_time)
	}
	timeMin = d3.min(miniTime);
	timeMax = d3.max(whatTime);
	timeX.domain([timeMin, timeMax]).range([cmargin, w-cwidth+cmargin]);
}

function goHands(incomingData, summary){	
	console.log(summary+"summaryHands")
	handData = incomingData;
	summaryHands = summary;
	// One cell for each hand tracked (hands are in nested data @ at 1)
}


function compress(){
	d3.selectAll(".hand")
		.transition().delay(1000).duration(2000)
		.attr("transform",function(d,i) {
	  		return "translate("+cmargin+",0)";
	  	});
	// d3.selectAll(".face")
	// 	.transition().delay(1000).duration(2000)
	// 	.attr("transform",function(d,i) {
	//   		return "translate("+cmargin+",0)";
	//   	});
	$(".rectText").hide();
	$(".faceText").hide();
}
// }
})

function showHands(){
	var numPanels = handData.values.length;

    backRect = svg.append("g").attr("class","backRect")
    	.append("rect")
    	.attr("class","backRect")
    	.attr("x", cmargin)
    	.attr("y", cmargin)
    	.attr("width", cwidth*numPanels)//(timeX(timeMin)-timeX(timeMax)))
    	.attr("height", cheight)
    	.attr("fill","white")
	// var thisData;
	var g = svg.selectAll(".hand")
		.data(handData.values)
		.enter()
	  	.append("g")
	  	.attr("class","hand")
	  	.attr("transform",function(d,i) {
	  		handColor.domain([d.key])
	  		// thisData = d;
	  		return "translate("+(cwidth*i)+",0)";
	  	});

		g
		  .append("rect")
		  .attr("x",cmargin)
		  .attr("y",cmargin)
		  .attr("width",cwidth)//-2*cmargin)
		  .attr("height",cheight)//-2*cmargin)
		  .attr("fill","none")
		  .attr("stroke","lightgray");
		// we also write its name below.
		g
		  .append("text")
		  .attr("class","rectText")
		  .attr("y",cheight+10)
		  .attr("x",cmargin)
		  .text(function(d,i) {
	  		if(d.key==summaryHands[i].key){
	  			// return (summary[i].values.max_time);
	  		}
		  })
		
		// now marks, initiated to default values
		g.selectAll("circle")
		// we are getting the values of the countries like this:
		.data(function(d) {
			return d.values;
		}) 
		.enter()
		  .append("circle")
		  .attr("class","miniCircs")
		  .attr("cx",cmargin)
		  .attr("cy",cheight-cmargin)
		  .attr("fill","none")
		  .attr("stroke","grey")
		  .attr("r",1)
		    // throwing in a title element
		    .append("title")
		      .text(function(d) {
		      	rx.push(d.rx);
				minRX = d3.min(rx);
				maxRX = d3.max(rx);
		      	
		      	ry.push(d.ry);
				minRY = d3.min(ry);
				maxRY = d3.max(ry);

				// console.log(meanX+"meanx")
				y.domain([minRY, maxRY])
				x.domain([minRX, maxRX])
		      	// console.log(minRX);
		      	// return d.num;
		      });
		// finally, we animate our marks in position
		g.selectAll("circle.miniCircs").transition().delay(100).duration(1000)
		    .attr("r",radSize)
		    .attr("cx",function(d) {
		    	return x(d.rx);
		    })
		    .attr("cy",function(d) {
		    	return y(d.ry);
		    })

		g.append("circle")
		.attr("class","bigCircs")
		.attr("cx", function(d,i){
	  		if(d.key==summaryHands[i].key){
	  			return x(summaryHands[i].values.meanX);
	  		}
	  	})
		.attr("cy", function(d,i){
	  		if(d.key==summaryHands[i].key){
	  			return y(summaryHands[i].values.meanY);
	  		}
	  	})
	  	.attr("r", function(d,i){
	  		if(d.key==summaryHands[i].key){
	  			return 200*((summaryHands[i].values.deviationX+summaryHands[i].values.deviationY)/2);
	  		}
	  	})
		.attr("fill",function(d){
			return handColor(d.key);//"pink";
		})
		.attr("opacity",.6)
//try to find average spot
}
var path, line;
var thisData = [];

function showFace(){
	var minTotal, maxTotal;
	var thisMany = [];
	maxTotal = 4;

	  var yOffset = h/2;
	  var mini = 4;
	  var heightPanel = 100;
	  var yPath = d3.scale.linear()
		  .domain([-1, maxTotal])
	      .range([yOffset, yOffset-heightPanel]);

    backRect = svg.append("g").attr("class","backRect")
    	.append("rect")
    	.attr("class","backRect")
    	.attr("x", cmargin)
    	.attr("y", yOffset-heightPanel)
    	.attr("width", w-cwidth+cmargin)//(timeX(timeMin)-timeX(timeMax)))
    	.attr("height", heightPanel)
    	.attr("fill","white")
		.attr("stroke","lightgray")

  	line = d3.svg.line()
      .x(function(d, i) { return timeX(d.time); })
      .y(function(d, i) { return yPath(d.num); })
      .interpolate("cardinal");
	path = svg.append("g").attr("class","paths")
    	.append("path")
    	.attr("class","path")
		.attr("d", line(faceData.values))
		.attr("stroke-width",.5)
		.attr("stroke","grey")
		.attr("fill","none")
	dot = svg.append("g").attr("class","dots").selectAll(".dot")
	    .data(faceData.values)
	  	.enter().append("circle")
	    .attr("class", "dot")
	    .attr("cx", line.x())
	    .attr("cy", line.y())
	    .attr("fill","none")
			.attr("stroke-width",.5)
			.attr("stroke","grey")
	    .attr("r", radSize);
	// path
		// .datum(faceData.values)
		// .attr("d", line);
}




var topY = 200;
var bottomY = 500;
var yOther = d3.scale.ordinal()
    .rangePoints([topY, bottomY]);

var xStart = 15;
var xEnd = xStart*spaceFactor;
var xI = d3.scale.ordinal()
    .domain(inputs)
    .rangePoints([xStart, xEnd]);
var xO = d3.scale.ordinal()
    .domain(outputs)
    .rangePoints([xStart, xEnd]);
var xP = d3.scale.ordinal()
    .domain(programming)
    .rangePoints([xStart, xEnd]);
var xG = d3.scale.ordinal()
    .domain(games)
    .rangePoints([xStart, xEnd]);


function showIDE(){
    backRect = svg.append("g").attr("class","backRect")
    	.append("rect")
    	.attr("class","backRect")
    	.attr("x", cmargin-14)
    	.attr("y", topY-24)
    	.attr("width", w-cwidth+cmargin)//(timeX(timeMin)-timeX(timeMax)))
    	.attr("height", bottomY-topY+50)
    	.attr("fill","white")
		.attr("stroke","lightgray")

		var g = svg.selectAll(".ide")
		.data(ide_nest2)
		.enter()
	  	.append("g")
	  	.attr("class","ide");
		// now marks, initiated to default values
		g.selectAll(".logs")
		// we are getting the values of the countries like this:
		.data(function(d) {
			if(d.oc!=2){
				return d.values;				
			}
		}) 
		.enter()
		.append("rect")
		.attr("class",function(d){
			if(d.name){
				theseNames.push(d.name);
				uniqueNames = unique(theseNames);

				if(d.mod=="M"){
					hardNames.push(d.name);
				}
				if(d.mod=="B"){
					softNames.push(d.name);
				}


				yOther.domain(uniqueNames);
			}
			return d.name;
		})
		.attr("x", function(d){
			return timeX(d.time)
		})
        .attr("y", function(d, i) {
            return yOther(d.name);
        })
		.attr("width",function(d,i){
			if(d.end){
				return timeX(d.end)-timeX(d.time);
			}else{
				return timeX(endTime)-timeX(d.time);				
			}
		})
		.attr("height", 5)
		.attr("fill", function(d){
			if(yOther(d.name)!=undefined){
				return colorScale(d.mod);
			} else{
				return "none";
			}
		})
		.attr("stroke","white")
		.attr("opacity",.3);

		var g = svg.selectAll(".logText")
		.data(uniqueNames)
		.enter()
		.append("text")
		.attr("class","logText")
		.attr("x", cmargin)
        .attr("y", function(d) {
            return yOther(d)+6;
        })
        .text(function(d){
        	return d;
        })

















        // var hardware = ideData.filter(function(d) {
        //     return d.mod == "M";
        // });
        // var software = ideData.filter(function(d) {
        //     return d.mod == "B";
        // });
uniqueHards = unique(hardNames);
uniqueSofts = unique(softNames);
        console.log("hardware in use"+uniqueHards);
        console.log("software in use"+uniqueSofts);
		console.log("components in use"+uniqueNames)
var whatIsThe = _.difference(uniqueSofts, uniqueHards);
console.log("this is the difference between hard and soft"+whatIsThe)
// console.log(uniqueHards.diff(uniqueSofts));  

}


        function unique(obj) {
            var uniques = [];
            var stringify = {};
            for (var i = 0; i < obj.length; i++) {
                var keys = Object.keys(obj[i]);
                keys.sort(function(a, b) {
                    return a - b
                });
                var str = '';
                for (var j = 0; j < keys.length; j++) {
                    str += JSON.stringify(keys[j]);
                    str += JSON.stringify(obj[i][keys[j]]);
                }
                if (!stringify.hasOwnProperty(str)) {
                    uniques.push(obj[i]);
                    stringify[str] = true;
                }
            }
            return uniques;
        }

var moveToFront = function() { 
    this.parentNode.appendChild(this); 
}