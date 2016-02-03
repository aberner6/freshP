
var data;
var types = ["hand","ide","particle","face"];
var handData = [];
var moduleTypes = ["B","CC","BM","M","L"];
var interactionTypes = ["inputs","outputs","programming","games"];
var uniqueNames;
var theseNames = [];

var faceUseComp = [];

var hardCumu = [];


var theseTotals = [];
var one = [];
var two = [];
var three = [];

var xPath;

var startMin, endMin, totalTime;

var faceRadius = 5;
var maxRadius = faceRadius*4;


/////////
var obsReflect = [];
var obsDoc = [];
var obsPlan = [];
////////
var phaseData = [];
var planStart, planEnd;
var obs = [];





var topMarg = 10;
var textH = 30;
var iconW = 20;
var iconLMarg = 27;
var textL = 10;
///////summary
var uniqueHards;
var uniqueSofts;
var uniqueManips;
var hardNames = [];
var softNames = [];
var hardwareOnly = [];
var softwareOnly = [];
var manipNames = [];
var totalLinks;
var totalLinks = [];
var totalTime;
var humanReadableTime;
///////summary
var diffSoftHard;
var totalComps = [];
var	hardUseComp = [];
var	softUseComp = [];
var colorText = "black";




var	faceTotal = [];



////button stuff
var particleOnly = [];
var getthis = [];
var buttonData = [];
var button1 = [];
var button2 = [];
////
var thisMinute = [];
var changes = [];


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
var m = [15, 20, 40, 120]; //top right bottom left
var h = $("#container").height();//document.body.clientHeight;
var w = $("#container").width();//document.body.clientWidth;


var goAhead;
// var svg = d3.select("#container").append("svg").attr("width",w).attr("height",h)            
// 	.attr("transform", "translate(" + 0 + "," + 0 + ")");










// $('#submit').click(function () { 

// });









var forcewidth = w/4-9;
var forceheight = h/4;
var netSVG = d3.select("#ardinfo")
	.append("svg")
	.attr("width",forcewidth)
	.attr("height",forceheight)  
	.style("border","1px solid white") 
	.style("margin-top","1px")

var ardSVG = d3.select("#network")
	.append("svg")
	.attr("width",forcewidth)
	.attr("height",forceheight)  
	.style("border","1px solid white") 
	.style("margin-top","1px")

var buttonSVG = d3.select("#buttonuse")
	.append("svg")
	.attr("width",forcewidth)
	.attr("height",forceheight)  
	.style("border","1px solid white") 
	.style("margin-top","1px");

var activeSVG = d3.select("#facehand")
	.append("svg")
	.attr("width",forcewidth)
	.attr("height",forceheight)  
	.style("border","1px solid white") 
	.style("margin-top","1px");
var timeSVGH = h/2-60;
var timeSVG = d3.select("#timeline")
	.append("svg")
	.attr("width",w-40)
	.attr("height",timeSVGH)  
	.style("border","1px solid white") 
	.style("margin-top","1px");
// build the arrow.
netSVG.append("svg:defs").selectAll("marker")
    .data(["end"])      // Different link/path types can be defined here
  .enter().append("svg:marker")    // This section adds in the arrows
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    // .attr("stroke-width",1)
    .attr("orient", "auto")
    .attr("fill",colorText)
  .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");         

buttonSVG.append("svg:defs").selectAll("marker")
    .data(["end"])      // Different link/path types can be defined here
  .enter().append("svg:marker")    // This section adds in the arrows
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    // .attr("stroke-width",1)
    .attr("orient", "auto")
    .attr("fill",colorText)
  .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");  

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
    .domain([0,20])
    .range(d3.scale.category20c().range());
var faceColor = d3.scale.ordinal()
    .domain([0,5])
    .range(d3.scale.category10().range());

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
var rtime = [];
var thisid = [];
var rnum
var newThing = []; 

var activeOne = [];
var activeTwo = [];
var activeThree = [];

var xIs = [];
var yIs = [];
var x=d3.scale.linear().range([cmargin,cwidth-cmargin]);
var y=d3.scale.linear().range([cheight-cmargin,cmargin]);
var o=d3.scale.linear().domain([0,300000]).range([.5,1]);

var fx=d3.scale.linear().range([cmargin,cwidth-cmargin]);
var fy=d3.scale.linear().range([cheight-cmargin,cmargin]);

var rows = 2;
var endTime;
var thisSession;

$(document).ready(function() {
			//hard coded
// queue()
// 	.defer(getSession)
getSession();
var token;

function getSession(){
	var token = pelars_authenticate();
	$.getJSON("http://pelars.sssup.it:8080/pelars/session?token="+token,function(json1){
			thisSession = parseInt(615);//537//615//json1[json1.length-1].session;
			console.log("session"+thisSession);
			getData(thisSession, token);
	})
}
function getData(thisSession, token){
	console.log(thisSession);
	if(thisSession>0){
		$.getJSON("http://pelars.sssup.it:8080/pelars/data/"+thisSession+"?token="+token,function(json){
				console.log("ready")
startTime = json[0].time;
endTime = json[json.length-1].time;
console.log(startTime+"start")
				ready(json)
				getPhases(thisSession, token);
			})
	}
}
function getPhases(thisSession,token){
	$.getJSON("http://pelars.sssup.it:8080/pelars/phase/"+768+"?token="+token,function(phasesJSON){
		console.log("phase")
		showPhases(phasesJSON)
	})
}
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
		jsres = jqXHR;
		res = jsres["token"];
		},
		error : function(jqXHR, status) {
			console.log("error"+jqXHR)
			res = 0; }
	});
	return res;
}


