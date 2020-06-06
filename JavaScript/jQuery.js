const ID_NAME = "name";
const ID_HIDDEN = "hidden";


const PROGRAMS = [
	{name: "Harvard University", nation: "U.S.A.", sort: "Business", overview: "A private Ivy League research university in Cambridge, Massachusetts. <br> Harvard University is the United States' oldest institution of higher learning and one of the most prestigious in the world.", purpose: "To know the latest knowledges and business culture by learning business at one of the highest level university in the commercially biggest country.", period: "6 months (1 semester)", url: '"https://www.harvard.edu/"', image1:'"./images/Harvard_University_Library.jpg"', image2:'"./images/Harvard_University_campus.jpg"'},
  {name: "California Institute of Technology", nation: "U.S.A", sort: "Science", overview:"A private research university in California. <br> California Institute of Technology is founded in 1891 and one of the highest ranked university in scientific fields.", purpose: "To know the latest technology and the atomosphere of the university by learning science at one of the highest level university in the scientifically biggest country.", period:"6 months (1 semester)", image1:'"./images/Caltech1.jpg"', image2:'"./images/Caltech2.jpg"'},
	{name: "PwC", nation: "U.K.", sort: "Accounting", overview: "PwC is the biggest accounting firm in the world. Its main businesses are audit, taxation business, and consulting.", purpose:"To learn the top business skills, corporate culture, and how to do business getting along with by working at the top firm in the industry." ,period: "6 months", image1:'"./images/PwC1.jpg"', image2:'"./images/PwC2.jpg"'},
  {name: "Google", nation: "U.S.A", sort: "IT", overview: "Google is the biggest IT firm in the world. Its main businesses are development and sale of Internet-related products, digital appliance, and softwares.", purpose: "To learn the top business skills, corporate culture, and how to create products getting along with cultures by working at the top firm in the industry.",period:"6 months", image1:'"./images/Google1.jpg"', image2:'"./images/Google2.jpg"'},
	{name: "Grameen Bank", nation: "Bangladesh", sort: "Finance", overview: "Grameen Bank　is a microfinance organisation and community development bank founded in Bangladesh. It makes small loans to the impoverished without requiring collateral to make them independent.",purpose: "To learn the business skills, business mindset, and severe reality by working at the firm in a developing country.", period: "6 months", image1:'"./images/Grameen_Bank_image1.jpg"', image2:'"./images/Grameen_Bank_image2.jpg"'},
  {name: "Toyota Tsusho Africa", nation: "South Africa", sort: "Trading", overview: ". Toyota Tsusho Afria is the African subsidiary of Japan-based trading company. It is focusing on renewable energy, mining and agriculture development to benefit Africa with the businesses.",purpose: "To learn the business skills, business mindset, and severe reality by working at the firm in a developing country.", period:"6 months", image1:'"./images/Toyota_image1.jpg"', image2:'"./images/Toyota_image2.jpg"'},
	{name: "Teaching at a high school", nation: "Philippine", sort: "education", overview: "Participants will teach local high school students about your homeculture. Through communicating with them closely, you will know how different your culture and environment is from the world severe reality", purpose: "To learn severe reality and how to communicate with people who have a different culture and background by volunteering in a developing country.",period: "2 weeks", image1:'"./images/Philippine1.jpg"', image2:'"./images/Philippine2.jpg"'},
  {name: "Environmental conservation at NPO", nation: "Brazil", sort: "environmentology", overview:"The deforestation of Amazon is a serious problem.Through going and volunteering there, you will know the reality behind the mass consumpition society.",purpose: "To learn severe reality and how to communicate with people who have a different culture and background by volunteering in a developing country.", period:"2 weeks", image1:'"./images/Amazon1.jpg"', image2:'"./images/Amazon2.jpg"'}
];

let compactProgram = PROGRAMS.map(function(program) {
	return {
  	name: program.name,
  	nation: program.nation,
    sort: program.sort,
    overview: program.overview,
		purpose: program.purpose,
    period: program.period,
		image1: program.image1,
		image2: program.image2
    }
});

$.each(compactProgram, function(index, program) {
  let programName = $('<li>')
  	.html(program.name)
    .attr("id", ID_NAME + index);
	//	.addClass("Basic")

	let programDetail = $('<div>')
	 	.html("<li> Nation : " + program.nation +"</li><li> Sort : " + program.sort + "</li> <li>Overview :<br>" + program.overview + "</li> <li> Purpose : <br>" + program.purpose +"</li><li>Period : "+ program.period+"</li> <img src="+ program.image1 +'>' + '<img src='+ program.image2 +' >')
	 	.attr("id", ID_HIDDEN + "_" + ID_NAME + index)
	  .addClass("hidden");

  let show = $('<button>')
  	.html("show more")
    .attr("id", ID_NAME + index)
	//	.attr("onclick","myFunction()")
    .addClass("SHOW");

  programName.append(programDetail);
  if ((program.name == "PwC")||(program.name == "Apple")){
  $('#directory2').append(programName,show);
} else if ((program.name == "Harvard University")||(program.name == "California Institute of Technology")){
  $('#directory1').append(programName,show);
} else if ((program.name == "Grameen Bank")||(program.name == "Toyota Tsusho Africa")){
  $('#directory3').append(programName,show);
} else if ((program.name == "Teaching at a high school")||(program.name == "Environmental conservation at NPO")){
  $('#directory4').append(programName,show);
}

  show.on('click', displayDetail);
/*
	function myFunction(){
		var basicText = document.getElementByClassName("Basic");
		var moreText = document.getElementByClassName("hidden");
		var btnText = document.getElementByClassName("SHOW");

		if (basicText.style.display === "none"){
			basicText.style.display = "inline";
    	btnText.innerHTML = "Read more";
    	moreText.style.display = "none";
		} else {
    	basicText.style.display = "none";
    	btnText.innerHTML = "Read less";
    	moreText.style.display = "inline";
  	}
	}*/

});

function displayDetail(index) {
	let programName = $(this);
  let detailProgramID = ID_HIDDEN + "_" + programName.attr('id');
  $('#' + detailProgramID).toggle(200);
}



//Required Implementation 2
/*
$("#keyword").on("input", searchEvent);

function searchEvent() {
  const results = [];
  const inputText = $(this).val();

  if (inputText) {
    $("#programs").each((index, name) => {
      if (name.textContent.indexOf(inputText) !== -1) {
        results.push(name.textContent);
      }
    });

    $("#info").empty();

    $.each(results, (index, name) => {
      $("#info").append("<li>" + name + "</li>");
    });
  }
}
*/

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
