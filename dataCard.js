
var data;
var types = ["hand","ide","particle","face"];
var handData = [];
var moduleTypes = ["B","CC","BM","M","L"];
var interactionTypes = ["inputs","outputs","programming","games"];
var uniqueNames;
var theseNames = [];


var theseTotals = [];
var one = [];
var two = [];
var three = [];

var xPath;

var startMin, endMin, totalTime;



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
var svg = d3.select("#container").append("svg").attr("width",w).attr("height",h)            
	.attr("transform", "translate(" + 0 + "," + 0 + ")");



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

var timeSVG = d3.select("#timeline")
	.append("svg")
	.attr("width",w-40)
	.attr("height",h/2-64)  
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
	// .attr("transform", "translate(" + 0 + "," + 10 + ")");
// var svg2 = d3.select("#container").append("svg").attr("width",w).attr("height",h)
// .attr("transform", "translate(" + 0 + "," + 0 + ")");

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
var rtime = [];
var thisid = [];
var rnum
var newThing = []; 

var activeOne = [];

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
// var token = "xOlSArdMD3N_IEFy6pezxvlqLYHKYInWPwQoKDMo6A_TTfIRp0MlVFarwoHS7LQtkBcqH18E_gY8uDQLfN39HCd7uMyYakdwTKifWZOYKPwv-B7luIE91A6Af3K1lD91";
	// var  token = "y_ETVWjdDYA7qLr3MHdUUEhTxthgb8e_bY02PaIJ9wIudaGhQdLM_-p67aSQRiMSkBcqH18E_gY8uDQLfN39HPVR8Ws7d3fnPQf_BhNIce4v-B7luIE91A6Af3K1lD91"
	//pelars_authenticate();
	// $.getJSON("http://pelars.sssup.it:8080/pelars/data/537/session?token="+token ,function(json){
	// 		console.log("ready")
	// 		console.log(json)
	// 		ready(json)
	// 	})
// console.log(json);
// if(token){
	// $.getJSON( "http://pelars.sssup.it:8080/pelars/data/615/session?token="+token,function(json) { 
		// document.getElementById("id").innerHTML = JSON.stringify(json); 


		//hard coded
queue()
	.defer(d3.json, "assets/data1.json")
	.await(ready);


function ready(error,data1) {

// function ready(data1) {
// d3.json("assets/data.json", function(json) {
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
startTime = data[0].time;
endTime = data[data.length-1].time;
totalTime = endTime-startTime;
console.log(totalTime);
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

buttonSVG.append("text")
	.attr("class","button1")
	.attr("x", textL)
	.attr("y", topMarg+iconW/4)
	.text(button1.length)
	.attr("fill","black")
var iconBut = buttonSVG.selectAll(".button1")	
	.data(d3.range(button1.length+1))
	iconBut.enter()
	.append("image")
	.attr("class","button1")
	.attr("xlink:href", "assets/icons/idea.png")
	.attr("x", function(d,i){
		return xSpace(i);
	})
	.attr("y", topMarg-iconW/2)
	.attr("width",iconW)
	.attr("height",iconW);

buttonSVG.append("text")
	.attr("class","button2")
	.attr("x", textL)
	.attr("y", topMarg+iconW*1.7)
	.text(button2.length)
	.attr("fill","black");

var iconBut = buttonSVG.selectAll(".button2")	
	.data(d3.range(button2.length+1))
	iconBut.enter()
	.append("image")
	.attr("class","button2")
	.attr("xlink:href", "assets/icons/thunder.png")
	.attr("x", function(d,i){
		return xSpace(i);
	})
	.attr("y", topMarg+iconW)
	.attr("width",iconW)
	.attr("height",iconW);
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
			ideData[i].oc = ideData[i].action_id.substr(2, 2);
		}else{ //doesn't matter about the CC without open close
			ideData[i].mod = ideData[i].action_id.substr(0, 1);
			ideData[i].oc = ideData[i].action_id.substr(1, 1);
		}
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
	  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
	  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
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
			if(ide_nest2[i].values[j].oc==1 && ide_nest2[i].values[j+1].oc==2){
				var secondguy = ide_nest2[i].values[j+1].time;
				ide_nest2[i].values[j].end = secondguy;
			} else{ 
				// idenest2[i].values[j].end = +Date.now(); 
			}
		}
	}
	showIDE();
	showHands();
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

	var g = svg.selectAll(".hand")
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
	console.log(time1)
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
		// console.log(activeOne)
	}
	// for(i=0; i<two.length; i++){
	// }
	// for(i=0; i<three.length; i++){
	// }
	var delta1 = [];
	if(activeOne){
		console.log(activeOne)
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
	// console.log(softSpeed)
	console.log(softS1.length+"softspeedlength1")
	console.log(activeOne.length+"changeslength1")

}else{console.log("no")}











		// now marks, initiated to default values
		g.selectAll("circle")
		// we are getting the values of the countries like this:
		.data(function(d) {
			return d.values;
		}) 
		.enter()
		.append("circle")
		.attr("class","miniCircs")
		    // throwing in a title element
		    .append("title")
		      .text(function(d) {
		    		if(d.num==576){ //64
		      	// console.log(d.time)
				      	rtime.push(d.time)
				      	thisid.push(d.num)

				      	rx.push(d.rx);
						minRX = d3.min(rx);
						maxRX = d3.max(rx);
				      	
				      	ry.push(d.ry);
						minRY = d3.min(ry);
						maxRY = d3.max(ry);
						y.domain([minRY, maxRY])
						x.domain([minRX, maxRX])
					}
		      });
		// finally, we animate our marks in position
		g.selectAll("circle.miniCircs").transition().delay(100).duration(1000)
		    .attr("cx",function(d,i) {
		    	// console.log()
		    	if(i>0){
		    		if(d.num==576){ //64
				    	newThing.push({
				    		"changeDist": Math.sqrt(Math.pow((rx[i]-rx[i-1]), 2) + Math.pow((ry[i]-ry[i-1]),2)),
				    		"changeTime": rtime[i]-rtime[i-1],
				    		"thisTime": rtime[i],
				    		"specialID": d.num		    		
				    	})
			    	}
			    }
		    })

