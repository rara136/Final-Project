const ID_NAME = "name";
const ID_HIDDEN = "hidden";


const PROGRAMS = [
	{name: "Harvard University", nation: "U.S.A.", sort: "Business", overview: "A private Ivy League research university in Cambridge, Massachusetts. <br> Harvard University is the United States' oldest institution of higher learning and one of the most prestigious in the world.", period: "6 months (1 semester)", image1:'""', image2:'""'},
  {name: "Oxford University", nation: "U.K.", sort: "Science", overview:"A public research university in Oxford, England. <br> Oxford  University is the the third Oldest university in the world and the highest ranked university in THE ranking four years in row.", period:"6 months (1 semester)", image1:'"./images/oxford-uni.jpg"', image2:'"./images/oxforduni-dining.jpg"'},
	{name: "PwC", nation: "U.K.", sort: "Accounting", overview: "PwC is the biggest accounting firm in the world. Its main businesses are audit, taxation business, and consulting.", period: "6 months", image1:'""', image2:'""'},
  {name: "Apple", nation: "U.S.A", sort: "IT", overview: "Apple is the biggest IT firm in the world. Its main businesses are development and sale of Internet-related products, digital appliance, and softwares.", period:"6 months", image1:'""', image2:'""'},
	{name: "Grameen Bank", nation: "Bangladesh", sort: "Finance", overview: "Grameen Bank　is a microfinance organisation and community development bank founded in Bangladesh.  It makes small loans to the impoverished without requiring collateral to make them independent", period: "6 months", image1:'""', image2:'""'},
  {name: "Toyota Tsusho Africa", nation: "South Africa", sort: "Trading", overview: ". Toyota Tsusho Afria is the African subsidiary of Japan-based trading company. It is focusing on renewable energy, mining and agriculture development to benefit Africa with the businesses.", period:"6 months", image1:'""', image2:'""'},
	{name: "Teaching at elementary school", nation: "Philipine", sort: "education", overview: "Participants will teach local elementary students about your homeculture. Through communicating with them closely, you will know how different your culture and environment is from the world reality", period: "2 weeks", image1:'""', image2:'""'},
  {name: "Environmental conservation at NPO", nation: "Brazil", sort: "environmentology", overview:"The deforestation of Amazon is a serious problem.Through going and volunteering there, you will know the reality behind the mass consumpition society.", period:"2 weeks", image1:'""', image2:'""'}
];

let compactProgram = PROGRAMS.map(function(program) {
	return {
  	name: program.name,
  	nation: program.nation,
    sort: program.sort,
    overview: program.overview,
    period: program.period,
		image1: program.image1,
		image2: program.image2
    }
});

$.each(compactProgram, function(index, program) {
  let programName = $('<li>')
  	.html(program.name)
    .attr("id", ID_NAME + index);

  let show = $('<button>')
  	.text("show more")
    .attr("id", ID_NAME + index)
    .addClass("SHOW");

  let programDetail = $('<div>')
  	.html("<li> Nation : " + program.nation +"</li><li> Sort: " + program.sort + "</li> <li>Overview :<br>" + program.overview + "</li> <li> Period : "+ program.period+"</li> " + '<img src='+ program.image1 +'>' + '<img src='+ program.image2 +' >')
  	.attr("id", ID_HIDDEN + "_" + ID_NAME + index)
    .addClass("hidden");

  programName.append(programDetail);
  if ((program.name == "PwC")||(program.name == "Apple")){
  $('#directory2').append(programName,show);
} else if ((program.name == "Harvard University")||(program.name == "Oxford University")){
  $('#directory1').append(programName,show);
} else if ((program.name == "Grameen Bank")||(program.name == "Toyota Tsusho Africa")){
  $('#directory3').append(programName,show);
} else if ((program.name == "Teaching at elementary school")||(program.name == "Environmental conservation at NPO")){
  $('#directory4').append(programName,show);
}

  show.on('click', displayDetail);

});

function displayDetail(index) {
	let programName = $(this);
  let detailProgramID = ID_HIDDEN + "_" + programName.attr('id');
  $('#' + detailProgramID).toggle(200);
}



//Required Implementation 2


//Additional Implementations
//The button which makes user return to the top.
$(function() {
    var topBtn = $('.to-top');

    topBtn.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {

            topBtn.fadeIn();
        } else {

            topBtn.fadeOut();
        }
    });

    $(window).scroll(function () {
        var height = $(document).height();
        var position = $(window).height() + $(window).scrollTop();
        var footer = $("footer").height();
        if ( height - position  < footer ) {
            topBtn.css({
              position : "absolute",
              top : -100
            });
        } else {
            topBtn.css({
              position : "fixed",
              top: "auto"
            });
        }
    });

    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
