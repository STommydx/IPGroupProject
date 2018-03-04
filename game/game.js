/* global $ */

// Game module

var Game = {
	ROW: 4,
	COL: 4,
	MATCH: 16,
	TLIMIT: 120,

	state: [],
	pic: [],
	firstR: -1,
	firstC: -1,

	matched: 0,
	mutex: 0,
	gameOver: 0,
	gameStart: 0,

	init: function() {
		this.gameStart = 1;
		BoardView.clear();
		for (var i=0;i<this.ROW;i++) this.state[i] = [];
		for (var i=0;i<this.ROW;i++) for (var j=0;j<this.COL;j++) this.state[i][j] = 0;
		let tempArr = [];
		for (var i=0;i<this.MATCH;i++) tempArr[i] = Math.floor(i / 2);
		for (let i = this.MATCH - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
	    }
		for (var i=0;i<this.ROW;i++) this.pic[i] = [];
		for (var i=0;i<this.ROW;i++) for (var j=0;j<this.COL;j++) this.pic[i][j] = tempArr[i*this.COL+j];
		this.firstR = -1; this.firstC = -1;
		clearInterval(this.ticker);
		this.timer = this.TLIMIT * 10;
		this.matched = 0;
		BoardView.setTime(this.timer);
		BoardView.showCountdown(3, () => BoardView.showCountdown(2, () => BoardView.showCountdown(1, () => this.start())));
	},

	start: function(){
		BoardView.init(this.ROW, this.COL, this.pic);
		this.mutex = 0;
		this.gameOver = 0;
		this.ticker = setInterval(() => this.tick(), 100);
		this.gameStart = 0;
	},

	setdim: function(r, c) {
		this.ROW = r; this.COL = c;
		this.MATCH = this.ROW * this.COL;
	},

	settl: function(tl) {
		this.TLIMIT = tl;
	},

	isOpened: function(r, c) {
		return this.state[r][c] == 1;
	},

	openCell: function(r, c) {
		let pr = this.firstR, pc = this.firstC;
		if (this.firstR == -1){
			BoardView.turnOn(r, c);
			this.state[r][c] = 1;
			this.firstR = r; this.firstC = c;
		} else if (this.pic[pr][pc] == this.pic[r][c]) {
			this.mutex = 1;
			BoardView.turnOn(r, c, function() {
				Game.mutex = 0;
				if (Game.matched == Game.MATCH && Game.timer > 0)
					Game.win();
			});
			this.state[r][c] = 1;
			this.firstR = -1; this.firstC = -1;
			this.matched += 2;
		} else {
			this.mutex = 1;
			BoardView.turnOn(r, c, () => {
				setTimeout(function() {
					Game.mutex = 0;
					BoardView.turnOff(r, c);
					BoardView.turnOff(pr, pc);
				}, 1000);
			});
			this.state[r][c] = this.state[pr][pc] = 0;
			this.firstR = -1; this.firstC = -1;
		}
	},

	canOpen: function() {
		return this.mutex == 0;
	},

	isOver: function() {
		return this.gameOver == 1;
	},

	tick: function() {
		this.timer--;
		BoardView.setTime(this.timer);
		if(this.timer == 600) {
			popToast('1 minute left.');
		} else if(this.timer == 300) {
			popToast('30 seconds left. Be quick!');
		} else if(this.timer == 100) {
			popToast('Last 10 seconds! Hurry up!!!');
		} else if(this.timer == 0) {
			this.gameOver = 1;
			popToast('Times up! Game over.');
			clearInterval(this.ticker);
		}

	},

	win: function() {
		this.gameOver = 1;
		popToast('Congraz! You win!!!');
		clearInterval(this.ticker);
	}

}

// HTML board manipulation

var BoardView = {
	clear: function() {
		$('#game').hide();
		$('#game').empty();
	},

	init: function(r, c, pic) {
		$('#game').append($('<div>', {id: 'board', class: 'boardview'}));
		for (let i=0;i<r;i++) {
			let si = 'board_' + i;
			$('#board').append($('<div>', {id: si, class: 'boardrow'}));
			for (let j=0;j<c;j++) {
				let sj = 'board_' + i + '_' + j;
				$('#' + si).append($('<div>', {id: sj, class: 'boardcol'}));

				$('#' + sj).append($('<img>', {
					class: 'backimg',
					src: 'assets/'+ pic[i][j] +'.jpg',
					alt: 'image-' + pic[i][j],
					draggable: 'false'
				}));

				$('#' + sj).append($('<img>', {
					class: 'boardimg',
					src: 'assets/X.svg',
					alt: 'closed',
					draggable: 'false'
				}));

				$('#' + sj).click(() => GameController.cardListener(i, j));
			}
		}
		$('#game').fadeIn();
	},

	turnOn: function(r, c, callback) {
		let bo = 'board_' + r + '_' + c;
		$('#' + bo).addClass('flipped');
		setTimeout(callback, 800);
	},

	turnOff: function(r, c, callback) {
		let bo = 'board_' + r + '_' + c;
		$('#' + bo).removeClass('flipped');
		setTimeout(callback, 800);
	},

	showCountdown: function(text, callback) {
		$('.countdown').text(text);
		$('.countdown').fadeIn(300).delay(200).fadeOut(500, callback);
	},

	setTime: function(t) {
		var str = Number(t / 10).toFixed(1);
		$('#ctime').text(str);
	}

}

// Controller for game events

var GameController = {
	init: function() {
		$(document).ready(() => {
			$('#startgame').click(function() {
				if (Game.gameStart == 1) return;
				Game.init();
				popToast('Started new game. Good Luck!');
			});

			$('.dimset').click(function() {
				let h = $(this).data('height');
				let w = $(this).data('width');
				$('#bheight').text(h);
				$('#bwidth').text(w);
				setHighlight($(this));
				$('#diffc').click();
				Game.setdim(h, w);
				popToast('Board size set to: ' + h + 'x' + w);
			});

			$('.diffset').click(function() {
				let diff = $(this).data('difficulty');
				if (diff == 'Basic') {
					$('#bs4x4').click();
					$('#tl120').click();
				} else if (diff == 'Intermediate') {
					$('#bs4x6').click();
					$('#tl180').click();
				} else if (diff == 'Advanced') {
					$('#bs4x8').click();
					$('#tl300').click();
				}
				$('#bdiff').text(diff);
				setHighlight($(this));
				popToast('Difficulty set to: ' + diff);
			});

			$('.tlset').click(function() {
				let tl = $(this).data('tl');
				$('#ctime').text(tl + '.0');
				$('#tlimit').text(tl);
				setHighlight($(this));
				$('#diffc').click();
				Game.settl(tl);
				popToast('Time limit set to: ' + tl + 's');
			});

		});
	},

	cardListener: function(r, c) {
		if (Game.isOpened(r, c)) {
			popToast('Card already opened! Please try another one.');
		} else if(!Game.canOpen()) {
			popToast('You clicked too fast! Please wait for previous cards to close.');
		} else if(Game.isOver()) {
			popToast('Game already over. Please start a new game.');
		} else {
			Game.openCell(r, c);
		}
	}
}

function setHighlight(element) {
	let par = element.parent();
	par.children().removeClass('highlighted');
	element.addClass('highlighted');
}

function popToast(text) {
	$('.toast').text(text);
	$('.toast').fadeIn(function() {
		$('.toast').delay(1500).fadeOut();
	});
}

GameController.init();
