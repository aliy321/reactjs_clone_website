export default {
    name: 'news',
    type: 'document',
    title: 'News',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'heading',
            type: 'string',
        },
        {
            name: 'text',
            type: 'text',
        },
        {
            name: 'buttonText',
            type: 'string',
        },
        {
            name: 'buttonLink',
            type: 'url',
        },
        {
            name: 'image',
            type: 'image',
        },
        {
            name: 'calendarImage',
            type: 'image',
        }
    ]
}