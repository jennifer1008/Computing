const Sn_Unit = 'Sn_Unit';
var obj = {
    getUnits: () => {
        return JSON.parse(window.localStorage.getItem(Sn_Unit));
    },
    setUnits: (Units) => {
        window.localStorage.setItem(Sn_Unit, JSON.stringify(Units));
    },
    removeUnits: () => {
        window.localStorage.removeItem(Sn_Unit);
    }
}
export default obj;