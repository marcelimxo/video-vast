var base_url = "./";

var removeIfExists = function (ids) {
	ids.map((id) => {
		document.getElementById(id) ? document.getElementById(id).remove() : null;
	});
};

var tapOnVideo = function () {
	if (document.getElementById("sidebar") || document.getElementById("header")) {
		// nothing...
	} else {
		document.getElementById("unmuteButton").remove();
		video.muteToggle("video-id", true);
		video.play();

		document.getElementById("video-id").style.background = "transparent";

		var wrapper = document.getElementById("wrapper");
		var player = document.getElementById("player");
		var header = document.createElement("div");
		var closeButton = document.createElement("img");
		var menu = document.createElement("div");
		var dotsDestacados = document.createElement('div');

		var wrapperSwitch = document.createElement('div');
		var containerImg = document.createElement('div');








		menu.style = "position:absolute;width:100%;display:flex;top:76px;justify-content:center;z-index:1;";

		var menuHTML = "";

		menuHTML = "<ul style='margin:0; padding:12px 0;display:flex;justify-content:space-between;;width:90%;'>";
		menuHTML += '<li class="active" id="homeItem"><a href="#"><img id="img-home" src="https://jtorresdev.github.io/demo-video-vast/samsung/assets/home-white.png"></a></li>';
		menuHTML += '<li id="destacadosItem"><a href="#">DESTACADOS</a></li>';
		menuHTML += '<li id="camaraItem"><a href="#">CÁMARA</a></li>';
		menuHTML += '<li id="diseñoItem"><a href="#">DISEÑO</a></li>';
		menuHTML += '<li id="rendimientoItem"><a href="#">RENDIMIENTO</a></li>';
		menuHTML += "</ul>";

		menu.innerHTML = menuHTML;
		menu.id = "menu";

		document.getElementById("paper").remove();

		closeButton.style = "float:right;width:10px;height:10px;margin:5px;cursor: pointer;";
		closeButton.src = base_url + "/assets/close.png";

		header.id = "header";
		header.style = "width:100%;height:25px;text-align: center;";



		wrapper.style =
			"position: fixed;background-image: url(/assets/background-mobile.png);height: 100%;top: 0px;background-size: 85%;background-repeat: no-repeat;background-position:bottom;width: 100%;background-color: black;left: 0;z-index: 999999999;";

		// "/assets/background-mobile.png);height: 100%;top: 0px;background-size: cover;background-repeat: no-repeat;width: 100%;background-color: black;left: 0;z-index: 999999999;";

		/* demo */

		//document.getElementById('container').style.padding = '20px 0px'

		/* demo */

		// BANNERS
		var bottom_container = document.createElement("div");
		var powered = document.createElement("img");
		var countdown = document.createElement("div");


		wrapperSwitch.style = 'width:100%;position:absolute;top:25px;height:41px;z-index:1;';
		wrapperSwitch.id = 'switch-div';
		wrapperSwitch.innerHTML = `
		<div id="wrapper-switch" style="display:flex; width:70%;margin:auto;border:solid 1px #ffffff; border-radius:5px;">
			<label id="sw-s20" style="height:40px;width:50%;background-color:white;border-radius:4px 0 0 4px;"><img src="assets/switch-1-mobil.png" style="width:20px;position:relative;top:3px;left:6px;"/> <span id="sw-text-s20" style="color:#000000;position:relative;bottom:12px;left:10px;font-family:Samsung Sharp Sans;font-size:9px;">Galaxy S20 | S20+</span></label>		
			<label id="sw-s20-ultra" style="height:40px;width:50%;background-color:#000000;border-radius:0 4px 4px 0;"><img src="assets/switch-2-mobil.png" style="width:20px;position:relative;top:6px;left:6px;"/> <span id="sw-text-s20-ultra" style="color:#ffffff;position:relative;bottom:6px;left:10px;font-family:Samsung Sharp Sans;font-size:9px;">Galaxy S20 Ultra</span></label>
		</div>`;

		dotsDestacados.style = 'width:110%;position:absolute;bottom:50px';
		dotsDestacados.id = 'dotsDestacados';
		dotsDestacados.innerHTML = `
		<div style="display:flex;width:30%;justify-content:space-around;margin:auto">
			<label id="destacado-1" style="width:15px;height:15px; border-radius:50%; background:blue"></label>
			<label id="destacado-2" style="width:15px;height:15px; border-radius:50%; background:blue"></label>
			<label id="destacado-3" style="width:15px;height:15px; border-radius:50%; background:blue"></label>
		</div>
		`;
		containerImg.style = 'position:absolute;top:25px;display:none;height:max-content;padding-bottom:5%;'
		containerImg.id = 'containerImg';
		containerImg.innerHTML = `
		<img id="img-src" src="/assets/bg-destacados-1-mobil.png" style="width:100%;"/>
		<div style="display:flex;width:100%;">
			<button id="btn-destacado-s20" style="background:none;border:none;display:none;position:relative;top:0;left:8%;width:66px;height:20px;font-family:Samsung Sharp Sans;font-size:12px;border-bottom:solid 1px; padding:0;">Galaxy S20</button>
			<button id="btn-destacado-s20-plus" style="background:none;border:none;display:none;position:relative;top:0;left:16%;width:72px;height:20px;font-family:Samsung Sharp Sans;font-size:12px;border-bottom:solid 1px; padding:0;">Galaxy S20+</button>
		</div>
		`;
		
		countdown.id = "countdown";

		var deadline = new Date("Apr 26, 2019 00:00:00").getTime();

		function n(n) {
			return n > 9 ? "" + n : "0" + n;
		}

		var updateTime = function () {
			var now = new Date().getTime();
			var t = deadline - now;
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((t % (1000 * 60)) / 1000);
			countdown.style =
				'font-size: 26px;color: white;background: rgba(0, 0, 0, 0.5);height: 45px;padding: 10px 10px 0px 10px;line-height: 18px;margin: 0px auto;display: table;font-family: Bahnschrift, "Adobe Blank";font-variation-settings: "wght" 600, "wdth" 80;';
			var countdownHTML = "";
			countdownHTML +=
				'<div id="days" style="text-align:center;float: left;padding: 0 5px;"><div>' + n(days) + '</div><span style="color:#9c97ae;font-size: 14px;">DIAS</span></div>';
			countdownHTML +=
				'<div id="hours" style="text-align:center;float: left;padding: 0 5px;"><div>' + n(hours) + '</div><span style="color:#9c97ae;font-size: 14px;">HRS</span></div>';
			countdownHTML +=
				'<div id="minutes" style="text-align:center;float: left;padding: 0 5px;"><div>' + n(minutes) + '</div><span style="color:#9c97ae;font-size: 14px;">MINS</span></div>';
			countdownHTML +=
				'<div id="seconds" style="text-align:center;float: left;padding: 0 5px;"><div>' + n(seconds) + '</div><span style="color:#9c97ae;font-size: 14px;">SEGS</span></div>';
			countdown.innerHTML = countdownHTML;
			if (t < 0) {
				clearInterval(x);
				countdown.innerHTML = "EXPIRED";
			}
		};

		updateTime();

		var x = setInterval(function () {
			updateTime();
		}, 1000);

		powered.src = base_url + "/assets/powered.png";
		powered.style = "position:absolute;bottom: 10px; right: 10px;display:none";
		powered.id = "poweredbyvidoomy";

		bottom_container.id = "bottom_container";
		bottom_container.style = "width: 330px;margin: 0px auto; bottom: 130px;left: 0;right: 0;";


		var bottom_left_HTML = "";

		bottom_left_HTML += '<span style="margin-left:-10px">#AVENGERSENDGAME</span>';
		bottom_left_HTML += '<a href="https://www.facebook.com/avengers/" style="float:left;margin-left: 5px;" target="_blank"><img src="' + base_url + '/assets/fb.png"/></a>';
		bottom_left_HTML += '<a href="https://twitter.com/avengers?lang=es" style="float:left;margin: 0px 20px;" target="_blank"><img src="' + base_url + '/assets/tw.png"/></a>';
		bottom_left_HTML += '<a href="https://www.instagram.com/avengers" style="float:left" target="_blank"><img src="' + base_url + '/assets/ig.png"/></a>';


		var bottom_right_HTML = "";

		bottom_right_HTML = '<img src="' + base_url + '/assets/date-mobile.png" width="150px" />';









		header.appendChild(closeButton);
		wrapper.appendChild(wrapperSwitch);

		wrapper.insertBefore(header, wrapper.firstChild);
		wrapper.appendChild(bottom_container);
		wrapper.appendChild(powered);
		wrapper.appendChild(menu);
		wrapper.appendChild(dotsDestacados);
		wrapper.appendChild(containerImg);



		var video_wrapper = document.getElementById("fluid_video_wrapper_video-id");



		// document.getElementById("videosItem").addEventListener("click", function (e) {
		// 	e.preventDefault();
		// 	document.getElementById("bottom_container").style.marginTop = "0px";
		// 	document.getElementById("video-id").pause();
		// 	removeIfExists(["avengers_container", "synopsis"]);
		// 	document.getElementsByClassName("active")[0].classList.remove("active");
		// 	document.getElementById("videosItem").classList.add("active");

		// 	video_wrapper.style.display = "block";
		// 	document.getElementById("bottom_container").style.display = "block";
		// });

		function DeleteActiveClass() {
			//Se quita las clases no active
			if (document.getElementsByClassName('active').length > 0) {
				document.getElementsByClassName('active')[0].classList.remove('active');
			}
			if (document.getElementsByClassName('active-w').length > 0) {
				document.getElementsByClassName('active-w')[0].classList.remove('active-w');
			}
		}

		function ChangeColorSwitch(color1, color2, color3) {
			document.getElementById('wrapper-switch').style.border = '1px solid' + color3;
			document.getElementById('sw-s20').style.backgroundColor = color1;
			document.getElementById('sw-text-s20').style.color = color2;
			document.getElementById('sw-s20-ultra').style.backgroundColor = color2;
			document.getElementById('sw-text-s20-ultra').style.color = color1;
		}
		function ChangeMenuColor(color) {
			var menu = document.querySelectorAll('a');
			menu.forEach(opcion => {
				opcion.style.color = color;
			});
		}
		function ChangeColorHomeAndClose() {
			document.getElementById('img-home').setAttribute('src', base_url + "/assets/home-black.png");
			// document.getElementById('closeButton').setAttribute('src', base_url + "/assets/close-w.png");
		}

		document.getElementById('homeItem').addEventListener('click', () => {
			DeleteActiveClass();
			document.getElementById('homeItem').classList.add('active');
		});

		document.getElementById('destacadosItem').addEventListener('click', () => {
			DeleteActiveClass();
			document.getElementById('destacadosItem').classList.add('active-w');
			ChangeColorSwitch('#000000','#ffffff','#000000');
			ChangeMenuColor('#000000');
			ChangeColorHomeAndClose();
			document.getElementById('btn-destacado-s20').style.display = 'block';
			document.getElementById('btn-destacado-s20-plus').style.display = 'block';

			document.getElementById('fluid_video_wrapper_video-id').style.display = 'none';

			document.getElementById('wrapper').style = "position: fixed;background-image: url();height: 100%;top: 0px;background-size: contain;background-repeat: no-repeat;background-position:bottom;width: 100%;background-color: white;left: 0;z-index: 999999999;";
			document.getElementById('containerImg').style.display = 'block';

			document.getElementById('destacado-1').addEventListener('click', () => {
				document.getElementById('img-src').src = '/assets/bg-destacados-1-mobil.png';
			});
			document.getElementById('destacado-2').addEventListener('click', () => {
				document.getElementById('img-src').src = '/assets/bg-destacados-3-mobil.png';
			});

			document.getElementById('destacado-3').addEventListener('click', () => {
				document.getElementById('img-src').src = '/assets/bg-destacados-4-mobil.png';
			});
		});

		document.getElementById('camaraItem').addEventListener('click', () => {
			DeleteActiveClass();
			document.getElementById('camaraItem').classList.add('active');
		});
		document.getElementById('diseñoItem').addEventListener('click', () => {
			DeleteActiveClass();
			document.getElementById('diseñoItem').classList.add('active');
		});
		document.getElementById('rendimientoItem').addEventListener('click', () => {
			DeleteActiveClass();
			document.getElementById('rendimientoItem').classList.add('active');
		});



		closeButton.addEventListener("click", function () {
			removeIfExists(["header", "visitPageButton", "poweredbyvidoomy", "bottom_container", "menu", "synopsis", "saveCalendarDropdown", "avengers_container"]);

			document.getElementById("fluid_video_wrapper_video-id").style.display = "block";

			document.getElementById("player").style = "width:100%;height:100%;";
			document.getElementById("wrapper").style = "width: 100%;margin-top: 10px;";
			document.getElementById("container").style.padding = "0px 10px";
			document.getElementById("video-id").pause();

			document.getElementById("video-id_fluid_controls_container").style.display = "none";
			document.getElementById("video-id_fluid_initial_play").style = "cursor:none;display:none";

			makeUnmuteButton();

			makePaper();
		});

		// efecto achicarse
		player.style.height = "100%";
		player.style.height = "230px";
	}
};

