var sum = require('./test2');
var test1 = require('./test1');
var assert = require("assert");
var logger = require('./log');
var setup = require('./setup');

describe("Mocha Framework Tests", function() {

	before("before Test:", function(done) {
			console.log("Common setup");
					console.log("parse the topo file");
							setup.setup();
									done();
										});

											beforeEach("before each", function(done) {
													console.log("Test Setup");
															done();
																});
																//Test Cases	
																    it("Test1", function(done) 
																		{
																				logger.info('Test1: first test case started');
																						var retval = sum(3,2);
																								console.log("1. Test outcome " +retval);
																										assert.equal(retval, "the sum is ");
																												done();
																													});

																														it("Test sample', if passsed 'round'", function(done) {
																															        logger.info('Test2: second test case started');
																																				var retval = test1.display("oval");
																																							console.log("2. Test to check earth shape is " +retval);
																																									    assert.equal(retval, "the earth is oval");
																																													done();
																																														});

																																														 	afterEach("after Each", function(done) {
																																															         console.log("Test CleanUP");
																																																	 		 done();
																																																			 	});

																																																					after("at the end", function(done) {
																																																							console.log("Common Cleanup");
																																																									done();
																																																										});
																																																										});
																																																										describe("SECOND SAMPLE", function() {
																																																											before("Second common setup", function() {
																																																													console.log("COMMON SETUP");
																																																														});
																																																															beforeEach("Second Test setup", function() {
																																																																	console.log("TEST SETUP");
																																																																		});
																																																																			after("Second common cleanup", function() {
																																																																					console.log("COMMON CLEANUP");
																																																																						});
																																																																							afterEach("Second second Test cleanup", function() {
																																																																									console.log("TEST CLEANUP");
																																																																										});

																																																																											it("SAMPLE Test2: should return 'the earth is round', if passsed 'round'", function(done) {
																																																																													logger.info('Sample Test: first test case started');
																																																																															var retval = test1.display("round");
																																																																																	console.log(retval);
																																																																																			assert.equal(retval, "the earth is ");
																																																																																					done();
																																																																																						});


																																																																																						});

