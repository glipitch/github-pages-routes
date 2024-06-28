const route = (event) => {
    event = event || window.event;
    event.preventDefault();

    handleLocation();
};

const handleLocation = async () => {
    const params = new URLSearchParams(window.location.search); //parse params
    let result = {};
    result.params =Array.from( params.entries());
    result.pathName = window.location.pathname;
    document.getElementById('result').innerHTML = JSON.stringify(result);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
