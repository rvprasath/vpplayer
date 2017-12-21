# vpplayer
Jquery Audio player plugin

This is the basic jquery audio player plugin. Before start using this plugin, some of the following dependencies are needed.

<h3>Dependency</h3><br/>

<b>Jquery library</b><br/>
get jquery library from <a href="https://jquery.com/download/">https://jquery.com/download/</a>

<b>Bootstrap library</b><br/>
get bootstrap library from one of the following link <a href="https://www.bootstrapcdn.com/">https://www.bootstrapcdn.com/</a> <b>or</b> <a href="https://getbootstrap.com/docs/3.3/getting-started/">https://getbootstrap.com/docs/3.3/getting-started/</a>

<b>Glyphicon</b><br/>
download the glyphicon from <a href="https://jquery.com/download/">https://jquery.com/download/</a>

After the library files are downloaded copy the libraries to the directory of the application.
Link all the libraries along with the <b>vpplayer.js</b> and <b>vpplayer.css</b>.

<pre>
&#x3C;html&#x3E;
&#x3C;head&#x3E;
&#x3C;script type="text/javascript" src="./js/jquery-2.1.1.min.js"&#x3E;&#x3C;/script&#x3E;
&#x3C;script type="text/javascript" src="./js/bootstrap.js"&#x3E;&#x3C;/script&#x3E;
&#x3C;link rel="stylesheet" type="text/css" href="./css/bootstrap.css"&#x3E;
&#x3C;script type="text/javascript" src="./lib/vpplayer.js"&#x3E;&#x3C;/script&#x3E;
&#x3C;link rel="stylesheet" type="text/css" href="./css/vpplayer.css"&#x3E;
&#x3C;/head&#x3E;
&#x3C;script&#x3E;
/**
  * vpplayer script
  *
  */
&#x3C;/script&#x3E;
&#x3C;body&#x3E;
&#x3C;div id="player"&#x3E;
&#x3C;/div&#x3E;
&#x3C;/body&#x3E;
</pre>

<b>vpplayer script</b>
The basic vpplayer script<br/>
<b>src attribute</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
		src: "./audio/audio.mp3"
	});
});
</pre>
The <b>src</b> attribute is process the url of the audio file. In the above code the <b>"./audio/audio.mp3"</b> path is the audio file path within the application.

<b>type attribute</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
		src: "./audio/audio.mp3",
    type: "audio/mp3"
	});
});
</pre>
The <b>type</b> attribute specifies the type of the audio file.

<b>trackName attribute</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
		src: "./audio/audio.mp3"
    type: "audio/mp3",
    trackName: "sample audio",
	});
});
</pre>
The <b>trackName</b> attribute displays the audio name in the player screen.

<b>preloadMessage attribute</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
		src: "./audio/audio.mp3"
    type: "audio/mp3",
    trackName: "sample audio",
    preloadMessage: "LOADING..........."
	});
});
</pre>
The <b>preloadMessage</b> attribute is used to display the message such as LOADING. before the audio file is loaded into the player.

<b>view attribute</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
		src: "./audio/audio.mp3"
    type: "audio/mp3",
    trackName: "sample audio",
    preloadMessage: "LOADING...........",
    view: "basic"
	});
});
</pre>
The <b>view</b> attribute specifies the view mode of the player.

vpplayer supports two mode of view.

<pre>view: "basic"</pre> <b>and</b> <pre>view: "minimal"</pre>


<b>playerColor attribute</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
		src: "./audio/audio.mp3"
    type: "audio/mp3",
    trackName: "sample audio",
    preloadMessage: "LOADING...........",
    view: "basic",
    playerColor: "black"
	});
});
</pre>
The <b>playerColor</b> attribute is used to define a custom color to the player skin.

vpplayer supports single as well as dual color for skin.

<b>Single color mode</b>
<pre>
playerColor: "black"
</pre>

<b>Dual color mode</b>
<pre>
playerColor: "black, grey"
</pre>

<b>displayColor attribute</b>
<pre>
$(document).ready(function(){
	$("#player").vpplayer({
		src: "./audio/audio.mp3"
    type: "audio/mp3",
    trackName: "sample audio",
    preloadMessage: "LOADING...........",
    view: "basic",
    playerColor: "black",
    displayColor: "green"
	});
});
</pre>
The <b>displayColor</b> attribute is used to define a custom color to the player screen.

vpplayer supports single as well as dual color for screen.

<b>Single color mode</b>
<pre>
displayColor: "green"
</pre>

<b>Dual color mode</b>
<pre>
displayColor: "green, blue"
</pre>
