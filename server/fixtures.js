if (Available.find().count() === 0){
	Available.insert({
		itemName: 'Skates',
		itemDescription: 'Bauer adult size 7',	
	});
	
	Available.insert({
		itemName: 'Helmet',
		itemDescription: 'Mission youth large'	
	});
	
	Available.insert({
		itemName: 'Pants',
		itemDescription: 'Adult large'
	});
}