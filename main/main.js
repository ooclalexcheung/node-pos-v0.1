module.exports = function main(array) {
	var text = '***<store earning no money>Receipt ***\n';
	tmp = [];
	text_array = [];
	total = 0;
	for (i = 0; i < array.length; i++){
		var key = array[i].Name;
		total  +=array[i].Price;
		if (tmp.includes(key)){
			var key_array = text_array[key];
			key_array[0] += 1;
			key_array[3] += array[i].Price;
		}else{
			tmp.push(key);
			text_array[key] = [1,array[i].Unit,array[i].Price,array[i].Price];
		}
		
	}
	for (var key in text_array) {
		text += 'Name: '+ key + ', Quantity: ' + text_array[key][0] + " " + text_array[key][1] + ', Unit price: ' + text_array[key][2] + '.00 (yuan), Subtotal: ' + text_array[key][3] + '.00 (yuan)\n';
	};
 	text += '----------------------\n' +'Total: '+total+'.00 (yuan)\n' +'**********************\n';
	return text;
}; 
