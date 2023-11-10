$(document).ready(function(){
  //materiabox init
  $('.materialboxed').materialbox({
    inDuration: 500,
    outDuration: 500
  });

  //slider init
  $('.slider').slider({
    indicators: true,
    height: 500,
    duration: 200,
    intercval: 200
  });
  $('.modal').modal();

  // Tabs init
  $('.tabs').tabs();

  // Sidenav init
  $('.sidenav').sidenav();

  // Dropdown init
  $('.dropdown-trigger').dropdown();

  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false,
    toolbarEnabled: true
  });

  // Scrollspy init
  $('.scrollspy').scrollSpy();
});