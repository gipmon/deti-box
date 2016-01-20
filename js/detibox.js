$(document).ready(function() {
  var course;

  jQuery.ajax({
    url: "/links.json",
    async: false,
    cache: false,
    dataType: "json",
    success: function(data){
      course = data;
    }
  });

  for (var i = 0; i < course.years.length; i++) {
    array[i]
  }
  <div class="col-md-4 col-sm-6">
       <div class="panel panel-default">
          <div class="panel-heading"><h4>Programação II</h4></div>
          <div class="panel-body">
            <ul class="list-group">
            <li class="list-group-item">Modals</li>
            <li class="list-group-item">Sliders / Carousel</li>
            <li class="list-group-item">Thumbnails</li>
            </ul>
          </div>
       </div>
  </div>

  console.log( course );
});
