
function validateUser() {
    document.getElementById("msg1").innerHTML='';
    document.getElementById("msg2").innerHTML='';
	var userid = document.getElementById('username');
	var password = document.getElementById('password');
    
  var f=ValidateEmail(userid);
  if(f==0)
   {
    document.getElementById("msg1").innerHTML+="Enter a valid user id";
    }
    
    var l=ValidatePassword(password)
    if(l==0)
    {
      document.getElementById("msg2").innerHTML+="Enter password ranging 6-15 word";
    }

    if(f==1)
    {
        if(l==1)
        {
        alert("Login Successfull");
        }
    }
    
}

function register() {
    document.getElementById("msg3").innerHTML='';
    document.getElementById("msg4").innerHTML='';
    document.getElementById("msg5").innerHTML='';

	var username= document.getElementById('username');
	var email= document.getElementById('email');
	var password=document.getElementById('password');

   var q=ValidateUsername(username);
   if(q==0)
   {
    document.getElementById("msg3").innerHTML+="Enter a valid username"; 
   }

    var a=ValidateEmail(email);
    if(a==0)
    {
    document.getElementById("msg4").innerHTML+="Enter a valid user id";
    }

    var p=ValidatePassword(password)
    if(p==0)
    {
      document.getElementById("msg5").innerHTML+="Enter password ranging 6-15 word";
    }

  if(q==1)
  {
    if(a==1)
    {
        if(p==1)
        {
            alert("Signup Successfull");
        }
    }
  }
    
    
}
function usercontact() 
{
     document.getElementById("msg6").innerHTML='';
     document.getElementById("msg7").innerHTML='';
     document.getElementById("msg8").innerHTML='';
     document.getElementById("msg9").innerHTML='';
	var username= document.getElementById('username');
	var email= document.getElementById('email');
	var phone= document.getElementById('phone');
    var question= document.getElementById('question');
    
    var g=ValidateUsername(username);
    if(g==0)
    {
    document.getElementById("msg6").innerHTML+="Enter a valid username"; 
    }

    var a=ValidateEmail(email);
    if(a==0)
    {
    document.getElementById("msg7").innerHTML+="Enter a valid user id";
    }

    var d=ValidatePhone(phone)
    if(d==0)
    {
    document.getElementById("msg8").innerHTML+="Enter a valid phone number";
    }

    var h=ValidateQuestion(question)
    if(h==0)
    {
      document.getElementById("msg9").innerHTML="Enter question in less than 200 letters";  
    }

if(g==1)
 {
    if(a==1)
    {
        if(d==1)
        {
            if(h==1)
            {
              ApiTransfer(username,email,phone,question);
            }
        }
    }
  
 }

}


function ValidateEmail(userid) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userid.value))
  {
    return 1;
  }
  else{
    return 0;
    }
}

function ValidatePassword(password)
{
  if(password.value.trim().length<6)
    {
        return 0;
    }
    else if(password.value.trim().length>15)
    {
       return 0; 
    }
    else {return 1;}
}

function ValidatePhone(phone)
{
  if(/^\d{10}$/.test(phone.value))
  {
    return 1;
  }
  else
  {
    return 0;
  }
}


function ValidateUsername(username)
{
     if(username.value.length<1)
    {
      return 0; 
    }
   if(username.value.length>20)
    {
      return 0;
    }
    else{return 1;}
}

function ValidateQuestion(question)
{
    if(question.value.trim()=="")
        return 0;
     else if(question.value.length<1)
     {
        return 0;
     }
     else if(question.value.length>200)
     {
        return 0;
     }
     else
     {
        return 1;
    }
}


function ApiTransfer (name,email,phone,question){
    var params = {
        name:name,
        email:email,
        phone:phone,
        question:question,
    }
    var http = new XMLHttpRequest()
    http.open('POST','http://demo6835492.mockable.io/sendEmail')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params))
    http.onload = function() {
        
        alert(http.responseText);
    }
}