for (i=0; i<newThing.length; i++){
	changes.push({
		"time": newThing[i].thisTime, //minutes //new Date(newThing[i].thisTime).getMinutes()
		"delta":newThing[i].changeDist,
		"speed":(newThing[i].changeDist)/(newThing[i].changeTime),
		"specialID":newThing[i].specialID
	})
}
var justDelta = [];
var justSpeed = [];
for(i=0; i<changes.length; i++){
	justDelta.push(changes[i].delta)
	justSpeed.push(changes[i].speed)
}

var wtf = justDelta;//[]; //CUMULATIVE
    _.map(wtf,function(num,i){ if(i > 0) wtf[i] += wtf[i-1]; });
    // console.log(wtf);
    // console.log(changes.length)

var interval = 160;
var softSpeed = [];
for(i=0; i<wtf.length; i++){
	if(i>interval){
		softSpeed.push((wtf[i]-wtf[i-interval])/(changes[i].time-changes[i-interval].time))
	}
}
// console.log(softSpeed)
console.log(softSpeed.length+"softspeedlength")
console.log(changes.length+"changeslength")

var maxActive = d3.max(softSpeed)//d3.max(justSpeed);//d3.max(justDelta);
var minActive = d3.min(softSpeed)//d3.min(justSpeed);//d3.min(justDelta);
console.log(maxActive+"maxactive")
var pathActive, lineActive;
var yActivePath;
  yActivePath = d3.scale.linear()
      .domain([minActive,maxActive]).range([h/4-15, 0]);

  xActivePath = d3.scale.linear() //startTime, endTime
      .domain([startTime, endTime]).range([10, w-40]);

  lineActive = d3.svg.line()
      .x(function(d, i) { return xActivePath(changes[i].time); })
      .y(function(d, i) { return yActivePath(d); })
      .interpolate("linear")
      // .interpolate("bundle")
      // .tension(.87);
  pathActive = timeSVG.append("g")
    .append("path")
    .attr("class","activepath")
    .attr("fill","none")
    .attr("stroke","lightgreen")
  	pathActive
  		.datum(softSpeed)
    	.attr("transform", function(d,i){
        return "translate(" + 0 + ", "+50+")";
    	})
  		.attr("d", lineActive);

























		// g.append("circle")
		// .attr("class","bigCircs")
		// .attr("cx", function(d,i){
	 //  		if(d.key==summaryHands[i].key){
	 //  			return x(summaryHands[i].values.meanX);
	 //  		}
	 //  	})
		// .attr("cy", function(d,i){
	 //  		if(d.key==summaryHands[i].key){
	 //  			return y(summaryHands[i].values.meanY);
	 //  		}
	 //  	})
	 //  	.attr("r", function(d,i){
	 //  		if(d.key==summaryHands[i].key){
	 //  			return 200*((summaryHands[i].values.deviationX+summaryHands[i].values.deviationY)/2);
	 //  		}
	 //  	})
		// .attr("fill",function(d){
		// 	return handColor(d.key);//"pink";
		// })
		// .attr("opacity",.6)
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
        .attr('transform', 'translate(0, ' + 140 + ')');

	var yOther = d3.scale.ordinal()
    	.rangePoints([topMarg, 115]);

	var g = timeSVG.selectAll(".ide")
		.data(ide_nest2)
		.enter()
	  	.append("g")
	  	.attr("class","ide");
		g.selectAll(".logs")
		.data(function(d) {
			if(d.oc!=2){
				return d.values;				
			}
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
				yOther.domain(uniqueNames);
			}
			return d.name;
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


startMin = new Date(startTime).getMinutes();
endMin = new Date(endTime).getMinutes()
totalTime = endMin-startMin;
console.log("startMin"+startMin+"endMin"+endMin+"totalTime"+totalTime)
// var newTime = new Date(totalTime).getMinutes();






for(j=startMin; j<endMin; j++){
	totalComps[j] = ardUseTotals(j);

	hardUseComp[j] = ({ 
		"total":hardUseTotals(j), 
		"time":j 
	});

	softUseComp[j] = softUseTotals(j);
}





var maxComps = d3.max(totalComps)
console.log(maxComps)
var yPath, minTotal, maxTotal, pathH, index, lineT, svgPath;

  xPath = d3.scale.linear()
      .domain([startMin,endMin]).range([10, w-40]);
  yPath = d3.scale.linear()
      .domain([0,maxComps])
      // .range([h/4-64, 0]);
      .range([h/4-15, 0]);

  lineT = d3.svg.line()
      .x(function(d, i) { 
      	if(d==undefined){ return 0; }
      		else{
		       	return xPath(d.time);      			
      		}
      })
      .y(function(d, i) { 
      	if(d==undefined){return 0;}
      		else{
      			return yPath(d.total); 
      		}
      })
      .interpolate("linear");

  pathH = timeSVG.append("g")
    .append("path")
    .attr("class","timepath")
  		.attr("fill","none")
  		.attr("stroke","pink");
  	pathH
  		.datum(hardUseComp)
    	.attr("transform", function(d,i){
        return "translate(" + 0 + ", "+50+")";
    	})
  		.attr("d", lineT);

        function ardUseTotals(index) {
            var total = 0;
            for (i = 0; i < ideData.length; i++) {
                if (ideData[i].minute == index) {
                    total++;
                } else {}
            }
            return total;
        }
        function hardUseTotals(index) {
            var total = 0;
            for (i = 0; i < hardwareOnly.length-1; i++) {
                if (hardwareOnly[i].minute == index) {
                    total++;
                } else {}
            }
            return total;
        }
        function softUseTotals(index) {
            var total = 0;
            for (i = 0; i < softwareOnly.length; i++) {
                if (softwareOnly[i].minute == index) {
                    total++;
                } else {}
            }
            return total;
        }





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
	diffSoftHard = _.difference(uniqueSofts, uniqueHards);
	console.log("this is the difference between hard and soft"+diffSoftHard)

	// var uniquesXS = d3.scale.ordinal()
	// 	uniquesXS
	// 	.domain(diffSoftHard)
	// 	.rangePoints([10, forcewidth-40]);
	// var uniquesXH = d3.scale.ordinal()
	// 	uniquesXH
	// 	.domain(uniqueHards)
	// 	.rangePoints([10, forcewidth-40]);
	var both = uniqueHards.concat(diffSoftHard);
	var both2 = diffSoftHard.concat(uniqueHards);


	// var yUniqueH = d3.scale.ordinal()
	// 	.domain(both)
	//     .rangePoints([topMarg, forceheight-topMarg/2]);
	// var yUniqueS = d3.scale.ordinal()
	// 	.domain(both2)
	//     .rangePoints([topMarg, forceheight-topMarg/2]);
	var bothLength;
	if(uniqueHards.length>=diffSoftHard.length){
		bothLength = uniqueHards.length;
	} else{
		bothLength = diffSoftHard.length;
	}
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