"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withNewName = (config, { name = 'expo-random' } = {}) => {
    config.name = name;
    return config;
};
exports.default = withNewName;
