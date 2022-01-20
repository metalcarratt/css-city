exports.blurb = `
<h1>Mission 2 - Different stories</h1>
<p>This is a two-story house. It's hard to tell where one story stops and another ends. Can you perhaps make them different colours?</p>
<h1>How to:</h1>
<p>In CSS you can target the first or second element like follows</p>
<pre><code>
#wall:first-child {
    ...
}
</code></pre>

<p>Can you make the house more stylish?</p>
`

exports.building = [
    {   type: 'roof' },
    {
        type: 'house',
        children: [
            {   type: 'wall',
                children: [
                    {   type: 'window' },
                    {   type: 'window' }
                ]
            },
            {
                type: 'wall',
                children: [
                    {   type: 'window' },
                    {   type: 'door' }
                ]
            }
        ]
    }
];
