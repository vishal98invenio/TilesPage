/*global QUnit*/

sap.ui.define([
	"App/zApplication/controller/P1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("P1 Controller");

	QUnit.test("I should test the P1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});