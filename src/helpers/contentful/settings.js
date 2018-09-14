import SETTINGS from '~/src/settings';


const {
    ACCESS_TOKEN,
    MANAGEMENT_TOKEN,
    SPACE,
    ENVIRONMENT
} = SETTINGS;

export const
    ACCESS_SERVER = 'https://cdn.contentful.com',
    MANAGEMENT_SERVER = 'https://api.contentful.com',
    ACCESS_HEADERS = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    },
    MANAGEMENT_HEADERS = {
        'Content-type': 'application/vnd.contentful.management.v1+json',
        'Authorization': `Bearer ${MANAGEMENT_TOKEN}`
    },
    ACCESS_URL = `${ACCESS_SERVER}/spaces/${SPACE}/environments/${ENVIRONMENT}`,
    MANAGEMENT_URL = `${MANAGEMENT_SERVER}/spaces/${SPACE}/environments/${ENVIRONMENT}`
;