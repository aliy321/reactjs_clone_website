// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import all schemas here
import hero from './hero'
import services from './services'
import services_content from './services_content'
import recognized from './recognized'
import recognized_content from './recognized_content'
import news from './news'
import casestudy from './casestudy'
import casestudy_content from './casestudy_content'
import partners from './partners'
import partners_content from './partners_content'
import resources from './resources'
import resources_content from './resources_content'
import agile from './agile'
import agile_content from './agile_content'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        hero,
        services,
        services_content,
        recognized,
        recognized_content,
        news,
        casestudy,
        casestudy_content,
        partners,
        partners_content,
        resources,
        resources_content,
        agile,
        agile_content
    ]),
})
