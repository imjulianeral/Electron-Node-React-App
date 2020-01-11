fetch('http://localhost:4000/patients')
    .then(resp => resp.json())
    .then(data => showDates(data))
    .catch(err => console.error(err));

function showDates(dates) {
    const datesContainer =  document.querySelector('#dates');
    let htmlDates;

    dates.forEach(date => {
        htmlDates += `
        <div class="p-5 list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between mb-4">
                <h3 class="mb-3">${ date.name }</h3>
                <small class="fecha-alta">${ date.date } - ${ date.time }</small>
            </div>
            <p class="mb-0">${ date.symptoms }</p>
            <div class="contacto py-3">
                <p>Owner: ${ date.owner }</p>
                <p>${ date.phone }</p>
            </div>
        </div>`;
    });

    datesContainer.innerHTML = htmlDates;
}
