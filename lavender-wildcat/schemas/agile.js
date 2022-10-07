export default {
    name: 'agile',
    type: 'document',
    title: 'Agile',
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
            name: 'image',
            type: 'image',
        },
        {
            name: 'content',
            type: 'array',
            of: [
                // add reference to article - reference picker will only show articles
                {
                    type: 'reference',
                    name: 'list',
                    to: [{ type: 'agile_content' }],
                },
            ],
        },
    ]
}