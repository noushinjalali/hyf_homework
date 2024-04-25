

// Peter
const widthInMetersPeter = 8;
const depthInMetersPeter = 10;
const heightInMetersPeter = 10;
const gardenSizeInM2Peter = 100;

const volumeInMetersPeter = (widthInMetersPeter * depthInMetersPeter * heightInMetersPeter);
let housePricePeter = (volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300);
const petersPaidPrice = 2500000;

if (petersPaidPrice <= housePricePeter) {
    console.log("Peter purchased the house with a good price");
} else {
    console.log("Peter purchased the house with a bad price");
}

// Julia
const widthInMetersJulia = 5;
const depthInMetersJulia = 11;
const heightInMetersJulia = 8;
const gardenSizeInM2Julia = 70;

const volumeInMetersJulia = (widthInMetersJulia * depthInMetersJulia * heightInMetersJulia);
let housePriceJulia = (volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300);
const juliasPaidPrice = 1000000;

if (juliasPaidPrice <= housePriceJulia) {
    console.log("Julia purchased the house with a good price");
} else {
    console.log("Julia purchased the house with a bad price");
}



