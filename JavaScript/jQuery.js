// Required Implementation 1
const UNI_PREFIX = "uni";
const FIRM_PREFIX = "firm";
const FIRM2_PREFIX = "firm2";
const VOLUNTEER_PREFIX = "volunteer";
const NATION_PREFIX = "nation";
const OVERVIEW_PREFIX = "overview";




const PROGRAMS1 = [
	{uni: "Harvard University", nation: "U.S.A.", overview: "A private Ivy League research university in Cambridge, Massachusetts. <br> Harvard University is the United States' oldest institution of higher learning and one of the most prestigious in the world.", period: "6 months (1 semester)"},
  {uni: "Oxford University", nation: "U.K.", overview:"A public research university in Oxford, England. <br> Oxford  University is the the third Oldest university in the world and the highest ranked university in THE ranking four years in row.", period:"6 months (1 semester)"}
];

const PROGRAMS2 = [
	{firm: "PwC", nation: "U.K.", industry: "Accounting", overview: "PwC is the biggest accounting firm in the world. Its main businesses are audit, taxation business, and consulting.", period: "6 months"},
  {firm: "Apple", nation: "U.S.A", industry: "IT", overview: "Apple is the biggest IT firm in the world. Its main businesses are development and sale of Internet-related products, digital appliance, and softwares.", period:"6 months"}
];

const PROGRAMS3 = [
	{firm: "Grameen Bank", nation: "Bangladesh", overview: "Grameen Bank　is a microfinance organisation and community development bank founded in Bangladesh.  It makes small loans to the impoverished without requiring collateral to make them independent", period: "6 months"},
  {firm: "Toyota Tsusho Africa", nation: "South Africa", overview: ". Toyota Tsusho Afria is the African subsidiary of Japan-based trading company. It is focusing on renewable energy, mining and agriculture development to benefit Africa with the businesses.", period:"6 months"}
];

const PROGRAMS4 = [
	{program: "Teaching at elementary school", nation: "Philipine", overview: "Participants will teach local elementary students about your homeculture. Through communicating with them closely, you will know how different your culture and environment is from the world reality", period: "2 weeks"},
  {program: "Environmental conservation at NPO", nation: "Brazil", overview:"The deforestation of Amazon is a serious problem.Through going and volunteering there, you will know the reality behind the mass consumpition society.", period:"2 weeks"}
];

let compactUNI = PROGRAMS1.map(function(program) {
	return {
  	uni: program.uni,
  	nation: program.nation,
    overview: program.overview,
    period: program.period
    }
});

let compactFIRM = PROGRAMS2.map(function(program) {
	return {
  	firm: program.firm,
  	nation: program.nation,
    industry: program.industry,
    overview: program.overview,
    period: program.period
    }
});

let compactFIRM2 = PROGRAMS3.map(function(program) {
	return {
  	firm: program.firm,
  	nation: program.nation,
    overview: program.overview,
    period: program.period
    }
});

let compactVOLUNTEER = PROGRAMS4.map(function(program) {
	return {
  	program: program.program,
  	nation: program.nation,
    overview: program.overview,
    period: program.period
    }
});


$.each(compactUNI, function(index, program) {
  let programUni = $('<li>')
  	.html(program.uni)
    .attr("id", UNI_PREFIX + index);

  let show = $('<p>')
  	.text("show more")
    .attr("id", UNI_PREFIX + index)
    .addClass("SHOW");


  let programDetail = $('<div>')
  	.html("<li> Nation : " + program.nation +"</li><li> Overview :<br>" + program.overview + "</li> <li> Period : "+ program.period+"</li>")
  	.attr("id", NATION_PREFIX + "_" + UNI_PREFIX + index)
  	.addClass("hidden");

  programUni.append(programDetail);

	$('#directory1').append(programUni,show);

 	show.on("click", displayDetail1);
});

$.each(compactFIRM, function(index, program) {
  let programFirm = $('<li>')
  	.html(program.firm)
    .attr("id", FIRM_PREFIX + index);

  let show = $('<p>')
  	.text("show more")
    .attr("id", FIRM_PREFIX + index)
    .addClass("SHOW");


  let programDetail = $('<div>')
  	.html("<li> Nation : " + program.nation +"</li>  <li> Industry :"+program.industry+"</li>  <li> Overview :<br>" + program.overview + "</li> <li> Period : "+ program.period+"</li>")
  	.attr("id", NATION_PREFIX + "_" + FIRM_PREFIX + index)
  	.addClass("hidden");

  programFirm.append(programDetail);

	$('#directory2').append(programFirm,show);

 	show.on("click", displayDetail2);
});

$.each(compactFIRM2, function(index, program) {
  let programFirm2 = $('<li>')
  	.html(program.firm)
    .attr("id", FIRM2_PREFIX + index);

  let show = $('<p>')
  	.text("show more")
    .attr("id", FIRM2_PREFIX + index)
    .addClass("SHOW");


  let programDetail = $('<div>')
  	.html("<li> Nation : " + program.nation +"</li><li> Overview :<br>" + program.overview + "</li> <li> Period : "+ program.period+"</li>")
  	.attr("id", NATION_PREFIX + "_" + FIRM2_PREFIX + index)
  	.addClass("hidden");

  programFirm2.append(programDetail);

	$('#directory3').append(programFirm2,show);

 	show.on("click", displayDetail3);
});

$.each(compactVOLUNTEER, function(index, program) {
  let programVolunteer = $('<li>')
  	.html(program.program)
    .attr("id", VOLUNTEER_PREFIX + index);

  let show = $('<p>')
  	.text("Show more")
    .attr("id", VOLUNTEER_PREFIX + index)
    .addClass("SHOW");


  let programDetail = $('<div>')
  	.html("<li> Nation : " + program.nation +"</li><li> Overview :<br>" + program.overview + "</li> <li> Period : "+ program.period+"</li>")
  	.attr("id", NATION_PREFIX + "_" + VOLUNTEER_PREFIX + index)
  	.addClass("hidden");

  programVolunteer.append(programDetail);

	$('#directory4').append(programVolunteer,show);

 	show.on('click', displayDetail4);
});

function displayDetail1(index) {
	let programUni = $(this);
  let show = $("<p>")
  	.text("show less")
    .attr("id", UNI_PREFIX + index);
  let detailsUniID = NATION_PREFIX + "_" + programUni.attr('id');

  $('#' + detailsUniID).toggle(200);
}

function displayDetail2(index) {
	let programFirm = $(this);
  let show = $("<p>")
  	.text("show less")
    .attr("id", FIRM_PREFIX + index);
  let detailsFirmID = NATION_PREFIX + "_" + programFirm.attr('id');

  $('#' + detailsFirmID).toggle(200);
}

function displayDetail3(index) {
	let programFirm2 = $(this);
  let show = $("<p>")
  	.text("show less")
    .attr("id", FIRM2_PREFIX + index);
  let detailsFirm2ID = NATION_PREFIX + "_" + programFirm2.attr('id');

  $('#' + detailsFirm2ID).toggle(200);
}

function displayDetail4(index) {
	let programVolunteer = $(this);
  let show = $("<p>")
  	.text('show less')
    .attr("id", VOLUNTEER_PREFIX + index);
  let detailsVolunteerID = NATION_PREFIX + "_" + programVolunteer.attr('id');

  $('#' + detailsVolunteerID).toggle(200);
}


//Required Implementation 2