function ready(data1) {
		data = (data1);
		//how to split the data up so it shows each hand as a separate line?
		// for(i=0; i<data.length; i++){
		// 	if(data[i].type=="hand"){
		// 		data[i].num = 0;
		// 		if(i>0){
		// 			count = 0;
		// 			if(data[i].num != data[i-1].num){
		// 				count++;
		// 				data[i].num = count;
		// 			} //has to be set to 0 1 or 2
		// 		}
		// 	}
		// }
		// console.log(data2);


startMin = new Date(startTime).getMinutes();
endMin = new Date(endTime).getMinutes();
startHour = new Date(startTime).getHours();
endHour = new Date(startTime).getHours();
if(endMin>startMin){
	totalMin = (endMin-startMin);	
}else{
	totalMin = (60-startMin)+endMin;	
}

console.log(totalMin);
var totalTime = endTime-startTime;
// var minutes=(totalTime/(1000*60))%60;
// var hours=(totalTime/(1000*60*60))%24;
humanReadableTime = millisecondsToStr(totalTime);
console.log(humanReadableTime)
function millisecondsToStr (milliseconds) {
    // TIP: to find current time in milliseconds, use:
    // var  current_time_milliseconds = new Date().getTime();

    function numberEnding (number) {
        return (number > 1) ? 's' : '';
    }

    var temp = Math.floor(milliseconds / 1000);
    var years = Math.floor(temp / 31536000);
    if (years) {
        return years + ' year' + numberEnding(years);
    }
    //TODO: Months! Maybe weeks? 
    var days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
        return days + ' day' + numberEnding(days);
    }
    var hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
        return hours + ' hour' + numberEnding(hours);
    }
    var minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
        return minutes + ' minute' + numberEnding(minutes);
    }
    var seconds = temp % 60;
    if (seconds) {
        return seconds + ' second' + numberEnding(seconds);
    }
    return 'less than a second'; //'just now' //or other string you like;
}





for(i=0; i<data.length; i++){
	if(data[i].type == "particle"){
		particleOnly.push(data[i]);
	}
}
goButton(particleOnly);

		nested_data = d3.nest()
			.key(function(d) { return d.type; })
			.key(function(d){ return d.num; })
			// .key(function(d){ return d.time; })
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
						"deviationX": d3.mean(leaves, function(d){ 
							return parseFloat(d.rx) 
						}),
						"deviationY": d3.mean(leaves, function(d){ 
							return parseFloat(d.ry) 
						})
						// "deviationX": d3.variance(leaves, function(d){ 
						// 	return parseFloat(d.rx) 
						// }),
						// "deviationY": d3.variance(leaves, function(d){ 
						// 	return parseFloat(d.ry) 
						// })
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
				// if(nested_data[i].key=="particle"){
				// 	console.log("here")
				// // }
				// 	goButton(nested_data[i].values);
				// }
				if(nested_data[i].key&&nest_again[i].key=="ide"){
					console.log(nested_data[i].key)
					goIDE(nested_data[i].values, nest_again[i].values);
				}
				compress();
				// else{ console.log("nope")}
			}	
		}
	};


//probably have to fix this
// svg.on("click", function(){
// 	toggling = !toggling;
// 	console.log(toggling)
// 	if(!toggling){
// 		d3.selectAll(".hand")
// 			.transition()
// 			.attr("transform",function(d,i) {
// 		  		return "translate("+cmargin+",0)";
// 		  	});
// 		// d3.selectAll(".face")
// 		// 	.transition()
// 		// 	.attr("transform",function(d,i) {
// 		//   		return "translate("+cmargin+",0)";
// 		//   	});
// 		$(".rectText").hide();
// 		$(".faceText").hide();
// 	}
// 	if(toggling){
// 		d3.selectAll(".hand")
// 			.transition()
// 			.attr("transform",function(d,i) {
// 		  		return "translate("+cwidth*i+",0)";
// 		  	});
// 		// d3.selectAll(".face")
// 		// 	.transition()
// 		// 	.attr("transform",function(d,i) {
// 	 //  		return "translate("+(cwidth*i)+","+(cheight*rows)+")";
// 		//   	});
// 		$(".rectText").show();
// 		$(".faceText").show();
// 	}
// })













function showPhases(phasesJSON) {
	// console.log(phasesJSON)
	phaseData = phasesJSON;
	var phaseNum = 0;
	for(i=1; i<4; i++){ //change this
		if(phaseData[i].phase!=phaseData[i-1].phase){
			phaseNum+=1;
			obs[phaseNum]=({
				"phase": phaseData[i].phase,
				"start": 10000+startTime+i*60000,
				"end": 20000+startTime+i*300000
			})
		}	
	}
obs = cleanArray(obs)
	timeX.domain([startTime, endTime]).range([10, w-40]);

	console.log(obs);
	//draw a rectangle for each key
	var rectPhase = timeSVG.selectAll(".phase")
		.data(obs)
		.enter()
	  	.append("rect")
	  	.attr("class","phase")
	  	.attr("transform",function(d,i) {
	  		return "translate("+(i*180)+",0)";
	  	})
		  .attr("x",function(d,i){
		  	return timeX(d.start); 
		  })
		  .attr("y",0)
		  .attr("width",function(d,i){
		  	return timeX(d.end)-timeX(d.start);
		  })
		  .attr("height",timeSVGH)//-2*cmargin)
		  .attr("fill","lightgray")
		  .attr("opacity",.1)
		  .attr("stroke",function(d,i){
		  	return handColor(i);
		  });
		  //OR
		  // .attr("fill","none")
		  // .attr("stroke-dasharray",5)
		  // .attr("stroke-width",.5)
}