var makeUnmuteButton = function () {
	var unmuteButton = document.createElement("div");
	unmuteButton.style = "position: absolute;top: 70px;width: 100%;text-align: center;display: block;";
	unmuteButton.innerHTML = '<img src="' + base_url + '/assets/unmute.png" width="80px">';
	unmuteButton.id = "unmuteButton";

	document.getElementById("fluid_video_wrapper_video-id").appendChild(unmuteButton);

	unmuteButton.addEventListener("click", tapOnVideo);
};

var makePaper = function () {
	var paper = document.createElement("img");
	paper.src = base_url + "/assets/paper.png";
	paper.style = "position: absolute;bottom: 0px;right: 0px;z-index: 99;cursor:pointer;width: 120px;";
	paper.id = "paper";

	paper.addEventListener("click", tapOnVideo);

	document.getElementById("fluid_video_wrapper_video-id").appendChild(paper);
};

/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) {
	//  onNewIp - your listener function for new IPs
	//compatibility for firefox and chrome
	var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
	var pc = new myPeerConnection({
		iceServers: []
	}),
		noop = function () { },
		localIPs = {},
		ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
		key;

	function iterateIP(ip) {
		if (!localIPs[ip]) onNewIP(ip);
		localIPs[ip] = true;
	}

	//create a bogus data channel
	pc.createDataChannel("");

	// create offer and set local description
	pc.createOffer()
		.then(function (sdp) {
			sdp.sdp.split("\n").forEach(function (line) {
				if (line.indexOf("candidate") < 0) return;
				line.match(ipRegex).forEach(iterateIP);
			});

			pc.setLocalDescription(sdp, noop, noop);
		})
		.catch(function (reason) {
			// An error occurred, so handle the failure to connect
		});

	//listen for candidate events
	pc.onicecandidate = function (ice) {
		if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
		ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
	};
}

