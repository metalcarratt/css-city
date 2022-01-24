const localStorageUtil = {
    saveBuilding(name, parts, css) {
        let buildings = {};
        if (localStorage.getItem("buildings")) {
            buildings = JSON.parse(localStorage.getItem("buildings"));
        }

        buildings[name] = {
            parts, css
        }

        localStorage.setItem("buildings", JSON.stringify(buildings));
    },

    loadBuildingNames() {
        const buildings = JSON.parse(localStorage.getItem("buildings"));
        return Object.keys(buildings);
    },

    loadBuilding(name) {
        const buildings = JSON.parse(localStorage.getItem("buildings"));
        return buildings[name];
    }
}

export default localStorageUtil;