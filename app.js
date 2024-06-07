let isRobotArmControlVisible = false;

document.getElementById('switch-control').addEventListener('click', function() {
    if (isRobotArmControlVisible) {
        // Si los controles del brazo robótico están visibles, ocúltalos y muestra los sliders
        document.querySelector('.robot-arm-controls').style.display = 'none';
        document.querySelector('.sliders').style.display = 'block';
    } else {
        // Si los sliders están visibles, ocúltalos y muestra los controles del brazo robótico
        document.querySelector('.sliders').style.display = 'none';
        document.querySelector('.robot-arm-controls').style.display = 'block';
    }

    // Cambia el estado
    isRobotArmControlVisible = !isRobotArmControlVisible;
});
// Asume que los ids de los sliders son 'accelerate', 'direccion', 'advance', 'rotate', 'open-close', 'up-down'
const sliders = ['accelerate', 'direccion', 'advance', 'rotate', 'open-close', 'up-down'];

sliders.forEach(function(sliderId) {
    const slider = document.getElementById(sliderId);

    // Agrega un controlador de eventos 'input' al slider
    slider.addEventListener('input', function() {
        let message;
        switch (sliderId) {
            case 'accelerate':
                message = this.value > 50 ? 'Acelerando' : 'Desacelerando';
                break;
            case 'direccion':
                message = 'Girando ' + (this.value > 50 ? 'derecha' : 'izquierda');
                break;
            case 'advance':
                message = this.value > 50 ? 'Avanzando' : 'Retrocediendo';
                break;
            case 'rotate':
                message = 'Girando ' + (this.value > 50 ? 'derecha' : 'izquierda');
                break;
            case 'open-close':
                message = this.value > 50 ? 'Abriendo' : 'Cerrando';
                break;
            case 'up-down':
                message = this.value > 50 ? 'Subiendo mano' : 'Bajando mano';
                break;
        }

        // Muestra el mensaje en el panel de mensajes
        document.getElementById('message').textContent = message;
    });

    // Agrega un controlador de eventos 'change' al slider
    slider.addEventListener('change', function() {
        // Regresa el slider al punto central
        this.value = 50;
    });
});