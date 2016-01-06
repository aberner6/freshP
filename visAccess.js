
var data;
var types = ["hand","ide","particle","face"];
var handData = [];
var moduleTypes = ["B","CC","BM","M","L"];
var interactionTypes = ["inputs","outputs","programming","games"];
var uniqueNames;
var theseNames = [];
var toggling = true;


var cwidth=200,cheight=200,cmargin=25,maxr=5;

var nested_data;
var m = [15, 20, 40, 120], //top right bottom left
    w = window.innerWidth-cmargin,
    h = window.innerHeight;
var goAhead;
var svg = d3.select("#container").append("svg").attr("width",w).attr("height",h);

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
inputs.push("BTN","POT","TMP","ACR","COL","ROT","LDR")
outputs.push("LED","PEZ", "RGB")
programming.push("IF", "Interval", "Fade", "Swap", "Map","MAP","MAPTOHIGHER", "Counter", "Trigger")
games.push("Note", "Random", "PONG", "SimonSays")
var radiusMin = 5;
var spaceFactor = radiusMin;
var colorScale = d3.scale.ordinal()
    .domain(moduleTypes)
    .range(d3.scale.category20c().range());

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
	var  token = pelars_authenticate();
	$.getJSON("http://pelars.sssup.it:8080/pelars/data/615/session?token="+token ,function(json){
// if(token){
	// $.getJSON( "http://pelars.sssup.it:8080/pelars/data/615/session?token="+token,function(json) { 
		// document.getElementById("id").innerHTML = JSON.stringify(json); 
		data = (json);
endTime = data[data.length-1].time;
		nested_data = d3.nest()
			.key(function(d) { return d.type; })
			.key(function(d){ return d.num; })
			.entries(data);

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
	});


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
		ideData[i].name= (ideData[i].opt.match(patt1).join().replace(/,/g, '')).toUpperCase();
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
// thisData.push(faceData.values)
	maxTotal = 4;
	// for(var i=0; i<thisData[0].length; i++){
	// 	maxTotal = d3.max(thisData[0][i].num);
	// }

	// One cell for each face tracked (hands are in nested data @ at 1)
	// var g = svg.selectAll(".face")
	// 	.data(faceData.values)
	// 	.enter()
	//   	.append("circle")
	//   	.attr("class",function(d){
	//   		thisMany.push(d.num);
	//     	minTotal = d3.min(thisMany);
	//     	maxTotal = d3.max(thisMany);
	//   		return "face"
	//   	})
	//     .attr("cx",function(d) {
	// 	  	return timeX(d.time) //cmargin)
	// 	})
	//     .attr("cy",function(d) {
	// 	  	return h/2-d.num*10;
	//     	// return fy(d['distance from camera']);;
	//     })
	//     .attr("stroke","gray")
	//     .attr("fill","none")
	//     .attr("r",radSize)

  var yOffset = h/2;
  var mini = 4;
  var heightPanel = 100;
  var yPath = d3.scale.linear()
	  .domain([-1, maxTotal])
      .range([yOffset, yOffset-heightPanel]);

// cmargin, w-cwidth+cmargin
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
// svg.selectAll(".dot")
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

  // enteringDay
  //   .selectAll(".lineOut")
  //   .data(interactionTypes)
  //   // .data(moduleTypes)
  //   .enter()
  //   .append("line")
  //   .classed("lineOut",true)
  //   .attr("x1", xStart)
  //   .attr("x2", xEnd)
  //   .attr("y1", function(d,i){
  //     return y(d);
  //   })
  //   .attr("y2", function(d,i){
  //     return y(d);
  //   })
  //   .attr("stroke",function(){
  //     return "grey"
  //   })
  //   .attr("opacity", opacityLine)
  //   .attr("stroke-width", .2);

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
			theseNames.push(d.name);
			uniqueNames = unique(theseNames);			
			yOther.domain(uniqueNames);
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
			return colorScale(d.mod);
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
		// // now marks, initiated to default values
		// g.selectAll(".logs")
		// // we are getting the values of the countries like this:
		// .data(function(d) {
		// 	return d.values;
		// }) 
		// .enter()
		// .append("rect")
		// .attr("class",function(d){
		// 	return d.name+" "+d.mod;
		// })
		// .attr("x", function(d){
		// 	return timeX(d.time)
		// })
		// .attr("y", function(d){
	 //      for(j=0; j<programming.length; j++){
	 //          if(d.name==programming[j] || d.mod=="L" || d.mod == "CC"){
	 //          	return y_p;
	 //          }
	 //      }
	 //      for(j=0; j<outputs.length; j++){
	 //          if(d.name==outputs[j]){
	 //          	return y_o;
	 //          }
	 //      }
	 //      for(j=0; j<inputs.length; j++){
	 //          if(d.name==inputs[j]){
	 //          	return y_i;
	 //          }
	 //      }
	 //      for(j=0; j<games.length; j++){
	 //          if(d.name==games[j]){
	 //          	return y_g;
	 //          }
	 //      }
		// })
		// .attr("width",function(d,i){
		// 	if(d.end){
		// 		return timeX(d.end)-timeX(d.time);
		// 	}else{
		// 		return timeX(endTime)-timeX(d.time);				
		// 	}
		// })
		// .attr("height",5)
		// .attr("fill", function(d){
		// 	if(d.oc==2){
		// 		return "none";
		// 	} else{
		// 		return colorScale(d.mod);
		// 	}
		// })
		// .attr("opacity",.3)

		// svg.on("click", function(d){
		// 	d3.selectAll(".logs")
		// 	.transition()
		// 	.attr("width",function(d){
		// 		// if(d.end){
		// 			return 10;
		// 		// }
		// 	})
		//     .attr("x",function(d){
		//       for(j=0; j<programming.length; j++){
		//           if(d.name==programming[j]){
		//           return xP(d.name);
		//           }
		//       }
		//       for(j=0; j<inputs.length; j++){
		//           if(d.name==inputs[j]){
		//           return xI(d.name);
		//           }
		//       }
		//       for(j=0; j<outputs.length; j++){
		//           if(d.name==outputs[j]){
		//           return xO(d.name);
		//           }
		//       }
		//       for(j=0; j<games.length; j++){
		//           if(d.name==games[j]){
		//           return xG(d.name);
		//           }
		//       }
		//     })
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