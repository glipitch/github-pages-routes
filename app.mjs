const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const handleLocation = async () => {
    const params = new URLSearchParams(window.location.search);
    let result = {};
    result.pathName = window.location.pathname;
    result.params = Array.from(params.entries());
    document.getElementById('result').innerHTML = JSON.stringify(result);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
