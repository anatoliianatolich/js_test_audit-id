$("document").ready(function() {
	$('.id').on("change", auditId);
});

function auditId() {
	var id = $('.id').val();
	//console.log(id);
	resId='';
	for(let i = 0; i < id.length; i++){
		if(!isNaN(id[i])){
			resId = resId +id[i];
			console.log(resId);
	}
	else if(id[i] == ','){
		resId = resId +id[i];
		console.log(resId);
	}
}
resId = resId.replace(/\s/g, '');
//console.log(resId);
var auId = [];
auId = resId.split(',');
console.log(auId);
$('.id').val(resId);
var resId2= [];
for(let i = 0; i < auId.length; i++){
	if(auId[i].length){
		resId2.push(auId[i]);
	}
}
console.log(resId2);
	$('.id').val(resId2);

var obj = [];

for (var i = 0; i < resId2.length; i++) {
    var str = resId2[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
}

	var res_13 = Object.keys(obj); // собрать ключи перебором для IE8-

  console.log(res_13); 
var resFinish = [];
var arrEtalon = ['123','23','11','24','234','243'];
for (let i = 0; i < res_13.length; i++){
	for (let r = 0; r < arrEtalon.length; r++){
		if(res_13[i] == arrEtalon[r]){
			resFinish.push(res_13[i]); 
		}
	}
}
console.log(resFinish);
}






