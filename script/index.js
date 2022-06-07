const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
const z = document.getElementById("z");
const zz = document.getElementById("zz");

function first() {
    const coast = Number(document.getElementById("coast").value);
    const s = Number(document.getElementById("sw").value);
    const distance = Number(document.getElementById("distance").value);
    const checkbox = document.getElementById("check");

    const p = (s / 100) * coast;
    price1.textContent = p.toFixed(2) + "zł";

    if(checkbox.checked == true) {
        z.textContent = distance * 2 + "km";
        zz.textContent = distance + "km";
        const w = (p * distance).toFixed(2)
        price3.textContent = w + "zł";
        price2.textContent = w * 2 + "zł";
    }
    else {
        z.textContent = distance + "km";
        zz.textContent = distance * 2 + "km";
        const w = (p * distance).toFixed(2)
        price2.textContent = w + "zł";
        price3.textContent = w * 2 + "zł";
    }
}