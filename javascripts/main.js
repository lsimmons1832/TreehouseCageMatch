$(document).ready(function() {
	$('#start').click(() => {
		// console.log('I clicked the button');
		let p1 = $('#p1').val();
		let p2 = $('#p2').val();
		let bothPlayers = [];
		let player1 = [];
		let player2 = [];
		let isWinner = "";
		let totalPointsP1 = [];
		let totalPointsP2 = [];

		const seperatePlayers = () =>{
			$.each(bothPlayers, (index, val) => {
				if(index === 0){
					player1.push(val);
				}else if(index === 1){
					player2.push(val);
				}
			});
			getPoints();
		};

  const getPoints = () => { 
  	for (var i = 0; i < player1.length; i++) {
  		totalPointsP1.push(player1[i].points.total);
  	}
  	// console.log('totalPointsP1', totalPointsP1);
  	for (var i = 0; i < player2.length; i++) {
  		totalPointsP2.push(player2[i].points.total);
  	}
  	// console.log('totalPointsP2', totalPointsP2);
  	determineWinner();
  };

		const determineWinner = () =>{
			for (var i = 0; i < player1.length; i++) {
				var op1 = player1[i].name;
				for (var j = 0; j < player2.length; j++) {
					var op2 = player2[j].name;
				}
			}
  		if(totalPointsP1> totalPointsP2){
  			isWinner = op1;
  		}else{
  			isWinner = op2;
  		}
  		// console.log("player1", totalPointsP1.total);
  		// console.log("player2", totalPointsP2.total);
  		// console.log("who is the winner?", isWinner);
		}















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
			seperatePlayers();
			}).catch((errors) => {
				alert(errors);
			console.log(errors);
		});
	});



});
