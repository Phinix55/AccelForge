
const https = require('https');
const querystring = require('querystring');

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSehdsheqD0EVBW7Re57qwkhO2tMOBmVytN-qmeUDcWHpgMjZw/formResponse";

const postData = querystring.stringify({
    "entry.1278469177": "DEBUG_TEST_NAME",
    "entry.1068345279": "debug_test@example.com",
    "entry.239677022": "COMPANY",
    "entry.567812601": "Founder / CEO",
    "entry.1218074808": "B2B SaaS",
    "entry.1733326712": "Pre-revenue",
    "entry.1827237059": "Debug Main Problem",
    "entry.1395102486": "Debug Importance",
    "entry.446075556": "Immediately",
    "entry.975714833": "Debug Additional Info"
});

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};

console.log("Attempting to submit to:", GOOGLE_FORM_URL);

const req = https.request(GOOGLE_FORM_URL, options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    let body = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', () => {
        console.log('--- RESPONSE BODY PREVIEW ---');

        if (res.statusCode >= 400) {
            console.log("!!! ERROR RESPONSE (Status " + res.statusCode + ") !!!");
            console.log(body.substring(0, 2000)); // Print enough to see the error message
        } else if (body.includes("Your response has been recorded")) {
            console.log("SUCCESS CHECK: FOUND 'Your response has been recorded'");
        } else if (body.includes("Sign in")) {
            console.log("FAILURE CHECK: FOUND 'Sign in' - The form is restricted to organization users.");
        } else {
            console.log("UNKNOWN RESPONSE. Preview:");
            console.log(body.substring(0, 500));
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();
