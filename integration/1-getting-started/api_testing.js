//tes api

describe('Tes API',()=>{
  context('GET /Status',()=>{
  	it('isi response',()=>{
  		cy.request({
  			method: 'GET',
  			url : 'https://petstore.swagger.io/'
  		})
  		.should((response) => {
  			cy.log(JSON.stringify(response.body))
  		});
  	});
  });
}) ;


//get petId expected pass
	context('When I try to get status on findByStatus',()=>{
		it('Then it should show status',() => {
			cy.request({
				method: 'GET',
				url : 'https://petstore.swagger.io/v2/pet/findByStatus/',
				qs :{
					status : ['available']
				}
			})
			.should((response) => {
				//cy.log(JSON.stringify(response.body))
				expect(response.status).to.eq(200)
				expect(response.status).to.eq(response.body.id.length)
				//expect(response.body[0].name).to.eq('dogie')	
			});
		});
	});

//post
	context('When I send POST / order',()=>{
		it('Then it should create a new order',() => {
			cy.request({
				method : 'POST',
				url : 'https://petstore.swagger.io/v2/store/order',
				body : {
					id : "1",
					petId : "0",
					quantity : "2",
					shipDate :"2022-04-13T21:50:58",
					status : "placed",
					complete : "true"
				}
			})
			.should((response) => {
				cy.log(JSON.stringify(response.body))
				expect(response.status).to.eq(200)
		});
	});
	});

	//test put request

	context('When I Put / order',()=>{
		it('Then it should change an order',() => {
			cy.request({
				method : 'POST',
				url : 'https://petstore.swagger.io/v2/store/order',
				body : {
					id : "1",
					petId : "0",
					quantity : "3",
					shipDate :"2022-04-13T21:50:58",
					status : "placed",
					complete : "true"
				}
			})
			.should((response) => {
				cy.log(JSON.stringify(response.body))
				expect(response.status).to.eq(200)
		});
	});
	});

	//test delete request
	context('When I delete order id',()=>{
		it('response delete order id',() => {
			cy.request({
				method : 'DELETE',
				url : 'https://petstore.swagger.io/v2/store/order/4',
				failOnStatusCode: false,
			})
			.should((response) => {
				cy.log(JSON.stringify(response.body))
				expect(response.status).to.eq(404)
				//expect(response.body).to.not.be.null
				//expect(response.body[0].id).to.eq(9)
			});
		});
	});

