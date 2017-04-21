$(document).ready(function() {
	$('#start').click(() => {
		console.log('I clicked the button');
		let p1 = $('#p1').val();
		let p2 = $('#p2').val();
		let bothPlayers = [];
		let player1 = [];
		let player2 = [];

		const seperatePlayers = () =>{
			$.each(bothPlayers, (index, val) => {
				console.log('ind',index);
				console.log('val',val);
				if(index === 0){
					console.log('I made it past the if');
					player1.push(val);
				}else if(index === 1){
					player2.push(val);
				}
					console.log('player1 array', player1);
					console.log('player2 array', player2);
				}
			});
		};

















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
			bothPlayers = players;
			console.log("this is the data being pushed", players);
			console.log("this is the master array players", bothPlayers);
			seperatePlayers();
			}).catch((errors) => {
				alert(errors);
			console.log(errors);
		});
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
