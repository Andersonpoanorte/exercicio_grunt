document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        const novaTarefa = document.getElementById('nova-tarefa').value;
        const listaTarefa = document.createElement('li');
        listaTarefa.textContent = novaTarefa;
        document.querySelector('ul').appendChild(listaTarefa);

        document.getElementById('nova-tarefa').value = '';
    });

    document.querySelector('ul').addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.add('tarefa-concluida');
        }
    });
});