var track = function (params, action) {
	params.push("action=" + action);

	var http = new XMLHttpRequest();
	var url = "backend/track.php";
	http.open("POST", url, true);

	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function () {
		if (http.readyState == 4 && http.status == 200) {
			console.log(http.responseText);
		}
	};

	getUserIP(function (ip) {
		params.push("ip=" + ip);
		http.send(params.join("&"));
	});
};

var hidePlayerButtons = function () {
	var hide = "display:none";

	var fullscreen = document.getElementById("video-id_fluid_control_fullscreen");
	fullscreen.style = hide;
	var theatre = document.getElementById("video-id_fluid_control_theatre");
	theatre.style = hide;
	var progress = document.getElementById("video-id_fluid_control_duration");
	progress.style = hide;
};

var options = {
	layoutControls: {
		primaryColor: "#fff",
		fillToContainer: true,
		//posterImage: '' + base_url + '/assets/poster.png',
		persistentSettings: {
			volume: false
		},
		autoPlay: true,
		mute: true,
		playerInitCallback: function () {
			hidePlayerButtons();
			document.getElementById("video-id_fluid_controls_container").style.display = "none";
			document.getElementById("video-id_fluid_initial_play").style = "cursor:none;display:none";

			makeUnmuteButton();

			makePaper();

			var videoPlayer = document.getElementById("video-id");
		}
	}
};
var video = fluidPlayer("video-id", options);

document.getElementById("video-id").addEventListener("click", function (e) {
	tapOnVideo();
	video.muteToggle("video-id", true);
	//video.play()
});

video.on("pause", function () {
	var unmute = document.getElementById("video-id_fluid_initial_play");
	if (unmute.classList[0] != "fluid_initial_play") {
		unmute.remove();
		document.getElementById("video-id_fluid_initial_play").style = "display:block;background:#fff";
	}
});

document.getElementById("player").addEventListener("transitionend", function (event) {
	document.getElementById('player').style = 'position:absolute;top:118px;';
	console.log('holia');
	if (document.getElementById("wrapper").style.height === "100%") {
		document.getElementById("video-id_fluid_controls_container").style.display = "block";
	}
});
