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
		let p1Badge = [];
		let p2Badge = [];
		let op1b = "";
	let op2b = "";

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
  		p1Badge.push(player1[i].badges);
  	}
  	// console.log('totalPointsP1', totalPointsP1);
  	for (var j = 0; j < player2.length; j++) {
  		totalPointsP2.push(player2[j].points.total);
  		p2Badge.push(player1[j].badges);
  	}
  	// console.log('totalPointsP2', totalPointsP2);
  	determineWinner();
  };


		const determineWinner = () =>{
			//determine winner name
			for (var i = 0; i < player1.length; i++) {
				var op1 = player1[i].name;
				 op1b = player1[i].gravatar_url;
				for (var j = 0; j < player2.length; j++) {
					var op2 = player2[j].name;
					 op2b = player2[i].gravatar_url;
			  		if(totalPointsP1> totalPointsP2){
			  			isWinner = op1;
			  		}else{
			  			isWinner = op2;
			  		}
				}
			}
			// //get winner badge
			// for (var k = 0; k < p1Badge.length; k++) {
			// 	op1b = p1Badge[k].icon_url;
			// }
			// for (var l = 0; l < p2Badge.length; l++) {
			// 	op2b = p2Badge[l].icon_url;
			// }
  		console.log("player1", player1);
  	// 	// console.log("player2", totalPointsP2.total);
  	// 	// console.log("who is the winner?", isWinner);
  		writeToDom();
		};

		const writeToDom = () => {
			$('.container').append(`<h1>`+ isWinner + ` Wins! <h1>`);
			$('.img1').attr('src', op1b);
			$('.img2').attr('src', op2b);
			$('.op1').append(totalPointsP1);
			$('.op2').append(totalPointsP2);
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
			seperatePlayers();
			}).catch((errors) => {
				alert(errors);
			console.log(errors);
		});
	});



});
