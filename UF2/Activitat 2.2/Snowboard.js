var respuesta1 = "";
var respuesta2 = ""; 
var respuesta3 = "";
var video;
pregunta1 = true;
pregunta2 = true;
pregunta3 = true;
respuestas = true;
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

    $("#valVolumen").text(10);
    document.getElementById("volumen").addEventListener("change", function (ev) {
        var v = document.getElementById("vid");
        v.volume = ev.target.value;
        $("#valVolumen").text(10*v.volume + "");
    }, true);

    video = document.getElementById("vid");
    $("#videoTime").text(Math.round(video.currentTime) + "s/" + Math.round(video.duration) + "s");
    video.addEventListener('ended', function () {
        var respuesta1 = "";
        var respuesta2 = ""; 
        var respuesta3 = "";
        var video;
        pregunta1 = true;
        pregunta2 = true;
        pregunta3 = true;
        respuestas = true;
    }, false);

    video.addEventListener('timeupdate', function () {
        $("#videoTime").text(Math.round(video.currentTime) + "s/" + Math.round(video.duration) + "s");
        var porcentaje = ((video.currentTime * video.duration) / 100) * 2;
        $("#timeProgress").attr("style", "width:" + porcentaje + "%");
        if (video.currentTime > 17.5 && pregunta1 == true) {
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
                    callback: function () {
                        respuesta1 = "a";
                        pregunta1 = false;
                        rePlay();
                    }
                },
                danger:
                {
                    label: "b",
                    className: "btn-primary",
                    callback: function () {
                        respuesta1 = "b";
                        pregunta1 = false;
                        rePlay();
                    }
                },
                main:
                {
                    label: "c",
                    className: "btn-primary",
                    callback: function () {
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
        if (video.currentTime > 65 && respuestas == true) {
            respuestas = false;
            video.pause();
            $("#bodyModal").append("<label id='r1'> 1. Respuesta --> " + respuesta1 + "</label><br /><label id='r2'> 2. Respuesta --> " + respuesta2 + "</label><br /><label id='r3'> 3. Respuesta --> " + respuesta3 + "</label>");
            if (respuesta1 == "c") {
                $("#r1").attr("style", "background-color:#7FB77A");
            }
            else {
                $("#r1").attr("style", "background-color:#E87575");
            }

            if (respuesta2 == "a") {
                $("#r2").attr("style", "background-color:#7FB77A");
            }
            else {
                $("#r2").attr("style", "background-color:#E87575");
            }

            if (respuesta3 == "b") {
                $("#r3").attr("style", "background-color:#7FB77A");
            }
            else {
                $("#r3").attr("style", "background-color:#E87575");
            }
            $('#myModal').modal('show');
            $("#modClose").click(function () {
                video.play();
                $("#img_conc").attr("style", "visibility:visible;padding-top:2%;");
            });
        }
    });
}

function rePlay() {
setTimeout(function () {
    video.play();
}, 1000);
}

//function volumeDown() {
//    video.volume = video.volume - 0.1;
//    var value = document.getElementById("volumen").value;
//    document.getElementById("volumen").value -= 0.1;
//    $("#valVolumen").text(10 * value + "");
//}

//function volumeUp() {
//    video.volume = video.volume + 0.1;
//    var value = document.getElementById("volumen").value;
//    document.getElementById("volumen").value +=  0.1;
//    $("#valVolumen").text(10 * value + "");
//}

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