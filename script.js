const horarios = [
    280,    // 04:40
    315,    // 05:15
    350,    // 05:50
    386,    // 06:26
    424,    // 07:04
    466,    // 07:46
    538,    // 08:58
    614,    // 10:14
    690,    // 11:30
    766,    // 12:46
    842,    // 14:02
    918,    // 15:18
    956,    // 15:56
    994,    // 16:34
    1032,   // 17:12
    1070,   // 17:50
    1108,   // 18:28
    1182,   // 19:42
    1254,   // 20:54
    1326    // 22:06
];

function buscarHorario() {
    const d = new Date();
    let minutosAtuais = d.getHours() * 60 + d.getMinutes();

    for (let index = 0; index < horarios.length; index++) {
        let minutosProximoOnibus = horarios[index];

        if (minutosProximoOnibus > minutosAtuais) {
            let horas = Math.floor(minutosProximoOnibus / 60);
            let minutos = minutosProximoOnibus % 60;

            let horasFormatadas = horas.toString().padStart(2, '0');
            let minutosFormatados = minutos.toString().padStart(2, '0');

            let horarioBus = `${horasFormatadas}:${minutosFormatados}`;
            document.getElementById("horario").value = horarioBus;
            console.log(horarioBus);
            break;
        }
        else {
            let minutosProximoOnibus = horarios[0];
            let horas = Math.floor(minutosProximoOnibus / 60);
            let minutos = minutosProximoOnibus % 60;

            let horasFormatadas = horas.toString().padStart(2, '0');
            let minutosFormatados = minutos.toString().padStart(2, '0');

            let horarioBus = `${horasFormatadas}:${minutosFormatados}`;
            document.getElementById("horario").value = horarioBus;
        }
    }
}

function limparrHorario() {
    document.getElementById("horario").value = "";
}