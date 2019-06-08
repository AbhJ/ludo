var tokA=2;
var tokB=2;
var count=-1;
var num=0;
var id1;
var cur1A;
var cur2A;
var cur1B;
var cur2B;
var c1=0;
var c2=0;
var flag=1;//flag=0 if a has played last time 
//flag = 1 if b had played last time
// function dice(){
// 	if(num!=0)
// 		count++;
// 	num =Math.floor(Math.random() * 6)+1;
// 	var roll=document.getElementById("roller1");
// 	if(count%2==0)
// 		roll.textContent="TURN: PLAYER A "+num;
// 	else 
// 		roll.textContent="TURN: PLAYER B "+num;
	
// 	if (count%2==0) {
		
// 		turnA();
// 		fight();
		

// 	}
// 	else{
		
// 		turnB();
// 		fight();
// 	}
	
// }

function dice(){
	document.getElementById("commentbox").textContent="Comment Box";
	num =Math.floor(Math.random() * 6)+1;
	var roll=document.getElementById("roller1");
	document.getElementById("roller2").textContent=num;
	count++;
	if ((count%2==0)&&(flag==1)) {
		roll.innerHTML="TURN: Player A";	
		document.getElementById("commentbox").textContent="\nThis is player A's turn.\n Player A, hit the token you want to move.\nNote: If no token is on the \n board chance passes to B";
		turnA();
		fight();
		flag=0;

	}
	else if(flag==0){
		roll.innerHTML="TURN: Player B";
		document.getElementById("commentbox").textContent="\nThis is player B's turn.\n Player B, hit the token you want to move.\nNote: If no token is on the \n board chance passes to A";
		turnA();
		turnB();
		fight();
		flag=1;
	}
	
}


function turnA(){
	if ((tokA==1)&&(num==6)) {

		document.getElementById("commentbox").textContent="\nYou can bring token 2A into the board\n or keep moving token 1A";
	}
	else if (tokA==2) {
		lockerA();
	}


}

function move1A(){
	if(count%2==0){
		if ((tokA!=2)&&(cur1A<26)) {
			
			move(num,"tm-token1A",cur1A);
			cur1A=cur1A+num;
		}
		 if (cur1A==26) {
			var pos=document.getElementsByClassName("tm-token1A");
			pos[0].parentNode.removeChild(pos[0]);
			cur1A=0;
			count++;
		}
	}
	else{
		document.getElementById("commentbox").textContent="\nSorry player A, this is player B's turn";
	}
}
function move2A(){
	if (count%2==0) {
		if (tokA==1) {
			lockerA();
		}
		else if ((tokA!=1)&&(cur2A<26)) {
		
			move(num,"tm-token2A",cur2A);
			cur2A=cur2A+num;
		}
		 if (cur2A==26) {cur2A=0;
			var pos=document.getElementsByClassName("tm-token2A");
			pos[0].parentNode.removeChild(pos[0]);
			if ((cur2B<13)||(c2==0)) {
			document.getElementById("commentbox").textContent="\nPLAYER A WINS";
			}
		}
	}
	else{
		document.getElementById("commentbox").textContent="\nSorry player B, this is player A's turn";
	}
}

