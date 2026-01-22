
const https = require('https');
const querystring = require('querystring');

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSehdsheqD0EVBW7Re57qwkhO2tMOBmVytN-qmeUDcWHpgMjZw/formResponse";

const OPTIONS_TO_TEST = {
    role: [
        "Co-Founder",
        "VP/Director",
        "Manager",
        "Other"
    ],
    revenue: [
        "$0 - $10k/mo",
        "$10k - $50k/mo",
        "$50k - $100k/mo",
        "$100k+ /mo"
    ],
    businessType: [
        "B2B Services",
        "E-commerce",
        "Marketplace",
        "Other"
    ],
    timeline: [
        "Within 1 month",
        "1-3 months",
        "Just browsing"
    ]
};

// Base valid payload (using known good values)
const BASE_PAYLOAD = {
    "entry.1278469177": "TEST_VALIDATOR",
    "entry.1068345279": "test@validator.com",
    "entry.239677022": "Validator Corp",
    "entry.567812601": "Founder / CEO", // Known Good
    "entry.1218074808": "B2B SaaS",      // Known Good (Assumed)
    "entry.1733326712": "Pre-revenue",    // Known Good
    "entry.1827237059": "Validation Test",
    "entry.1395102486": "Validation Test",
    "entry.446075556": "Immediately",     // Known Good
    "entry.975714833": "Validation Test"
};

const FIELD_IDS = {
    role: "entry.567812601",
    revenue: "entry.1733326712",
    businessType: "entry.1218074808",
    timeline: "entry.446075556"
};

async function testOption(field, value) {
    return new Promise((resolve) => {
        const payload = { ...BASE_PAYLOAD };
        payload[FIELD_IDS[field]] = value;

        const postData = querystring.stringify(payload);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(GOOGLE_FORM_URL, options, (res) => {
            let body = '';
            res.on('data', c => body += c);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    console.log(`[PASS] ${field}: "${value}"`);
                    resolve(true);
                } else {
                    console.log(`[FAIL] ${field}: "${value}" (Status ${res.statusCode})`);
                    resolve(false);
                }
            });
        });

        req.on('error', (e) => {
            console.error(`[ERROR] ${field}: "${value}" - ${e.message}`);
            resolve(false);
        });

        req.write(postData);
        req.end();
    });
}

async function runTests() {
    console.log("Starting Exhaustive Option Validation...");

    for (const field in OPTIONS_TO_TEST) {
        console.log(`\nTesting ${field}...`);
        for (const value of OPTIONS_TO_TEST[field]) {
            await testOption(field, value);
            // small delay to be nice to Google
            await new Promise(r => setTimeout(r, 500));
        }
    }
}

runTests();
