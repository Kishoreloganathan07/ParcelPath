import test from 'node:test';
import assert from 'node:assert/strict';

import { makeTrackingNumber } from '../backend/src/utils/trackingNumber.js';
import { AppError } from '../backend/src/utils/AppError.js';

test('Tracking number should follow the expected format', () => {
    const trackingNumber = makeTrackingNumber();

    assert.match(
        trackingNumber,
        /^PP-[0-9A-F]{8}-[0-9A-Z]+$/
    );
});

test('Tracking numbers should be unique', () => {
    const first = makeTrackingNumber();
    const second = makeTrackingNumber();

    assert.notEqual(first, second);
});

test('AppError should store the message and default status code', () => {
    const error = new AppError('Parcel not found');

    assert.equal(error.message, 'Parcel not found');
    assert.equal(error.statusCode, 500);
    assert.equal(error.isOperational, true);
});

test('AppError should accept a custom status code', () => {
    const error = new AppError('Unauthorized', 401);

    assert.equal(error.message, 'Unauthorized');
    assert.equal(error.statusCode, 401);
    assert.equal(error.isOperational, true);
});