function turnB(){
	if ((tokB==1)&&(num==6)) {

		document.getElementById("commentbox").textContent="\nYou can bring token 2B into the board\n or keep moving token 1B";
	}
	else if (tokB==2) {
		lockerB();
	}



}
function move1B(){
	if(count%2!=0){
		if ((tokB!=2)&&(cur1B<=26)) {
			if((cur1B+num)<=26){
				move(num,"tm-token1B",cur1B);
				cur1B=cur1B+num;
			}
			else{

				cur1B=cur1B-26;
				move(num,"tm-token1B",cur1B);
				cur1B=cur1B+num;
				c1++;
			}
		}
		if ((cur1B>=13)&&(c1==1)) {
			var pos=document.getElementsByClassName("tm-token1B");
			pos[0].parentNode.removeChild(pos[0]);
			cur1B=0;
			count++;	
		}
		
	}
	else{
		document.getElementById("commentbox").textContent="\nSorry player B, this is player A's turn";
	}
}
function move2B(){
	if(count%2!=0){
		if(tokB==1){
			lockerB();
		}
		else if (cur2B<=26) {
			if((cur2B+num)<=26){
				move(num,"tm-token2B",cur2B);
				cur2B=cur2B+num;
			}
			else{

				cur2B=cur2B-26;
				move(num,"tm-token1B",cur2B);
				cur2B=cur2B+num;
				c2++;
			}
		}
		if ((cur2B>=13)&&(c2==1)) {
			var pos=document.getElementsByClassName("tm-token2B");
			pos[0].parentNode.removeChild(pos[0]);
			cur2B=0;
			count++;
			if (cur2A<26) {
				document.getElementById("commentbox").textContent="\nPLAYER A WINS";
				
			}	
		}
		
	}
	else{
		document.getElementById("commentbox").textContent=document.getElementById("commentbox").textContent+"\nSorry player B, this is player A's turn";
	}
}
function fight(){
	if(cur1A!=0){
		if ((cur1A==cur1B)||(cur1A==cur2B))
		{
			if (count%2==0) {
				var key=document.getElementsByClassName("tm-token1A");
				var pos=document.getElementById("lockera");
				pos.appendChild(key[0]);
				cur1A=0;


			}
			else {
				if(cur1A==cur1B){
					var key=document.getElementsByClassName("tm-token1B");
					var pos=document.getElementById("lockerb");
					pos.appendChild(key[0]);
					cur1B=0;
				}
				else{

					var key=document.getElementsByClassName("tm-token2B");
					var pos=document.getElementById("lockerb");
					pos.appendChild(key[0]);
					cur2B=0;
				}
			}
				
		}
		else if ((cur2A==cur1B)||(cur2A==cur2B)) {
			if (count%2==0) {
				var key=document.getElementsByClassName("tm-token2A");
				var pos=document.getElementById("lockera");
				pos.appendChild(key[0]);
				cur2A=0;
			}
			else {
				if(cur2A==cur1B){
					var key=document.getElementsByClassName("tm-token1B");
					var pos=document.getElementById("lockerb");
					pos.appendChild(key[0]);
					cur1B=0;
				}
				else{
					var key=document.getElementsByClassName("tm-token2B");
					var pos=document.getElementById("lockerb");
					pos.appendChild(key[0]);
					cur2B=0;
				}
			}
				
		}
	}
}
function manualcall(){
	var myform=document.forms.myform;
	num=myform.number.value;
	num=parseInt(num);
}
function lockerA(){
		
	 	if ((num==6)&&(tokA==2)) {
		var key=document.getElementsByClassName("tm-token1A");
		var pos=document.getElementById("1");
		pos.appendChild(key[0]);
		cur1A=1;
		
		tokA--;
		}
		else if ((num==6)&&(tokA==1)) {
		var key=document.getElementsByClassName("tm-token2A");
		var pos=document.getElementById("1");
		pos.appendChild(key[0]);
		cur2A=1;
		
		tokA--;
		}
		/*else if ((num!=6)&&(tokA==2)){
			
		}*/

		
}
function lockerB(){
		
	 	if ((num==6)&&(tokB==2)) {
		var key=document.getElementsByClassName("tm-token1B");
		var pos=document.getElementById("14");
		pos.appendChild(key[0]);
		cur1B=14;
		
		tokB--;
		}
		else if ((num==6)&&(tokB==1)) {
		var key=document.getElementsByClassName("tm-token2B");
		var pos=document.getElementById("14");
		pos.appendChild(key[0]);
		cur2B=14;
		
		tokB--;
		}
		/*else if ((num!=6)&&(tokB==2)){
			continue;
		}*/
		
}
function move(num,classname,id){
	id=num+id;
	var key=document.getElementsByClassName(classname);
	var pos=document.getElementById(id);
	pos.appendChild(key[0]);
	 count++;
	
}



















