const fetchNameData = function () {
  let input = $("#team-input").val();

  $.get(`teams/${input}`, function (players) {
    players.forEach((element) => {
      $(".main").append(`<div class="player">
        
            <h2>${element.firstName} ${element.lastName}</h2>
            <img src="https://nba-players.herokuapp.com/players/${element.lastName}/${element.firstName}">
            
       `);
    });
  });
};
