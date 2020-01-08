const{addEmail,addImage,card,details,name,addFirstName,addLastName}= require('./user');
/*test('adding Image|addImage',function(){
    expect().toBeTruthy();
})
*/

test('name',function(){
	expect(document.getElementsByClassName('p')).toBeTruthy()
})

test('firstname',function(){
	expect(document.getElementsByClassName('f')).toBeTruthy()
})

test('lastname',function(){
	expect(document.getElementsByClassName('l')).toBeTruthy()
})

test('image',function(){
	expect(document.getElementsByClassName('img')).toBeTruthy()
})

test('add email|addEmail',function(){  
	expect(document.getElementsByClassName('b')).toBeTruthy()
});

test('deatils',function(){
	expect(document.getElementsByClassName('details')).toBeTruthy()
});

test('card',function(){
	expect(document.getElementsByClassName('card')).toBeTruthy()
});

/*test(,function(){
    expect().toBe()
})

test('',function(){
    expect().toBe()
})*/
