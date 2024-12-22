
const bingi_paths = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    'N9u7stf2mmu81.png'
];

function choosebingus() {
    const div = document.getElementById('bingus');
    div.innerHTML = '';

    const img = document.createElement('img');
    const rindex = Math.floor(Math.random() * bingi_paths.length);
    img.setAttribute('src', 'bingi/' + bingi_paths[rindex]);
    img.setAttribute('width', div.clientWidth);
    img.setAttribute('height', div.clientHeight);
    div.appendChild(img);
}