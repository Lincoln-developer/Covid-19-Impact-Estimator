
export let severeImpact = () =>{
    const reportedCases = dataContainer["data"]["reportedCases"];
    const time =  dataContainer["data"]["timeToElapse"];
    const beds = dataContainer["data"]["totalHospitalbeds"];
    let power = Math.trunc(time/3);
    var currentlyInfected;
        infectionsByRequestedTime;
        severeCasesByRequestedTime;
        hospitalBedsByRequestedTime;
        casesForICUByRequestedTime;
        casesForVentilatorsByRequestedTime;
        dollarsInFlight;
    currentlyInfected = reportedCases * 50;
    infectionsByRequestedTime = Math.trunc(currentlyInfected * (Math.pow(2,power)));
    severeCasesByRequestedTime = (15/100) * infectionsByRequestedTime;
    hospitalBedsByRequestedTime = Math.trunc(((35/100)*beds)-severeCasesByRequestedTime);
    casesForICUByRequestedTime = (5/100) *infectionsByRequestedTime;
    casesForVentilatorsByRequestedTime = (2/100) *infectionsByRequestedTime;
    dollarsInFlight = Math.trunc((infectionsByRequestedTime * 0.65 * 1.5)/30);
    dataContainer["estimate"]["severeImpact"] = {
        currentlyInfected,
        infectionsByRequestedTime,
        severeCasesByRequestedTime,
        hospitalBedsByRequestedTime,
        casesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime,
        dollarsInFlight,
    };
};
severeImpact();