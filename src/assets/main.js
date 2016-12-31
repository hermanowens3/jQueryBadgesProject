$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/hermanowens3.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      if (!response || !response.courses || !response.courses.completed) {
        return false;
      }

      var completed =  response.courses.completed;

      $('#badges').html(
        $.map(completed, function (course) {
          var html = '';

          html += '<div class="course">';
          html += '<h3>' + course.title + '</h3>';
          html += '<img src="' + course.badge + '" title="' + course.title + '" />';
          html += '<a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a>';
          html += '</div>';

          return html;
        })
      );
    }
  });
});
