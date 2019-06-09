var tokA=2;
var tokB=2;
var count=-1;
var num=0;
var id1;
var posit1A;
var posit2A;
var posit1B;
var posit2B;
var c1=0;
var c2=0;
var flag=1;//flag=0 if a has played last time 
//flag = 1 if b had played last time



function turnA(){
	if ((tokA==1)&&(num==6)) {

		document.getElementById("commentbox").textContent="\nYou can bring the second token of A into the board\n or keep moving the first token of A";
	}
	else if (tokA==2) {
		lockerA();
	}


}

function move1A(){
	if(count%2==0){
		if ((tokA!=2)&&(posit1A<26)) {
			
			move(num,"roundtoken1A",posit1A);
			posit1A=posit1A+num;
		}
		 if (posit1A==26) {
			var pos=document.getElementsByClassName("roundtoken1A");
			pos[0].parentNode.removeChild(pos[0]);
			posit1A=0;
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
		else if ((tokA!=1)&&(posit2A<26)) {
		
			move(num,"roundtoken2A",posit2A);
			posit2A=posit2A+num;
		}
		 if (posit2A==26) {posit2A=0;
			var pos=document.getElementsByClassName("roundtoken2A");
			pos[0].parentNode.removeChild(pos[0]);
			if ((posit2B<13)||(c2==0)) {
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

		document.getElementById("commentbox").textContent="\nYou can bring the second token of B into the board\n or keep moving the first token of B";
	}
	else if (tokB==2) {
		lockerB();
	}



}

function hitroll(){
	document.getElementById("commentbox").textContent="Comment Box";
	num =Math.floor(Math.random() * 6)+1;
	var roll=document.getElementById("roller1");
	document.getElementById("roller2").textContent=num;
	count++;
	if ((count%2==0)&&(flag==1)) {
		roll.innerHTML="TURN: Player A";	
		document.getElementById("commentbox").textContent="\nThis is player A's turn.\n Player A, hit the token you want to move.\nNote: If no token is on the \n board chance passes to B";
		turnA();
		go_on();
		flag=0;

	}
	else if(flag==0){
		roll.innerHTML="TURN: Player B";
		document.getElementById("commentbox").textContent="\nThis is player B's turn.\n Player B, hit the token you want to move.\nNote: If no token is on the \n board chance passes to A";
		turnB();
		go_on();
		flag=1;
	}
	
}
function move1B(){
	if(count%2!=0){
		if ((tokB!=2)&&(posit1B<=26)) {
			if((posit1B+num)<=26){
				move(num,"roundtoken1B",posit1B);
				posit1B=posit1B+num;
			}
			else{

				posit1B=posit1B-26;
				move(num,"roundtoken1B",posit1B);
				posit1B=posit1B+num;
				c1++;
			}
		}
		if ((posit1B>=13)&&(c1==1)) {
			var pos=document.getElementsByClassName("roundtoken1B");
			pos[0].parentNode.removeChild(pos[0]);
			posit1B=0;
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
		else if (posit2B<=26) {
			if((posit2B+num)<=26){
				move(num,"roundtoken2B",posit2B);
				posit2B=posit2B+num;
			}
			else{

				posit2B=posit2B-26;
				move(num,"roundtoken1B",posit2B);
				posit2B=posit2B+num;
				c2++;
			}
		}
		if ((posit2B>=13)&&(c2==1)) {
			var pos=document.getElementsByClassName("roundtoken2B");
			pos[0].parentNode.removeChild(pos[0]);
			posit2B=0;
			count++;
			if (posit2A<26) {
				document.getElementById("commentbox").textContent="\nPLAYER B WINS";
				
			}	
		}
		
	}
	else{
		document.getElementById("commentbox").textContent=document.getElementById("commentbox").textContent+"\nSorry player B, this is player A's turn";
	}
}
function go_on(){
	if(posit1A!=0){
		if ((posit1A==posit1B)||(posit1A==posit2B))
		{
			if (count%2==0) {
				var key=document.getElementsByClassName("roundtoken1A");
				var pos=document.getElementById("lockera");
				pos.appendChild(key[0]);
				posit1A=0;


			}
			else {
				if(posit1A==posit1B){
					var key=document.getElementsByClassName("roundtoken1B");
					var pos=document.getElementById("lockerb");
					pos.appendChild(key[0]);
					posit1B=0;
				}
				else{

					var key=document.getElementsByClassName("roundtoken2B");
					var pos=document.getElementById("lockerb");
					pos.appendChild(key[0]);
					posit2B=0;
				}
			}
				
		}
		else if ((posit2A==posit1B)||(posit2A==posit2B)) {
			if (count%2==0) {
				var key=document.getElementsByClassName("roundtoken2A");
				var pos=document.getElementById("lockera");
				pos.appendChild(key[0]);
				posit2A=0;
			}
			else {
				if(posit2A==posit1B){
					var key=document.getElementsByClassName("roundtoken1B");
					var pos=document.getElementById("lockerb");
					pos.appendChild(key[0]);
					posit1B=0;
				}
				else{
					var key=document.getElementsByClassName("roundtoken2B");
					var pos=document.getElementById("lockerb");
					pos.appendChild(key[0]);
					posit2B=0;
				}
			}
				
		}
	}
}
function move(num,classname,id){
	id=num+id;
	var key=document.getElementsByClassName(classname);
	var pos=document.getElementById(id);
	pos.appendChild(key[0]);
	 count++;
}
function lockerA(){
		
	 	if ((num==6)&&(tokA==2)) {
			var key=document.getElementsByClassName("roundtoken1A");
			var pos=document.getElementById("1");
			pos.appendChild(key[0]);
			posit1A=1;
			
			tokA--;
		}
		else if ((num==6)&&(tokA==1)) {
			var key=document.getElementsByClassName("roundtoken2A");
			var pos=document.getElementById("1");
			pos.appendChild(key[0]);
			posit2A=1;
			
			tokA--;
		}
}
function lockerB(){
		
	 	if ((num==6)&&(tokB==2)) {
			var key=document.getElementsByClassName("roundtoken1B");
			var pos=document.getElementById("14");
			pos.appendChild(key[0]);
			posit1B=14;
			
			tokB--;
		}
		else if ((num==6)&&(tokB==1)) {
			var key=document.getElementsByClassName("roundtoken2B");
			var pos=document.getElementById("14");
			pos.appendChild(key[0]);
			posit2B=14;
			
			tokB--;
		}
		
}