function goButton(incomingData){
	buttonData.push(incomingData);
	console.log(incomingData);
	for(i=0; i<buttonData[0].length; i++){
		getthis.push(buttonData[0][i].data);
		button1.push({
			"button": getthis[i].match(/button1/g),
			"time": buttonData[0][i].time
		});	
		button2.push({
			"button": getthis[i].match(/button2/g),
			"time": buttonData[0][i].time
		});	
		// button2.push(getthis[i].match(/button2/g));	
	}
button1 = button1.filter(function(n){ return n.button != undefined }); 
button2 = button2.filter(function(n){ return n.button != undefined }); 

	console.log(button1.length+"number of button1 presses")
	console.log(button2.length+"number of button2 presses")

var buttonTot;
if(button2.length>button1.length){
	buttonTot = button2.length;
}else{ buttonTot = button1.length; }
console.log(buttonTot)
var iconW = (forcewidth/1.5)/buttonTot
	var xSpace = d3.scale.linear()
		.domain([0, buttonTot+1])
		.range([textL, forcewidth-iconW])






// buttonSVG.append("text")
// 	.attr("class","button1")
// 	.attr("x", textL)
// 	.attr("y", topMarg*2)
// 	.attr("font-size",14)
// 	.text(button1.length)
// 	.attr("fill","black")
// var iconBut = buttonSVG.selectAll(".button1")	
// 	.data(d3.range(2))
// 	iconBut.enter()
// 	.append("image")
// 	.attr("class","button1")
// 	.attr("xlink:href", "assets/icons/idea.png")
// 	.attr("x", textL)
// 	.attr("y", topMarg*2+(button1.length+5))
// 	.attr("width",button1.length+10)
// 	.attr("height",button1.length+10);

// buttonSVG.append("text")
// 	.attr("class","button2")
// 	.attr("x", (forcewidth*3/4))
// 	.attr("y", topMarg*2)
// 	.attr("font-size", 14)
// 	.text(button2.length)
// 	.attr("fill","black");

// var iconBut = buttonSVG.selectAll(".button2")	
// 	.data(d3.range(2))
// 	iconBut.enter()
// 	.append("image")
// 	.attr("class","button2")
// 	.attr("xlink:href", "assets/icons/thunder.png")
// 	.attr("x", (forcewidth*3/4))
// 	.attr("y", (topMarg*2)+5 ) //+button2.length+5
// 	.attr("width",button2.length+10)
// 	.attr("height",button2.length+10);







// buttonSVG.append("text")
// 	.attr("class","button1")
// 	.attr("x", textL)
// 	.attr("y", topMarg+(button1.length+10)/4)
// 	.attr("font-size",button1.length+10)
// 	.text(button1.length)
// 	.attr("fill","black")
// var iconBut = buttonSVG.selectAll(".button1")	
// 	.data(d3.range(2))
// 	iconBut.enter()
// 	.append("image")
// 	.attr("class","button1")
// 	.attr("xlink:href", "assets/icons/idea.png")
// 	.attr("x", function(d,i){
// 		return xSpace(i);
// 	})
// 	.attr("y", (button1.length+10)/2)
// 	.attr("width",button1.length+10)
// 	.attr("height",button1.length+10);

// buttonSVG.append("text")
// 	.attr("class","button2")
// 	.attr("x", textL)
// 	.attr("y", topMarg*2+(button2.length+10)*1.7)
// 	.attr("font-size", button2.length+10)
// 	.text(button2.length)
// 	.attr("fill","black");

// var iconBut = buttonSVG.selectAll(".button2")	
// 	.data(d3.range(2))
// 	iconBut.enter()
// 	.append("image")
// 	.attr("class","button2")
// 	.attr("xlink:href", "assets/icons/thunder.png")
// 	.attr("x", function(d,i){
// 		return xSpace(i)+(button2.length+10);
// 	})
// 	.attr("y", topMarg*2+button2.length+10)
// 	.attr("width",button2.length+10)
// 	.attr("height",button2.length+10);
}

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
			ideData[i].oc = parseInt(ideData[i].action_id.substr(2, 2));
		}else{ //doesn't matter about the CC without open close
			ideData[i].mod = ideData[i].action_id.substr(0, 1);
			ideData[i].oc = parseInt(ideData[i].action_id.substr(1, 1));
		}



		if(ideData[i].oc==2){ ideData[i].oc=-1 }



		ideData[i].special_id = ideData[i].mod+ideData[i].opt;
		ideData[i].hour = (new Date(ideData[i].time)).getHours();
		ideData[i].minute = (new Date(ideData[i].time)).getMinutes();
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


	var circle, path, text;
	var force;
	// Compute the distinct nodes from the links.
	links.forEach(function(link) {
	  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, mod:link.mod});
	  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, mod:link.mod});
	});

var linkdist = w/10;
	force = d3.layout.force()
	    .nodes(d3.values(nodes))
	    .links(links)
	    .size([forcewidth, forceheight-20])
	    .linkDistance(linkdist)
	    .charge(-100)
	    .on("tick", tick)
	    .start();  
makeChords(force.nodes(), force.links());
// console.log(links);
// console.log(force.nodes())
// console.log(force.links())
makeEdge(links,force.nodes(), force.links());

	var rMap;
	var maxWeight;
	var thisWeight = [];
	circle = netSVG.selectAll("node")
	    .data(force.nodes())
	    .enter().append("circle")
	    .attr("class",function(d){
	        thisWeight.push(d.weight);
	        maxWeight = d3.max(thisWeight, function(d){ return d; })
	        rMap = d3.scale.linear()
	            .domain([0,maxWeight])
	            .range([radiusMin, forcewidth/8])   
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
	    // .each(collide(0.5)); //Added 

	path = netSVG.selectAll("path")
	    .data(force.links())
	    .enter().append("path")
	    .attr("class","link")
	    .attr("stroke",colorText)
	    .attr("fill","none")
	    .attr("opacity",.05)
	    .attr("marker-end", "url(#end)");

	text = netSVG.selectAll("labels")
	    .data(force.nodes())
	    .enter().append("text")
	    .attr("class","labels")
	    .attr("x", 8)
	    .attr("y", ".31em")
	    .text(function(d,i) {
	             return d.name;           
	    }) 
	    .attr("fill",colorText)
	    .attr("font-size",9)

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
			if(ide_nest2[i].values[j].oc==1 && ide_nest2[i].values[j+1].oc==-1){
				var secondguy = ide_nest2[i].values[j+1].time;
				ide_nest2[i].values[j].end = secondguy;
			} else{ 
				// idenest2[i].values[j].end = +Date.now(); 
			}
		}
	}
	showIDE();
	showHands();
	showFace();
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
	console.log(incomingData)
	// incomingData = d3.nest()
	// 		.key(function(d) { return d.time; }).sortKeys(d3.ascending)
	// 		.entries(incomingData);
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

	var g = timeSVG.selectAll(".hand")
		.data(handData.values.sort(d3.ascending))
		.enter()
	  	.append("g")
	  	// .attr("class","hand")
	  	.attr("transform",function(d,i) {
	  		handColor.domain([d.key])
	  		theseTotals.push(d.values.length);
			theseTotals.sort(d3.descending); 			
	  		return "translate("+(cwidth*i)+",0)";
	  	})
	  	.attr("class", function(d,i){
	  			if(d.values.length==theseTotals[0]){
		  			one.push(d.values);
		  		}
	  			if(d.values.length==theseTotals[1]){
		  			two.push(d.values);
		  		}
	  			if(d.values.length==theseTotals[2]){
		  			three.push(d.values);
		  		}
		  		else{}	
		  		return "hand";
	  	})

