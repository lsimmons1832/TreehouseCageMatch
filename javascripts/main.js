$(document).ready(function() {
	$('#start').click(() => {
		console.log('I clicked the button');
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
			//determineWinner();
			getPoints();
		};

		// const determineWinner = () =>{
		// 	const totalPointsP1 = player1["points"];
	 //  	const totalPointsP2 = player2["points"];
  // 		if(totalPointsP1 > totalPointsP2){
  // 			isWinner = player1.name;
  // 		}else{
  // 			isWinner = player2.name;
  // 		}
		// }

  const getPoints = () => { 
  	player1.forEach((value)=>{
  		player1.points = [];
  		totalPointsP1.push(value);
  	});
  	console.log(totalPointsP1);
    // const totalPointsP1 = player1["points"];
    // const p1Number = totalPointsP1.indexOf(points.total);
    // const totalPointsP2 = player2["points"];
    // const p2Number = totalPointsP2.indexOf(points.total);  
    // if (p1Number > p2Number){ 
    //   isWinner = player1.name;
    // } else {
    //   isWinner = player2.name;
    // }
  };
// console.log("show me player1", player1);
// console.log("show me player2", player2);
// console.log("who wins?", isWinner);














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
