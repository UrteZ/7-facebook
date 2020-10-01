function renderPosts(data) {
    // console.log('labukas');
// logika kuri sugeneruoja turini
    let HTML = '';
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += `<div class="post"> ${post.author.name}</div>`;
    }
    console.log(HTML);

    // susirandame MediaElementAudioSourceNode, kuriame norime perrasyti turini
    const feedDOM = document.querySelector('main');
    console.log(feedDOM);

    // i ta elementa ikeliame HTML kintamojo reiksme
    feedDOM.innerHTML = 'Nebe feedas';


}
export default renderPosts;
