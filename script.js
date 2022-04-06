const metersToFeetsHtml = document.getElementById("meters-to-feets");
const feetsToMetersHtml = document.getElementById("feets-to-meters");
const litersToGallonsHtml = document.getElementById("liters-to-gallons");
const gallonsToLitersHtml = document.getElementById("gallons-to-liters");
const kilosToPoundsHTML = document.getElementById("kilos-to-pounds");
const poundsToKilosHtml = document.getElementById("pounds-to-kilos");

const metric = {
    length: {
        metersToFeets: 3.28084,
        feetsToMeters: 0.3048,
    },
    volume: {
        litersToGallons: 0.2641721,
        gallonsToLiters: 3.78541,
    },
    mass: {
        kilosToPounds: 2.20462,
        poundsToKilos: 0.453592,
    },
};

function calc() {
    const quantaty = document.getElementById("quantaty").value;

    const innerData = document.querySelectorAll(".inner-data");

    innerData.forEach((e) => {
        e.innerHTML = quantaty;
    });

    metersToFeetsHtml.innerHTML = (quantaty * metric.length.metersToFeets).toFixed(3);
    feetsToMetersHtml.innerHTML = (quantaty * metric.length.feetsToMeters).toFixed(3);
    litersToGallonsHtml.innerHTML = (quantaty * metric.volume.litersToGallons).toFixed(3);
    gallonsToLitersHtml.innerHTML = (quantaty * metric.volume.gallonsToLiters).toFixed(3);
    kilosToPoundsHTML.innerHTML = (quantaty * metric.mass.kilosToPounds).toFixed(3);
    poundsToKilosHtml.innerHTML = (quantaty * metric.mass.poundsToKilos).toFixed(3);
}
