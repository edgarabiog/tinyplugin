/*!
 * Source version: 1.1.6 
 * Copyright (C) 2018 LoopIndex - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the LoopIndex Comments CKEditor plugin license.
 * Attributions
 * Rangy library:
 * Copyright 2018, Tim Down
 * https://github.com/timdown/rangy
 * inspired by work by Matthew DeLambo, The New York Times, CMS Group
 * https://github.com/NYTimes/ice
 * Mutation summary
 * Copyright (c) 2018 Rafael Weinstein
 * https://github.com/rafaelw/mutation-summary
 * You should have received a copy of the LoopIndex Comments CKEditor plugin license with
 * this file. If not, please write to: contact@loopindex.com, or visit http://www.loopindex.com
 * written by (David *)Frenkiel (https://github.com/imdfl) 
 * **/

var FLITE = window.FLITE || {};
var events = {
	Events: {
		INIT: "flite:init",
		ACCEPT: "flite:accept",
		REJECT: "flite:reject",
		SHOW_HIDE: "flite:showHide",
		TRACKING: "flite:tracking",
		CHANGE: "flite:change",
		HOVER_IN: "flite:hover-in",
		HOVER_OUT: "flite:hover-out",
		EVENT_INTERCEPTED: "flite:event-intercepted"
	},

	Commands: {
		TOGGLE_TRACKING: "flite-toggletracking",
		TOGGLE_SHOW: "flite-toggleshow",
		ACCEPT_ALL: "flite-acceptall",
		REJECT_ALL: "flite-rejectall",
		ACCEPT_ONE: "flite-acceptone",
		REJECT_ONE: "flite-rejectone",
		TOGGLE_TOOLTIPS: "flite-toggletooltips",
		PREV_CHANGE: "flite-prevchange",
		NEXT_CHANGE: "flite-nextchange"
	}
};

try {

	Object.assign(FLITE,events);
}
catch (e) {
	FLITE.Events = events.Events;
	FLITE.Commands = events.Commands;
}