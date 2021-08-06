const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search States.json and Filter Function
const searchStates = async searchText => {
    // res means response
    const res = await fetch('../data/states.json');
    const states = await res.json();

    //    GET Matches to current text input
    let matches = states.filter(state => {
        // Here we have to pass the pattern in which way we want to filter so ^ for starting with and then text or word and GI stands for   global and case-insensitive flags
        const regex = new RegExp(`^${searchText}`,`gi`);
        return state.name.match(regex) || state.abbr.match(regex);
    });

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
};

// SHOW results in HTML
const outputHtml = matches => {
    if(matches.length > 0){
        const html =matches.map(match => ` 
            <div class="card card-body mb-1">
                <h4>
                    ${match.name}(${match.abbr})
                    <span class="text-primary">
                        ${match.capital}
                     </span>
                </h4>
                <small>Lat : ${match.lat} / long : ${match.long}</small>
            </div>
        `).join('');

        matchList.innerHTML = html;
    }
}

search.addEventListener('input',() => searchStates(search.value));