var rx1 = [];
var ry1 = [];
var time1 = [];
if(one!="undefined"){
	for(i=0; i<one[0].length; i++){
	  	time1.push(one[0][i].time)
	  	rx1.push(one[0][i].rx);
	  	ry1.push(one[0][i].ry);
	}
	if(time1.length>0){ //check if array is full
		for(i=0; i<one[0].length; i++){
			if(i>0){
		    	activeOne.push({
		    		"changeDist": Math.sqrt(Math.pow((rx1[i]-rx1[i-1]), 2) + Math.pow((ry1[i]-ry1[i-1]),2)),
		    		"changeTime": time1[i]-time1[i-1],
		    		"thisTime": time1[i]
		    	})
		    }
		}
	}
	var delta1 = [];
	if(activeOne){
		for(i=0; i<activeOne.length; i++){
			delta1.push(activeOne[i].changeDist);
		}
	}
	var cumu1 = delta1;
	    _.map(cumu1,function(num,i){ if(i > 0) cumu1[i] += cumu1[i-1]; });

	var interval = 160;
	var softS1 = [];
	for(i=0; i<cumu1.length; i++){
		if(i>interval){
			softS1.push((cumu1[i]-cumu1[i-interval])/(activeOne[i].thisTime-activeOne[i-interval].thisTime))
		}
	}
	console.log(softS1.length+"softspeedlength1")
	console.log(activeOne.length+"activelength1")

}else{console.log("no")}

var rx2 = [];
var ry2 = [];
var time2 = [];
if(two!="undefined"){
	for(i=0; i<two[0].length; i++){
	  	time2.push(two[0][i].time)
	  	rx2.push(two[0][i].rx);
	  	ry2.push(two[0][i].ry);
	}
	if(time2.length>0){ //check if array is full
		for(i=0; i<two[0].length; i++){
			if(i>0){
		    	activeTwo.push({
		    		"changeDist": Math.sqrt(Math.pow((rx2[i]-rx2[i-1]), 2) + Math.pow((ry2[i]-ry2[i-1]),2)),
		    		"changeTime": time2[i]-time2[i-1],
		    		"thisTime": time2[i]
		    	})
		    }
		}
	}
	var delta2 = [];
	if(activeTwo){
		for(i=0; i<activeTwo.length; i++){
			delta2.push(activeTwo[i].changeDist);
		}
	}
	var cumu2 = delta2;
	    _.map(cumu2,function(num,i){ if(i > 0) cumu2[i] += cumu2[i-1]; });
	// var interval = 160;
	var softS2 = [];
	for(i=0; i<cumu2.length; i++){
		if(i>interval){
			softS2.push((cumu2[i]-cumu2[i-interval])/(activeTwo[i].thisTime-activeTwo[i-interval].thisTime))
		}
	}
	console.log(softS2.length+"softspeedlength2")
	console.log(activeTwo.length+"activelength2")

}else{console.log("notwo")}

var rx3 = [];
var ry3 = [];
var time3 = [];
if(three!="undefined"){
	for(i=0; i<three[0].length; i++){
	  	time3.push(three[0][i].time)
	  	rx3.push(three[0][i].rx);
	  	ry3.push(three[0][i].ry);
	}
	if(time3.length>0){ //check if array is full
		for(i=0; i<three[0].length; i++){
			if(i>0){
		    	activeThree.push({
		    		"changeDist": Math.sqrt(Math.pow((rx3[i]-rx3[i-1]), 2) + Math.pow((ry3[i]-ry3[i-1]),2)),
		    		"changeTime": time3[i]-time3[i-1],
		    		"thisTime": time3[i]
		    	})
		    }
		}
	}
	var delta3 = [];
	if(activeThree){
		for(i=0; i<activeThree.length; i++){
			delta3.push(activeThree[i].changeDist);
		}
	}
	var cumu3 = delta3;
	    _.map(cumu3,function(num,i){ if(i > 0) cumu3[i] += cumu3[i-1]; });
	// var interval = 160;
	var softS3 = [];
	for(i=0; i<cumu3.length; i++){
		if(i>interval){
			softS3.push((cumu3[i]-cumu3[i-interval])/(activeThree[i].thisTime-activeThree[i-interval].thisTime))
		}
	}
	console.log(softS3.length+"softspeedlength3")
	console.log(activeThree.length+"activelength3")

}else{console.log("nothree")}







var maxActive1 = d3.max(softS1)//d3.max(justSpeed);//d3.max(justDelta);
var maxActive2 = d3.max(softS2)//d3.max(justSpeed);//d3.max(justDelta);
var maxActive3 = d3.max(softS3)//d3.max(justSpeed);//d3.max(justDelta);
// console.log(maxActive1+"maxactive1"+maxActive2);
var maxActiveOverall;

if(maxActive2>maxActive1){
	maxActiveOverall = maxActive2;
} else{
	maxActiveOverall = maxActive1;
}
if(maxActive3>maxActiveOverall){
	maxActiveOverall = maxActive3;
} else{
	maxActiveOverall = maxActiveOverall;
}
console.log(maxActive3);
//which is the most active

var pathActive1, lineActive1, pathActive2, lineActive2, pathActive3, lineActive3;

var yActivePath;
  yActivePath = d3.scale.linear()
      .domain([0,maxActiveOverall]).range([timeSVGH, (timeSVGH/2)+maxRadius]);

  xActivePath = d3.scale.linear() //startTime, endTime
      .domain([startTime, endTime]).range([10, w-40]);

  lineActive1 = d3.svg.line()
      .x(function(d, i) { return xActivePath(activeOne[i].thisTime); })
      .y(function(d, i) { return yActivePath(d); })
      .interpolate("bundle")
  pathActive1 = timeSVG.append("g")
    .append("path")
    .attr("class","activepath1")
    .attr("fill","none")
    .attr("stroke","darkgrey")
    .attr("stroke-dasharray",1)
  	pathActive1
  		.datum(softS1)
  		.attr("d", lineActive1);

  lineActive2 = d3.svg.line()
      .x(function(d, i) { return xActivePath(activeTwo[i].thisTime); })
      .y(function(d, i) { return yActivePath(d); })
      .interpolate("bundle")
      // .tension(5)
  pathActive2 = timeSVG.append("g")
    .append("path")
    .attr("class","activepath2")
    .attr("fill","none")
    .attr("stroke","darkgrey")
  	pathActive2
  		.datum(softS2)
  		.attr("d", lineActive2);
  lineActive3 = d3.svg.line()
      .x(function(d, i) { return xActivePath(activeThree[i].thisTime); })
      .y(function(d, i) { return yActivePath(d); })
      .interpolate("linear")
  pathActive3 = timeSVG.append("g")
    .append("path")
    .attr("class","activepath3")
    .attr("fill","none")
    .attr("stroke","teal")
  	pathActive3
  		.datum(softS3)
    	// .attr("transform", function(d,i){
     //    return "translate(" + 0 + ", "+50+")";
    	// })
  		.attr("d", lineActive3);
}

