$(document).ready(function() {
	$('#start').click(() => {
		console.log('I clicked the button');
		let p1 = $('#p1').val();
		let p2 = $('#p2').val();
		let bothPlayers = [];
		let player1 = [];
		let player2 = [];


















  const loadPlayer1 = () => {
      return new Promise((resolve, reject) => {
        $.ajax("https://teamtreehouse.com/" + p1 + ".json")
        .done((data1) => resolve(data1))
        .fail((error1) => reject(error1));
        });
  };

   const loadPlayer2 = () => {
      return new Promise((resolve, reject) => {
          $.ajax("https://teamtreehouse.com/" + p2 + ".json")
          .done((data2) => resolve(data2))
          .fail((error2) => reject(error2));
      });
  };

Promise.all([loadPlayer1(), loadPlayer2()])
	.then((players) =>{
			console.log(players);
			}).catch((errors) =>{
			console.log(errors);
		})
		console.log("players", bothPlayers);
	});

//   loadPlayer1().then((player1) => {
//     player1.forEach((player) => {
//       player1.push(player);
//     });
//     getInput();
// });

//     loadPlayer2().then((player2) => {
//     player2.forEach((player) => {
//       player2.push(player);
//     });

// });



 });
