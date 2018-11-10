$(document).ready(function (){
	
	//Slider
	if (window.location.href.indexOf('index') > -1) 
	{
		$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 1200
		});

	}

	//Posts
	if (window.location.href.indexOf('index') > -1) 
	{
	var posts = [
		{
			title: 'Prueba de titulo 1',
			date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			title: 'Prueba de titulo 2',
			date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			title: 'Prueba de titulo 3',
			date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			title: 'Prueba de titulo 4',
			date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			title: 'Prueba de titulo 5',
			date:'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
	];

	posts.forEach((item, index) =>{
		var post = `<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>${item.content}</p>
					<a href="#" class="button-more">Leer mas</a>
				</article>

		`;
		$('#posts').append(post);
	});
}
	//Selector de theme

	var theme = $('#theme');//id del link de la hoja de estilo

	$('#to-green').click(function(){
		theme.attr("href", "css/green.css");//al atributo href del theme le paso el valor css/green.css
	});
	$('#to-red').click(function(){
		theme.attr("href", "css/red.css");//al atributo href del theme le paso el valor css/red.css
	});
	$('#to-blue').click(function(){
		theme.attr("href", "css/blue.css");//al atributo href del theme le paso el valor css/blue.css
	});


	//Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	//Login false

	$('#login form').submit(function(){
		var form_name = $('#form_name').val();

		localStorage.setItem('form_name', form_name);
	});

	var form_name = localStorage.getItem('form_name');

	if (form_name != null || form_name != "undefined") {
		var about_parrafo = $('#about p');

		about_parrafo.html('<br><strong> Bienvenido, ' + form_name + '</strong>');
		about_parrafo.append('<br><a href="#" id="logout">Cerrar sesion</a>')

		$('#login').hide();

		$('#logout').click(function(){
			//console.log("Adentro");
			localStorage.clear();
			location.reload(true);
		})
	} 

	//Acordeon
	if (window.location.href.indexOf('about') > -1) 
	{
		$('#acordeon').accordion();
	}

	//Reloj
	if (window.location.href.indexOf('reloj') > -1) 
	{
		setInterval(function(){
			var reloj = moment().format('h:mm:ss a');
			$('#reloj').html(reloj);
		}, 1000);

	}

	//Validacion
	if (window.location.href.indexOf('contact') > -1) 
	{
		$("form input[name='date']").datepicker();

		//formateo de fecha no funciona
		/*$("form input[name='date']").datepicker({
			dateFormat: 'dd/mm/yy'
		});*/
		$.validate({
			lang: 'es'
		});
	}	




});