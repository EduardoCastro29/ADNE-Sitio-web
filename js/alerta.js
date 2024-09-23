document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('frmContacto');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el envío real del formulario

        // Mostrar alerta de SweetAlert2
        Swal.fire({
            title: 'Formulario Enviado',
            text: '¡Tu mensaje ha sido enviado exitosamente!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                formulario.reset(); // Limpiar el formulario después de confirmar
            }
        });
    });
});