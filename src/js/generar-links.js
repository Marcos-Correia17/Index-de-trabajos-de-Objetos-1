fetch("src/data/trabajos.json")
    .then(respuesta => respuesta.json())
    .then(trabajos => {

        const lista = document.getElementById("lista-trabajos");

        // Limpiar la lista antes de generar los links
        lista.innerHTML = "";

        trabajos.forEach(trabajo => {

            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = trabajo.archivo;
            a.textContent = trabajo.nombre;

            li.appendChild(a);
            lista.appendChild(li);
        });

    })
    .catch(error => {
        console.error("No se pudo cargar trabajos.json:", error);
    });