var pathFace, lineFace;
var thisData = [];

function showFace(){
	var minTotal, maxTotal;
	var thisMany = [];
	maxTotal = 4;



	// for(j=startTime; j<endTime; j++){
	// 	var thisDate = new Date(j).getMinutes();
	// 	var thisHour = new Date(j).getHours();
	// 	var thisD = thisHour+thisDate;
	// 		faceTotal[thisD] = ({ 
	// 			"total":faceTotals(thisDate), 
	// 			"time": j,
	// 			"min":thisDate,
	// 			"hour":thisHour
	// 		});
	// }




	  var yOffset = h/2;
	  var mini = 4;
	  var heightPanel = 100;
	  var yPath = d3.scale.linear()
		  .domain([0, maxTotal])
		 .range([timeSVGH, timeSVGH/2]);

  	lineFace = d3.svg.line()
      .x(function(d, i) { return timeX(d.time); })
      .y(function(d, i) { return yPath(d.num); })
      .interpolate("cardinal")
      // .tension(.5);
	// pathFace = timeSVG.append("g").attr("class","pathFace")
 //    	.append("path")
 //    	.attr("class","pathFace")
	// 	.attr("d", lineFace(faceData.values))
	// 	.attr("stroke-width",.5)
	// 	.attr("stroke","grey")
	// 	.attr("fill","none")

	// console.log(face)

	// dotFace = timeSVG.append("g").attr("class","dots").selectAll(".dot")
	//     .data(faceData.values)
	//   	.enter().append("circle")
	//     .attr("class", "dot")
	//     .attr("cx", lineFace.x())
	//     .attr("cy", lineFace.y())
	//     .attr("fill","none")
	// 		.attr("stroke-width",.5)
	// 		.attr("stroke",function(d,i){
	// 			if(d.num>0){
	// 				return "grey"
	// 			}else { return "none"}
	// 		})
	//     .attr("r", radSize);





var faceColor = "pink";
///////OPTION 1
	// dotFace = timeSVG.append("g").attr("class","dots").selectAll(".dot")
	//     .data(faceData.values)
	//   	.enter().append("circle")
	//     .attr("class", "dot")
	//     .attr("cx", function(d){
	//     	return timeX(d.time)
	//     })
	//     .attr("cy", timeSVGH/2)
	//     .attr("r", function(d,i){
	//     	return d.num*faceRadius;
	//     })
	//     .attr("fill", faceColor)
	// 	.attr("opacity", .1)
/////OPTION 1
// ////////////OPTION 2
	rectFace = timeSVG.append("g").attr("class","facerect").selectAll(".facerect")
	    .data(faceData.values)
	  	.enter().append("rect")
	    .attr("class", "facerect")
	    .attr("x", function(d){
	    	return timeX(d.time)
	    })
	    .attr("y", function(d,i){
	    	return timeSVGH/2-d.num*faceRadius*2;
	    })
	    .attr("height", function(d,i){
	    	return 2*(d.num*faceRadius*2);
	    })
	    .attr("width",2)
	    .attr("fill", faceColor)
		.attr("stroke","none")
////////////OPTION 2

var bins = {};
faceData.values.forEach(function(t) {
	// console.log(t.num)
    var key = new Date(t.time).getMinutes();
    bins[key] = bins[key] || 0;
    bins[key] = t.num;
});
console.log(bins)
	// for(j=startTime; j<endTime; j++){
	// 	var thisDate = new Date(j).getMinutes();
	// 	var thisHour = new Date(j).getHours();
	// 	var thisD = thisHour+thisDate;
	// 		faceUseComp[thisD] = ({ 
	// 			"total":faceUseTotals(thisDate), 
	// 			"time": j,
	// 			"min":thisDate,
	// 			"hour":thisHour
	// 		});
	// }
	// console.log(faceUseComp)
 //        function faceUseTotals(index) {
 //            var total = 0;
	// 		for(i=0; i<faceData.values; i++){
 //    			var key = new Date(faceData[i].values.time).getMinutes();
 //                if (key == index) {
 //                    total++;
 //                } else {}
 //            }
 //            return total;
 //        }
}




var topY = 200;
var bottomY = 500;


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
    var xAxisCall = timeSVG.append('g');

    var xAxis = d3.svg.axis();
    var xAxisScale = d3.time.scale()
        .domain([startTime, endTime])
        .range([10, w-40]);
    var timeFormat = d3.time.format("%H:%M");

	timeX.domain([startTime, endTime]).range([10, w-40]);

    xAxis
        .scale(xAxisScale)
        .orient("top")
        .ticks(5)
        .tickPadding(1)
        .tickFormat(timeFormat);
    xAxisCall.call(xAxis)
        .attr("class", "axis") //Assign "axis" class
        .attr('transform', 'translate(0, ' + (timeSVGH-1) + ')');

	var yOther = d3.scale.ordinal()
    	.rangePoints([topMarg, 115]);

	var g = timeSVG.selectAll(".ide")
		.data(ide_nest2)
		.enter()
	  	.append("g")
	  	.attr("class","ide");
		g.selectAll(".logs")
		.data(function(d) {
			// if(d.oc!=2){
				return d.values;				
			// }
		}) 
		.enter()
		.append("g")
		.attr("class",function(d){
			if(d.name){
				theseNames.push(d.name);
				uniqueNames = unique(theseNames);
				if(d.mod=="M"){
					hardwareOnly.push(d);
					hardNames.push(d.name);
				}
				if(d.mod=="B"){
					softwareOnly.push(d);
					softNames.push(d.name);
				}
				// if(d.mod=="M" && d.oc==1){
				// 	hardwareOnly.push(d);
				// 	hardNames.push(d.name);
				// }
				// if(d.mod=="B"&& d.oc==1){
				// 	softwareOnly.push(d);
				// 	softNames.push(d.name);
				// }
				yOther.domain(uniqueNames);
			}
			// return d.name;
		})
		// .attr("x", function(d){
		// 	return timeX(d.time)
		// })
  //       .attr("y", function(d, i) {
  //           return yOther(d.name);
  //       })
		// .attr("width",function(d,i){
		// 	if(d.end){
		// 		return timeX(d.end)-timeX(d.time);
		// 	}else{
		// 		return timeX(endTime)-timeX(d.time);				
		// 	}
		// })
		// .attr("height", 5)
		// .attr("fill", function(d){
		// 	if(yOther(d.name)!=undefined){
		// 		return colorScale(d.mod);
		// 	} else{
		// 		return "none";
		// 	}
		// })
		// .attr("stroke", function(d){
		// 	if(yOther(d.name)!=undefined){
		// 		return "white"
		// 	} else{
		// 		return "none";
		// 	}
		// })
		// .attr("opacity",.3);



