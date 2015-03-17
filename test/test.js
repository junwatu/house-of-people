/**
*  API Test
*/

var assert = require('assert');
var supertest = require('supertest');
var api = supertest('http://localhost:3000/api');

describe('House API', function(){

   describe('GET /houses', function(){
      it('should return 200', function(done){
          api.get('/houses')
             .set('Accept', 'application/json')
             .expect('Content-Type',/json/)
             .expect(200, done);
      });
   });

   describe('POST /house', function(){

   		var houses = {"address": "Acme Street"};

   		it('should return 200', function(done){
   			api.post('/houses').send(houses).expect('Content-Type',/json/).expect(200, done);
   		})
   });

});
