exports.blurb = `
<h1>Mission 2 - Different stories</h1>
<p>This is a two-story house. It's hard to tell where one story stops and another ends. Can you perhaps make them different colours?</p>
<h1>"But if I use '#wall', it changes both stories..?"</h1>
<p>That's right! Because you didn't specify <i>which</i> wall to change the colour of. If you want to change the colour of the first wall,
you can use ":first-child" like below:</p>
<pre><code>
#wall:first-child {
    background-color: Pink;
}
</code></pre>

<p>Want to specify the second story as well? In that case use ":nth-floor". You need to pass it an id, which are the white numbers next to the
parts below.</p>
<pre><code>
#wall:nth-child(1) {
    background-color: Purple;
}
</code></pre>

<p>Can you give the house different coloured floors?</p>
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
