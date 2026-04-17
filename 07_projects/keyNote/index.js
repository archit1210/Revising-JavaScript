const insert = document.querySelector('.insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
     <div>
     <table style="border: 2px">
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>
    `
})