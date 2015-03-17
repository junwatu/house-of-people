/**
*  API Test
*/

var assert = require('assert');
var supertest = require('supertest');
var api = supertest('http://localhost:3000/api');

describe('API Test', function(){

   var house = {
       "address": "Acme Street", 
       "id":1
   };

   describe('GET /houses', function(){
      it('should return 200', function(done){
          api.get('/houses')
             .set('Accept', 'application/json')
             .expect('Content-Type',/json/)
             .expect(200, done);
      });
   });

   describe('POST /house', function(){
      it('should return 200', function(done){
   		   api.post('/houses').send(house).expect('Content-Type',/json/).expect(200, done);
   	   })
   });

   describe('PUT /house/{id}', function(){
      var house2 = {"address": "Acme 2 Street"};

      it('should return the changed data with id 1', function(done){
           api.put('/houses/1').send(house2).expect({"address":"Acme 2 Street", "id":1}).expect(200, done);
      });
   });

   describe('DEL /house/{id}', function(){
   	  it('should delete data with id 1', function(done){
           api.del('/houses/1').expect(204, done);
   	  });
   });

   var people = {"name": "Kenshin", "id":3};

   var updatePeople = {"name":"Kenshin Himura"};

   describe('POST /people', function(){
    	it('should return 200', function(done){
    		api.post('/people').send(people).expect(200, done);
    	})
    });

   describe('GET /people', function(){
		it('should return 200', function(done){
			api.get('/people').expect(200, done)	
		})
	});

    describe('PUT /people/{id}', function(){
    	it('should data changed and 200 status code', function(done){
    		api.put('/people/3')
    		   .send(updatePeople)
    		   .expect({"name":"Kenshin Himura", "id":3})
    		   .expect(200, done);
    	})
    });

    describe('DEL /people/{id}', function(){
    	it('should delete people with id 3', function(done){
    		api.del('/people/3').expect(204, done);
    	});
    })

	
});

