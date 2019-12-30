

let name = prompt("Как вас зовут?");

switch(name){
	case 'Ульяна':
		alert("Здравствуй, дорогая)");
		confirm("Будь так любезна, нажми Ок ");
		break;
	case 'ульяна':
		prompt("С большой буквы");
		alert("Здравствуй, дорогая)");
		confirm("Будь так любезна, нажми Ок ");
		break;
	default:
		alert("Не подсматривай!!!");
		document.querySelector('.wrapper').style.display = 'none';
		alert('Только избранный это увидит!!!')	
}
