'use strict';

/**
 * cost service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cost.cost');
