// Screenlock Widget

(() => {
	function draw() {
		// Draw icon.
		g.reset();
		if (Bangle.isLocked()) {
			g.drawImage(atob("DhABH+D/wwMMDDAwwMf/v//4f+H/h/8//P/z///f/g=="), scrlock.x, scrlock.y + 4);
		} else {
			g.drawImage(atob("DhABH+D/wwMADAAwAMf/v//4f+H/h/8//P/z///f/g=="), scrlock.x, scrlock.y + 4);
		}
	}

	// add widget.
	WIDGETS.widscrlock2 = {
		area: "tr",
		width: 16,
		draw: draw // Draw widget.
	};

	var scrlock = WIDGETS.widscrlock2;

	function restoreTimeout() {
		// Restore LCDTimeout settings.
		Bangle.setLCDTimeout(options.lockTimeout / 1000);
	}

	var options = [];
	Bangle.on('touch', function (button, xy) {
		if (xy.x >= scrlock.x && xy.x <= scrlock.x + 23 && xy.y >= scrlock.y && xy.y <= scrlock.y + 15) {
			options = Bangle.getOptions(); // Store current Timeout settings.
			Bangle.setLCDTimeout(0.1); // Lock screen.
			setTimeout(restoreTimeout, 1000);
		}
	});

	Bangle.on('lock', function (on, reason) {
		draw();
	});
})();
