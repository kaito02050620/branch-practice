//todo add
$("#addTodo").click(function () {
  const inputTodo = $("input").val();
  $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

  $("input").val("");
});

//todo delete
$(document).on("change", "input[type='checkbox']", function () {
  if ($(this).is(":checked")) {
    $(this).parent().css("text-decoration", "line-through");
    $(this).parent().css("color", "red");
  } else {
    $(this).parent().css("text-decoration", "none");
    $(this).parent().css("color", "black");
  }
});
