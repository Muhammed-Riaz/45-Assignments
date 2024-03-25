"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = 'pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city('mumbai', 'india');
describe_city('lahore');
