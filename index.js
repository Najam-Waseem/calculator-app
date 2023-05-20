function values(val) {
    var v = document.getElementById('screen');
    v.value += val;
 }
 
 function ScreenClear() {
    document.getElementById('screen').value='';
 }
 function equalsTo(){
    document.getElementById('screen').value=eval(document.getElementById('screen').value)

 }
 function backbtn(){
    var back=document.getElementById('screen')
    back.value=back.value.slice(0,-1)
 }
