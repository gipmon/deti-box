$(document).ready(function() {
  var course;

  jQuery.ajax({
    url: "links.json",
    async: false,
    cache: false,
    dataType: "json",
    success: function(data){
      course = data;
    }
  });

  var ative = true;

  var yearAtive = course.years[0].id;
  setSecreen(yearAtive);

  for (var i = 0; i < course.years.length; i++){
    if(ative){
      $("#yearsNavBar").append("<li class=\"active\"><a href=\"#"+course.years[i].id+"\">"+course.years[i].year+"</a></li>")
      ative = false;
    }else{
      $("#yearsNavBar").append("<li><a href=\"#"+course.years[i].id+"\">"+course.years[i].year+"</a></li>");
    }
  }

  $('li > a').click(function() {
    $("li.active").removeClass("active");
    $(this).parent().addClass('active');
    var ative = $(this).attr("href").replace("#", "");
    setSecreen(ative);
  });

  function setSecreen(idAtive){
    for (var i = 0; i < course.years.length; i++) {
      if(course.years[i].id==idAtive){
        $("#displayHtml").hide();
        $("#displayHtml").html("");
        var htmlTo = "";
        for(var j = 0; j < course.years[i].subjects.length; j++){
            htmlTo += "<div class=\"col-md-4 col-sm-6\"><div class=\"panel panel-default\">";
            htmlTo += "<div class=\"panel-heading\"><h4>" + course.years[i].subjects[j].name + "</h4></div>";
            htmlTo += "<div class=\"panel-body\"><div class=\"list-group\">";

            for(var k=0; k < course.years[i].subjects[j].links.length; k++){
              htmlTo += "<a href=\"#showLinkModal\" rel=\"course\" url=\"" + course.years[i].subjects[j].links[k].url + "\" role=\"button\" data-toggle=\"modal\" class=\"list-group-item\">" + course.years[i].subjects[j].links[k].name + "</a>";
            }

            htmlTo += "</div></div></div></div>";
        }

        $("#displayHtml").append(htmlTo);
        $("#displayHtml").slideDown();
        listener();
        break;
      }
    }
  }

  function listener(){
    $("a[rel='course']").click(function(){
      $("#linkName").text($(this).text());
      $("#hrefLink").text($(this).attr("url").substring(0,23)+"...");
      $("#hrefLink").attr("href", $(this).attr("url"));
      console.log($(this));
    });
  }
});
