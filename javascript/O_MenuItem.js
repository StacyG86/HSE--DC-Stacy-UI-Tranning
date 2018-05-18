$(function() {
  $(".A_MenuItemButtom").click(function(e) {
    e.preventDefault();

    let container = $(e.target).closest(".O_MenuItem");

    if (container.hasClass("active")) {
      container.removeClass("active");
    } else {
      $(".O_MenuItem").removeClass("active");
      container.addClass("active");
    }

  });

  $("#sidebarToggle").click(function(e) {
    e.preventDefault()
    $(e.target).toggleClass("compact")
    $(".T_SinglePageUI").toggleClass("compact")
  });
});