// var tokA=2;
// var tokB=2;
// var count=-1;
// var num;
// var id1;
// var cur1A=0;
// var cur2A=0;
// var cur1B=0;
// var cur2B=0;
// var c1=0;
// var c2=0;
// alert("WELCOME TO THE GAME =>> LUDO!!");
// function dice(){
// 	manualcall();
// 	if(num==0){
// 	num =Math.floor(Math.random() * 6)+1;}
// 	var roll=document.getElementById("roller1");
	
// 	count++;
// 	if (count%2==0) {
// 		roll.innerHTML="CURRENT TURN:A NUM:"+num;	
// 		turnA();
// 		fight();
		

// 	}
// 	else{
// 		roll.innerHTML="CURRENT TURN:B NUM:"+num;
// 		turnB();
// 		fight();
// 	}
	
// }

// function turnA(){
// 	if ((tokA==1)&&(num==6)) {

// 		alert("you can open tm-token2A");
// 	}
// 	else if (tokA==2) {
// 		lockerA();
// 	}


// }

// function move1A(){
// 	if(count%2==0){
// 		if ((tokA!=2)&&(cur1A<26)) {
			
// 			move(num,"tm-token1A",cur1A);
// 			cur1A=cur1A+num;
// 		}
// 		 if (cur1A==26) {
// 			var pos=document.getElementsByClassName("tm-token1A");
// 			pos[0].parentNode.removeChild(pos[0]);
// 			cur1A=0;
			
// 		}
// 	}
// 	else{
// 		alert("sorry this is player B turn ");
// 	}
// }
// function move2A(){
// 	if (count%2==0) {
// 		if (tokA==1) {
// 			lockerA();
// 		}
// 		else if ((tokA!=1)&&(cur2A<26)) {
		
// 			move(num,"tm-token2A",cur2A);
// 			cur2A=cur2A+num;
// 		}
// 		 if (cur2A==26) {cur2A=0;
// 			var pos=document.getElementsByClassName("tm-token2A");
// 			pos[0].parentNode.removeChild(pos[0]);
// 			if ((cur2B<13)||(c2==0)) {
// 			alert("WINNER IS PLAYER A");
// 			}
// 		}
// 	}
// 	else{
// 		alert("sorry this is player B turn ");
// 	}
// }

// function turnB(){
// 	if ((tokB==1)&&(num==6)) {

// 		alert("you can open token 2B");
// 	}
// 	else if (tokB==2) {
// 		lockerB();
// 	}



// }
// function move1B(){
// 	if(count%2!=0){
// 		if ((tokB!=2)&&(cur1B<=26)) {
// 			if((cur1B+num)<=26){
// 				move(num,"tm-token1B",cur1B);
// 				cur1B=cur1B+num;
// 			}
// 			else{

// 				cur1B=cur1B-26;
// 				move(num,"tm-token1B",cur1B);
// 				cur1B=cur1B+num;
// 				c1++;
// 			}
// 		}
// 		if ((cur1B>=13)&&(c1==1)) {
// 			var pos=document.getElementsByClassName("tm-token1B");
// 			pos[0].parentNode.removeChild(pos[0]);
// 			cur1B=0;
				
// 		}
		
// 	}
// 	else{
// 		alert("SORRY!THIS IS PLAYER A'S TURN ");
// 	}
// }
// function move2B(){
// 	if(count%2!=0){
// 		if(tokB==1){
// 			lockerB();
// 		}
// 		else if (cur2B<=26) {
// 			if((cur2B+num)<=26){
// 				move(num,"tm-token2B",cur2B);
// 				cur2B=cur2B+num;
// 			}
// 			else{