if(endMin>startMin){
	totalMin = (endMin-startMin);	
}else{
	totalMin = (60-startMin)+endMin;	
}
console.log("startMin"+startMin+"endMin"+endMin+"totalTime"+totalTime)
// for(j=0; j<totalTime; j++){
// 	if(startMin+j<60){
// 		var thisj = startMin+j;		
// 		hardUseComp[j] = ({ 
// 			"total":hardUseTotals(thisj), 
// 			"time": j 
// 		});
// 	}
// 	else{
// 		var thisj = totalTime-j;		
// 		hardUseComp[j] = ({ 
// 			"total":hardUseTotals(thisj), 
// 			"time": j 
// 		});
// 	}
// }
hardwareOnly.sort(function(x, y){
   return d3.ascending(x.time, y.time);
})
softwareOnly.sort(function(x, y){
   return d3.ascending(x.time, y.time);
})
		for(i=0; i<hardwareOnly.length; i++){
			hardCumu.push(hardwareOnly[i].oc);
		}
	var cumuH = hardCumu;
	    _.map(cumuH,function(num,i){ if(i > 0) cumuH[i] += cumuH[i-1]; });


	for(j=startTime; j<endTime; j++){
		var thisDate = new Date(j).getMinutes();

		var thisHour = new Date(j).getHours();
		
		var thisD = thisHour+thisDate;
		
			hardUseComp[thisD] = ({ 
				"total":hardUseTotals(thisDate), 
				"time": j,
				"min":thisDate,
				"hour":thisHour
			});

			softUseComp[thisD] = ({ 
				"total":softUseTotals(thisDate), 
				"time": j,
				"min":thisDate,
				"hour":thisHour
			});
	}


// console.log(hardUseComp)

// for(j=startMin; j<endMin; j++){
// 	totalComps[j] = ardUseTotals(j);
// 	hardUseComp[j] = ({ 
// 		"total":hardUseTotals(j), 
// 		"time": //j 
// 	});
// 	// softUseComp[j] = softUseTotals(j);
// }



	uniqueHards = unique(hardNames);
	uniqueSofts = unique(softNames);
	        console.log("hardware in use"+uniqueHards);
	        console.log("software in use"+uniqueSofts);
			console.log("components in use"+uniqueNames)
	diffSoftHard = _.difference(uniqueSofts, uniqueHards);
	console.log("this is the difference between hard and soft"+diffSoftHard)
	var both = uniqueHards.concat(diffSoftHard);
	var both2 = diffSoftHard.concat(uniqueHards);
	var bothLength;
	if(uniqueHards.length>=diffSoftHard.length){
		bothLength = uniqueHards.length;
	} else{
		bothLength = diffSoftHard.length;
	}


//arrays are dirty with undefined values
hardUseComp = cleanArray(hardUseComp)
hardUseComp.sort(function(x, y){
   return d3.ascending(x.time, y.time);
})
softUseComp = cleanArray(softUseComp)
softUseComp.sort(function(x, y){
   return d3.ascending(x.time, y.time);
})
// 
	// var maxComps = d3.max(totalComps)
	// console.log(maxComps)
	var yHPath, ySPath, minTotal, maxTotal, pathH, index, lineS, lineH, svgPath;

	xPath = d3.scale.linear()
	      .domain([startTime,endTime]).range([10, w-40]);

	yHPath = d3.scale.linear()
	      .domain([-12,12]) //max hardware components
	      .range([timeSVGH/2, 0]);
	ySPath = d3.scale.linear()
	      .domain([-9,9]) //max software components
	      .range([timeSVGH/2, 0]);

	lineH = d3.svg.line()
      .x(function(d, i) { 
      	if(d==undefined){ return 0; }
      	// if(d<0){ return 0;}
      		else{
		       	return xPath(d.time);      			
      		}
      })
      .y(function(d, i) { 
      	if(d==undefined){return 0;}
      	if(d.total<0){ return 0}
      		else{
      			return yHPath(d.total); 
      		}
      })
      .interpolate("linear");

	lineS = d3.svg.line()
      .x(function(d, i) { 
      	if(d==undefined){ return 0; }
      		else{
		       	return xPath(d.time);      			
      		}
      })
      .y(function(d, i) { 
      	if(d==undefined){return 0;}
      	if(d.total<0){ return 0}
      		else{
      			return ySPath(d.total); 
      		}
      })
      .interpolate("linear");
var opacityPath = .5;
  pathH = timeSVG.append("g")
    .append("path")
    .attr("class","timepathH")
  		.attr("fill","#15989C")
  		.attr("opacity",opacityPath)
  		.attr("stroke","lightblue");
  	pathH
  		.datum(hardUseComp)
    	// .attr("transform", function(d,i){
     //    return "translate(" + 0 + ", "+0+")";
    	// })
  		.attr("d", lineH);

