
    document.getElementById('downloadLink').addEventListener('click', function() {
        var requirementsList = document.getElementById('requirementsList');
        var arrow = document.getElementById('arrow');

        // Mostrar/ocultar el submenú de requisitos
        if (requirementsList.style.display === "none") {
            requirementsList.style.display = "block";
            arrow.classList.add('rotate'); // Rotar flecha
        } else {
            requirementsList.style.display = "none";
            arrow.classList.remove('rotate'); // Volver flecha a la posición original
        }
    });