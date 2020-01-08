
const app = document.getElementById('root')
//var customerName = prompt("Please enter your name", "<name goes here>");


function load()
	{
	var request=new XMLHttpRequest()
	url='https://randomuser.me/api/?results=100';
	request.open('GET',url,true)
        request.onload=function()
	{   
	       var data=JSON.parse(this.response)
	       var dob=data['results'];
	       for(i=0;i<dob.length;i++)
	       {
	        const abc=dob[i]
                UI.addelm(abc);
      	       }
	} 
	request.send()
	}


var UI={}


function card()
	{
	const card =document.createElement('div')
	card.setAttribute('class','card')

	}


function details()
	{
	const details=document.createElement('div')
	details.setAttribute('class','details')   
	}


const addImage = function(card,abc)
{
 	if (abc.picture.large) {
 		   const img = document.createElement('div')
 		   img.setAttribute('class', 'img')
 		   //const imgdiv = document.createElement('div')
 		   //imgdiv.setAttribute('class','imgdiv')
 	  	   img.src = abc.picture.large
                   //imgdiv.appendChild(image)
   		   card.appendChild(img)
  				}
  
  	else {
    		const img = document.createElement('div')
    		img.setAttribute('class', 'img')
    		img.textContent = abc.name.first.charAt(0) + abc.name.last.charAt(0);
   		card.appendChild(img);

  	     }
}


function name(abc)
{
	  const p=document.createElement('p')
	  p.setAttribute('class',p)
	  p.textContent=abc.name.first + " "+ abc.name.last;
	  //p.setAttribute('class','name')
	  //b.setAttribute('class','email')
  
}


function addFirstName(abc)
{
	  const f=document.createElement('f')
	  f.setAttribute('class',f)
	  f.textContent=abc.name.first;
}


function addLastName(abc)
{
	   const l=document.createElement('f')
	   l.setAttribute('class',l)
	   l.textContent=abc.name.first;
}


UI.addelm=function(abc)
{ 
	    card();
	    details();
	    addImage(card,abc);
	    name(abc);
	    addFirstName(abc); 
	    addLastName(abc); 
	    addEmail(abc,details); 
	    app.append(card)
    	    details.appendChild(p)
    	   //card.appendChild(img)
	    card.appendChild(details)    
}


function addEmail(abc,details)
{
	    const b=document.createElement('b');
	    b.setAttribute('class','b')
	    b.textContent=abc.email 
	    details.appendChild(b);
}


function onScroll()
{
	  window.onscroll = function(load)
	 {
	    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
		 {
	        this.load();
		 }
	 };
}
onScroll();

module.exports={addEmail,addImage,card,details,name,addFirstName,addLastName}
    
 
