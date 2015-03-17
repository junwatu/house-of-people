/**
*  API Test
*/

var assert = require('assert');
var supertest = require('supertest');
var api = supertest('http://localhost:3000/api');


describe('House API', function(){

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

   describe('PUT /house/{id}', function(done){
      var house2 = {"address": "Acme 2 Street"};

      it('should return the changed data with id 1', function(done){
           api.put('/houses/1').send(house2).expect({"address":"Acme 2 Street", "id":1}).expect(200, done);
      });
   });

   describe('DEL /house/{id}', function(done){
   	  it('should delete data with id 1', function(){
           api.del('/houses/1').expect(204, done);
   	  });
   });


});
