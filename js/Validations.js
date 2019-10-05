function validation(){ 

 var name = document.getElementById('c_country').value;
 var name = document.getElementById('c_fname').value;
 var name = document.getElementById('c_lname').value;


if (name==''|| password==''||  country=='' )
{  
    alert('enter name');
    return false;
  
}
else{
    return true;
};

};