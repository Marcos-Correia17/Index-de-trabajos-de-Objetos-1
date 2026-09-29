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

        // 🛠️ AGREGADO: Al finalizar la renderización, la página web entera hace scroll
        // automático de forma suave hasta el final de la pantalla si hay nuevos elementos.
        window.scrollTo({ 
            top: document.body.scrollHeight, 
            behavior: 'smooth' 
        });

    })
    .catch(error => {
        console.error("No se pudo cargar trabajos.json:", error);
    });
