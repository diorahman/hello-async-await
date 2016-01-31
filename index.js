'use strict';

import request from 'request-promise';

async function test() {
    try {
        let data = await request('http://google.com');
        return data;
    } catch (exception) {
        console.log(exception);
    }
}

async function run() {
    console.log(await test());
}

run();
