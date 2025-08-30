function generate_list(){
    // Now generate the list
    const ul = document.getElementById('history-list');
    for (let i = 2025; i >= 2007; i--) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        //a.href = 'walcom' + i + '.php';
        a.href = 'walcom' + i + '.html';
        //a.href = '#';
        a.textContent = 'WALCOM ' + i;
        li.appendChild(a);
        ul.appendChild(li);
}
}