// 				cur2B=cur2B-26;
// 				move(num,"tm-token1B",cur2B);
// 				cur2B=cur2B+num;
// 				c2++;
// 			}
// 		}
// 		if ((cur2B>=13)&&(c2==1)) {
// 			var pos=document.getElementsByClassName("tm-token2B");
// 			pos[0].parentNode.removeChild(pos[0]);
// 			cur2B=0;
// 			count++;
// 			if (cur2A<26) {
// 				alert("PLAYER B WON THE GAME");
				
// 			}	
// 		}
		
// 	}
// 	else{
// 		alert("SORRY!THIS IS PLAYER A'S TURN ");
// 	}
// }
// function fight(){
// 	if(cur1A!=0){
// 		if ((cur1A==cur1B)||(cur1A==cur2B))
// 		{
// 			if (count%2==0) {
// 				var key=document.getElementsByClassName("tm-token1A");
// 				var pos=document.getElementById("lockera");
// 				pos.appendChild(key[0]);
// 				cur1A=0;


// 			}
// 			else {
// 				if(cur1A==cur1B){
// 					var key=document.getElementsByClassName("tm-token1B");
// 					var pos=document.getElementById("lockerb");
// 					pos.appendChild(key[0]);
// 					cur1B=0;
// 				}
// 				else{

// 					var key=document.getElementsByClassName("tm-token2B");
// 					var pos=document.getElementById("lockerb");
// 					pos.appendChild(key[0]);
// 					cur2B=0;
// 				}
// 			}
				
// 		}
// 		else if ((cur2A==cur1B)||(cur2A==cur2B)) {
// 			if (count%2==0) {
// 				var key=document.getElementsByClassName("tm-token2A");
// 				var pos=document.getElementById("lockera");
// 				pos.appendChild(key[0]);
// 				cur2A=0;
// 			}
// 			else {
// 				if(cur2A==cur1B){
// 					var key=document.getElementsByClassName("tm-token1B");
// 					var pos=document.getElementById("lockerb");
// 					pos.appendChild(key[0]);
// 					cur1B=0;
// 				}
// 				else{
// 					var key=document.getElementsByClassName("tm-token2B");
// 					var pos=document.getElementById("lockerb");
// 					pos.appendChild(key[0]);
// 					cur2B=0;
// 				}
// 			}
				
// 		}
// 	}
// }
// function manualcall(){
// 	var myform=document.forms.myform;
// 	num=myform.number.value;
// 	num=parseInt(num);
// }
// function lockerA(){
		
// 	 	if ((num==6)&&(tokA==2)) {
// 		var key=document.getElementsByClassName("tm-token1A");
// 		var pos=document.getElementById("1");
// 		pos.appendChild(key[0]);
// 		cur1A=1;
		
// 		tokA--;
// 		}
// 		else if ((num==6)&&(tokA==1)) {
// 		var key=document.getElementsByClassName("tm-token2A");
// 		var pos=document.getElementById("1");
// 		pos.appendChild(key[0]);
// 		cur2A=1;
		
// 		tokA--;
// 		}
// 		/*else if ((num!=6)&&(tokA==2)){
			
// 		}*/

		
// }
// function lockerB(){
		
// 	 	if ((num==6)&&(tokB==2)) {
// 		var key=document.getElementsByClassName("tm-token1B");
// 		var pos=document.getElementById("14");
// 		pos.appendChild(key[0]);
// 		cur1B=14;
		
// 		tokB--;
// 		}
// 		else if ((num==6)&&(tokB==1)) {
// 		var key=document.getElementsByClassName("tm-token2B");
// 		var pos=document.getElementById("14");
// 		pos.appendChild(key[0]);
// 		cur2B=14;
		
// 		tokB--;
// 		}
// 		/*else if ((num!=6)&&(tokB==2)){
// 			continue;
// 		}*/
		
// }
// function move(num,classname,id){
// 	id=num+id;
// 	var key=document.getElementsByClassName(classname);
// 	var pos=document.getElementById(id);
// 	pos.appendChild(key[0]);
	 
	
// }