var pathS;
  pathS = timeSVG.append("g")
    .append("path")
    .attr("class","timepathS")
  		.attr("fill","#B19B80") //"#B19B80"
  		.attr("opacity",opacityPath)
  		// .attr("stroke","pink");
  	pathS
  		.datum(softUseComp)
    	// .attr("transform", function(d,i){
     //    return "translate(" + 0 + ", "+0+")";
    	// })
  		.attr("d", lineS);



        function ardUseTotals(index) {
            var total = 0;
            for (i = 0; i < ideData.length; i++) {
                if (ideData[i].minute == index) {
                    total++;
                } else {}
            }
            return total;
        }
        // function faceTotals(index) {
        //     var total = 0;
        //     for (i = 0; i < faceData.values.length-1; i++) {
        //         if (faceData.values[i].minute == index) {
        //             total++;
        //         } else {}
        //     }
        //     return total;
        // }



        function hardUseTotals(index) {
            var total = 0;
            for (i = 0; i < hardwareOnly.length; i++) {
                if (hardwareOnly[i].minute == index && hardwareOnly[i].oc==1) {
                    total++;
                } 
                if (hardwareOnly[i].minute == index && hardwareOnly[i].oc==2) {
                    total--;
                } 
            }
            return total;
        }
        // function hardUseTotals(index) {
        //     var total = 0;
        //     // console.log(index)
        //     for (i = 0; i < hardwareOnly.length-1; i++) {
        //         if (i == index && hardwareOnly[i].oc==1) {
        //             total+=1;
        //         } if (i == index && hardwareOnly[i].oc==2) {
        //             total-=1;
        //         } 
        //     }
        //     return total;
        // }
        function softUseTotals(index) {
            var total = 0;
            for (i = 0; i < softwareOnly.length; i++) {
                if (softwareOnly[i].minute == index && softwareOnly[i].oc==1) {
                    total++;
                } if (softwareOnly[i].minute == index && softwareOnly[i].oc==2) {
                    total--;
                } 
            }
            return total;
        }





        // var hardware = ideData.filter(function(d) {
        //     return d.mod == "M";
        // });
        // var software = ideData.filter(function(d) {
        //     return d.mod == "B";
        // });

	var yUniqueH = d3.scale.linear()
		.domain([0,bothLength])
	    .range([topMarg, forceheight-topMarg/2]);
	var yUniqueS = d3.scale.linear()
		.domain([0,bothLength])
	    .range([topMarg, forceheight-topMarg/2]);



        var icons;
           icons = ardSVG.selectAll(".icons")
               .data(uniqueHards)
           icons.enter().append("image")
               .attr("class", "icons")
               .attr("xlink:href", function(d, i) {
                   return "assets/icons/"+d.toLowerCase() + ".png";
               })
               .attr("y", function(d,i) {
                   return yUniqueH(i)-12;
               })
               .attr("width", iconW)
               .attr("height", iconW)
               .attr("x", iconLMarg)

var textHardware;
	textHardware = ardSVG.selectAll("textHard")
	    .data(uniqueHards)
	    .enter().append("text")
	    .attr("class", "textHard")
	    .attr("x", textL)
	    .attr("y",function(d,i){
	    	return yUniqueH(i) //not d
	    })
    	.attr("text-anchor", "start") // set anchor y justification
	    .attr("fill", "black")
	    .text(function(d){
	    	return d;
	    })
// var rectSoftware;
// 	rectSoftware = ardSVG.selectAll("rectSoft")
// 	    .data(whatIsThe)
// 	    .enter().append("rect")
// 	    .attr("class", "rectSoft")
// 	    .attr("x", function(d,i){
// 	    	return uniquesX(i)-3;//10+i*30;
// 	    })
// 	    .attr("y",30)
// 	    .attr("fill", "#B19B80")
// 	    .attr("width",19)
// 	    .attr("height",15)
// 	    .attr("stroke","white")
// 	    .attr("stroke-width",.5)
var textSoftware;
	textSoftware = ardSVG.selectAll("textSoft")
	    .data(diffSoftHard)
	    .enter().append("text")
	    .attr("class", "textSoft")
    	.attr("text-anchor", "start") // set anchor y justification
	    .attr("x", forcewidth/2)
	    .attr("y", function(d,i){
	    	return yUniqueS(i) //not d
	    })
	    .text(function(d){
	    	return d;
	    })
	    .attr("fill","black")
var iconsSoft;
   iconsSoft = ardSVG.selectAll(".iconsS")
       .data(diffSoftHard)
   iconsSoft.enter().append("image")
       .attr("class", "iconsS")
       .attr("xlink:href", function(d, i) {
       	// console.log(d.toLowerCase());
           return "assets/icons/"+d.toLowerCase() + ".png";
       })
       .attr("y", function(d,i) {
           return yUniqueS(i)-12;
       })
       .attr("width", iconW)
       .attr("height", iconW)
       .attr("x", (forcewidth/2)+iconLMarg)
//alphabetize these or order them in terms of time of connection?



linksNames = Object.keys(nodes);
	for (j = 0; j < linksNames.length; j++) {
	    totalLinks[j] = ({
	    		"totalFrom": linkTotalFrom(linksNames[j]),
	    		"totalTo": linkTotalTo(linksNames[j]),
	    		"linkName": linksNames[j]
	    	})
	}
function linkTotalFrom(name) {
    var total = 0;
    for (i = 0; i < links.length; i++) {
        if (links[i].source.name == name) {
            total++;
        } else {}
    }
    return total;
}
function linkTotalTo(name) {
    var total = 0;
    for (i = 0; i < links.length; i++) {
        if (links[i].target.name == name) {
            total++;
        } else {}
    }
    return total;
}
        console.log("total links made to and from")
        console.log(totalLinks)
}


