var respuesta1 = "";
var respuesta2 = ""; 7
var respuesta3 = "";
var video;
video = document.getElementById("vid");
pregunta1 = true;
pregunta2 = true;
pregunta3 = true;
            
function cargar()
{
    $("#btn_play").click(function()
    {
        video.play();
    });
    $("#btn_pause").click(function()
    {
        video.pause();
    });
    
    video = document.getElementById("vid"); // 2ª vez?
    video.addEventListener('timeupdate', function() {

    if (video.currentTime > 17.5 && pregunta1 == true)
    {
        video.pause();
        bootbox.dialog(
        {
            message: "a) Sólo la tabla. <br /> b) La tabla y las botas. <br /> c) La tabla, las botas, el traje y el casco.",
            title: "¿Qué material necesitas para hacer snowboard?",
            closeButton: false,
            animate: true,
            buttons:
            {
                success:
                {
                    label: "a",
                    className: "btn-primary",
                    callback: function()
                    {
                        respuesta1 = "a";
                        pregunta1 = false;
                        rePlay();
                    }
                },
                danger:
                {
                    label: "b",
                    className: "btn-primary",
                    callback: function()
                    {
                        respuesta1 = "b";
                        pregunta1 = false;
                        rePlay();
                    }
                },
                main:
                {
                    label: "c",
                    className: "btn-primary",
                    callback: function()
                    {
                        respuesta1 = "c";
                        pregunta1 = false;
                        rePlay();
                    }
                }

            }
        });
    }
                    if (video.currentTime > 37.5 && pregunta2 == true) {
                        video.pause();
                        bootbox.dialog({
                            message: "a) Girando el tronco superior. <br /> b) Inclinando el cuerpo hacia delante. <br /> c) Inclinando el cuerpo hacia atrás.",
                            title: "¿Cómo girarías?",
                            closeButton: false,
                            animate: true,
                            buttons: {
                                success: {
                                    label: "a",
                                    className: "btn-primary",
                                    callback: function () {
                                        respuesta2 = "a";
                                        pregunta2 = false;
                                        rePlay();
                                    }
                                },
                                danger: {
                                    label: "b",
                                    className: "btn-primary",
                                    callback: function () {
                                        respuesta2 = "b";
                                        pregunta2 = false;
                                        rePlay();
                                    }
                                },
                                main: {
                                    label: "c",
                                    className: "btn-primary",
                                    callback: function () {
                                        respuesta2 = "c";
                                        pregunta2 = false;
                                        rePlay();
                                    }
                                }

                            }
                        });
                    }
                    if (video.currentTime > 50.5 && pregunta3 == true) {
                        video.pause();
                        bootbox.dialog({
                            message: "a) Tirándome al suelo. <br /> b) Clavando el lateral trasero de la tabla. <br /> c) Clavando el lateral delantero de la tabla.",
                            title: "¿Como frenarías?",
                            closeButton: false,
                            animate: true,
                            buttons: {
                                success: {
                                    label: "a",
                                    className: "btn-primary",
                                    callback: function () {
                                        respuesta3 = "a";
                                        pregunta3 = false;
                                        rePlay();
                                    }
                                },
                                danger: {
                                    label: "b",
                                    className: "btn-primary",
                                    callback: function () {
                                        respuesta3 = "b";
                                        pregunta3 = false;
                                        rePlay();
                                    }
                                },
                                main: {
                                    label: "c",
                                    className: "btn-primary",
                                    callback: function () {
                                        respuesta3 = "c";
                                        pregunta3 = false;
                                        rePlay();
                                    }
                                }

                            }
                        });
                    }
                });
            }

            function rePlay() {
                setTimeout(function () {
                    video.play();
                }, 1000);
            }

            function volumeDown() {
                video.volume = video.volume - 0.1;
            }

            function volumeUp() {
                video.volume = video.volume + 0.1;
            }

            function fullScreen() {
                if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            }               