if (Items.find().count() === 0){
  
  var joeId = Meteor.users.insert({
    username: 'joe'
  })
  
  Accounts.setPassword(joeId, 'abc123') 

  for (i = 0; i <= 50; i++){
	Items.insert({
		itemName: Fake.sentence(3),
		itemDescription: Fake.sentence(7),
		userId: joeId,
		userName: 'joe',
		dateAdded: new Date()
	});
  }
	
  Items.insert({
		itemName: 'Skates',
		itemDescription: 'Bauer adult size 7',
    	userId: joeId,
		userName: 'joe',
    	dateAdded: new Date()
	});
	
	Items.insert({
		itemName: 'Helmet',
		itemDescription: 'Mission youth large',
    	userId: joeId,
		userName: 'joe',
    	dateAdded: new Date()
	});
	
	Items.insert({
		itemName: 'Pants',
		itemDescription: 'Adult large',
		userName: 'joe',
    	userId: joeId,
    	dateAdded: new Date()
	});
}