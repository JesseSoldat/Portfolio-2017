let profile = {
	'name': 'jesse soldat',
	'email': 'jsoldat@hotmail.com',
	'github': 'https://github.com/JesseSoldat',
	'phone': 4049966868,
	'address': 'decatur, ga',
	'photo': 'https://avatars2.githubusercontent.com/u/13573291?v=3&s=460'
}
function showYourself(photo){
	let img = new Image();
	let imgContainer = document.getElementById('profilePic');
	imgContainer.appendChild(img);
	img.src = photo; }
function formatStrings(string, type) {
	if(type === 'name'){ 
			let first = string.charAt(0).toUpperCase()+string.slice(1,6), 
			last = string.charAt(6).toUpperCase()+string.slice(7)
			return first+last;
	} else if(type === 'address'){
			return string.charAt(0).toUpperCase()+string.slice(1, 7)+string.slice(8).toUpperCase();
	} }
function formatPhone(phone) {
	let formatPhone = phone.toString();
	let buildPhoneNum = formatPhone.slice(0,3);
	buildPhoneNum += "-" + formatPhone.slice(3,6);
	return buildPhoneNum += "-" + formatPhone.slice(6);	
}
function formatContact(profile) {
	let name = formatStrings(profile.name, 'name');
	let phone = formatPhone(profile.phone);	
	let address = formatStrings(profile.address, 'address');
	console.log(name); console.log('Phone:', phone); console.log(address);
}
showYourself(profile.photo);
formatContact(profile);

function showYourWorld() {

}

// let placesLived = ['Iowa', 'Hawaii', 'Japan', 'Thailand'];

// let interests = ['traveling','outdoor','music','anime'];

// function checkYourSelf() {
// 	if(interests.length <= 3) {
// 		console.warn('Variety is the spice of life!');
// 	} else if(interests.length > 3) {
// 		console.log('Wow, it looks like you have a lot of activies in your life');
// 	}
// }

// checkYourSelf();