function renderizarLista () {
    let navbar = ['Ingeniería Mecatrónica', 'Ingeniería Agroindustrial', 'Ingeniería en Tecnología Ambiental', 'Ingeniería Biomédica', 'Ingeniería en Software', 'Ingeniería en Energía', 'Ingeniería en Tecnologías de Manufactura', 'Ingeniería Petrolera', 'Licenciatura en Administración y Gestión Empresarial', 'Ingeniería en Nanotecnología']

let lista = document.getElementById('lista')



for ( let i = 0; i < navbar.length; i ++){
    let a = document.createElement('a')

    a.textContent = navbar[i]

    a.classList.add('lista-links')

    lista.appendChild(a)
}

}
addEventListener('DOMContentLoaded', () => {
    renderizarLista()
})