var linkData;
function makeEdge(linkData, linkNodes, linkLinks){
	var linkData = linkData;
	var linkNodes = linkNodes;
	var linkLinks = linkLinks;

	// console.log(linkNodes);
	for(i=0; i<linkData.length; i++){
		linkData[i].parent = linkData[i].mod;
	}	
// console.log(linkNodes);
// console.log(linkLinks)
var diameter = forcewidth;
var radius = diameter / 2;
var margin = 40;

// drawGraph();
// Draws an arc diagram for the provided undirected graph
// function drawGraph(graph) {
    // create svg image
    // var circleSVG  = d3.select("body").select("#buttonSVG")
    //     .append("svg")
    //     .attr("width", diameter)
    //     .attr("height", diameter);

    // create plot area within svg image
    var plot = buttonSVG.append("g")
        .attr("id", "plot")
        .attr("transform", "translate(" + radius + ", " + (radius-19) + ")");

    // draw border around plot area
    plot.append("circle")
        .attr("class", "outline")
        .attr("fill","none")
        .attr("stroke","#888888")
        .attr("r", radius - margin);

    // // calculate node positions
    // circleLayout(graph.nodes);
    circleLayout(linkNodes);

    // // draw edges first
    // drawLinks(graph.links);
    drawCurves(linkLinks);

    // draw nodes last
    drawNodes(linkNodes);
// }
// Calculates node locations
function circleLayout(nodes) {
    // sort nodes by group
    nodes.sort(function(a, b) {
        return a.group - b.group;
    });

    // use to scale node index to theta value
    var scale = d3.scale.linear()
        .domain([0, nodes.length])
        .range([0, 2 * Math.PI]);

    // calculate theta for each node
    nodes.forEach(function(d, i) {
        // calculate polar coordinates
        var theta  = scale(i);
        var radial = radius - margin;

        // convert to cartesian coordinates
        d.x = radial * Math.sin(theta);
        d.y = radial * Math.cos(theta);
    });
}


// Generates a tooltip for a SVG circle element based on its ID
function addTooltip(circle) {
    var x = parseFloat(circle.attr("cx"));
    var y = parseFloat(circle.attr("cy"));
    var r = parseFloat(circle.attr("r"));
    var text = circle.attr("id");

    var tooltip = d3.select("#plot")
        .append("text")
        .text(text)
        .attr("x", x)
        .attr("y", y)
        .attr("dy", -r * 2)
        .attr("id", "tooltip");

    var offset = tooltip.node().getBBox().width / 2;

    if ((x - offset) < -radius) {
        tooltip.attr("text-anchor", "start");
        tooltip.attr("dx", -r);
    }
    else if ((x + offset) > (radius)) {
        tooltip.attr("text-anchor", "end");
        tooltip.attr("dx", r);
    }
    else {
        tooltip.attr("text-anchor", "middle");
        tooltip.attr("dx", 0);
    }
}
function drawNodes(nodes) {
    // used to assign nodes color by group
    var color = d3.scale.category20();
var radius = 5;
    d3.select("#plot").selectAll(".node")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("id", function(d, i) { return d.name; })
        .attr("cx", function(d, i) { return d.x; })
        .attr("cy", function(d, i) { return d.y; })
        .attr("r", radius)
        .style("fill",  function(d, i) { 
        	addTooltip(d3.select(this))
        	if(d.mod =="M"){
        		return "teal";
        	}
        	if(d.mod=="B"){
        		return "brown";
        	}
        	if(d.mod=="L"){
        		return "grey"
        	}
        })
}
// Draws straight edges between nodes
function drawLinks(links) {
    d3.select("#plot").selectAll(".link")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })
        .style("stroke",  function(d, i) { 
        	if(d.mod =="M"){
        		return "teal";
        	}
        	if(d.mod=="B"){
        		return "brown";
        	}
        	if(d.mod=="L"){
        		return "grey"
        	}
        })
        .attr("fill","none")
	    .attr("marker-end", "url(#end)");
}

// Draws curved edges between nodes
	function drawCurves(links) {
	    // remember this from tree example?
	    var curve = d3.svg.diagonal()
	        .projection(function(d) { return [d.x, d.y]; });

	    d3.select("#plot").selectAll(".link")
	        .data(links)
	        .enter()
	        .append("path")
	        .attr("class", "link")
	        .attr("stroke","blue")
	        .attr("fill","none")
	        .attr("d", curve);
	}
}





function makeChords(data1, data2){
	// console.log(data2);
   var mpr = chordMpr(data2);
for(i=0; i<data2.length; i++){
	newData.push({
		"has":data2[i].source.name,
		"prefers":data2[i].target.name,
		"count":data2[i].source.weight
	})
}
// console.log(newData);
var mpr = chordMpr(newData);
    mpr
      .addValuesToMap('has')
      .setFilter(function (row, a, b) {
      	// console.log(row.has)
         return (row.has === a.name && row.prefers === b.name)
       })
       .setAccessor(function (recs, a, b) {
         if (!recs[0]) return 0;
         return +recs[0].count;
        });

       // console.log(mpr.getMatrix())
     // drawChords(mpr.getMatrix(), mpr.getMap());
}
      //*******************************************************************
      //  DRAW THE CHORD DIAGRAM
      //*******************************************************************
      function drawChords (matrix, mmap) {
        var r1 = forceheight / 4, r0 = forceheight/6;
 // w = 980, h = 800,
        var fill = d3.scale.ordinal()
            .range(['#c7b570','#c6cdc7','#335c64','#768935','#507282','#5c4a56','#aa7455','#574109','#837722','#73342d','#0a5564','#9c8f57','#7895a4','#4a5456','#b0a690','#0a3542',]);

        var chord = d3.layout.chord()
            .padding(.02)
            .sortSubgroups(d3.descending)

        var arc = d3.svg.arc()
            .innerRadius(r0)
            .outerRadius(r0 + 20);

        // var svg = d3.select("body").append("svg:svg")
        //     .attr("width", w)
        //     .attr("height", h)
          // activeSVG.append("svg:g")
          //   .attr("id", "circle")
          //   .attr("transform", "translate(" + forcewidth / 2 + "," + forceheight / 2 + ")");

          //   activeSVG.append("circle")
          //       .attr("r", r0 + 20);

        var rdr = chordRdr(matrix, mmap);
        chord.matrix(matrix);
        console.log(chord.chords())
        var g = activeSVG.selectAll("g.group")
            .data(chord.groups())
          .enter().append("svg:g")
            .attr("class", "group")
            .attr("transform", "translate(" + forcewidth / 2 + "," + forceheight / 2 + ")");

        g.append("svg:path")
            .style("stroke", "black")
            //needs to be about the type of element
            .style("fill","none")
            // .style("fill", function(d) { return rdr(d).gdata == "state" ? "black": "grey"; })
            .attr("d", arc)
                        // .attr("transform", "translate(" + forcewidth / 2 + "," + forceheight / 2 + ")");

        g.append("svg:text")
            .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
            .attr("dy", ".35em")
            .style("font-family", "helvetica, arial, sans-serif")
            .style("font-size", "10px")
            .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
            .attr("transform", function(d) {
              return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                  + "translate(" + (r0 + 26) + ")"
                  + (d.angle > Math.PI ? "rotate(180)" : "");
            })
            .text(function(d) { return rdr(d).gname; });

          var chordPaths = activeSVG.selectAll("path.chord")
                .data(chord.chords())
              .enter().append("svg:path")
                .attr("class", "chord")
                // .style("stroke", "black")
                // .style("fill", function(d) { return rdr(d).tname == "Starbucks" ? "#00592d": "#ff6200"; })
                .attr("d", d3.svg.chord().radius(r0))
            .attr("transform", "translate(" + forcewidth / 2 + "," + forceheight / 2 + ")");
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

// Will remove all falsy values: undefined, null, 0, false, NaN and "" (empty string)
function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
    	// console.log(actual.time.sort(d3.ascending))
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

var moveToFront = function() { 
    this.parentNode.appendChild(this); 
}