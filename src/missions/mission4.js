exports.blurb = `
<h1>Mission 4</h1>
<p>The roof on this building is angled. To style it, you need to use a selector like:</p>
<pre><code>
#roof.angled {
    ...
}
</code></pre>
<p>Notice there is no space between '#roof' and '.angled'.</p>
<p>This building also has a sign, and the sign has text. To change the colour of text, use the 'color' property:</p>
<pre><code>
color: green;
</code></pre>

`

exports.building = [
    {   
        type: 'angled-roof',
        children: [{
            type: 'sign',
            text: 'Butcher'
        }]
    },
    {
        type: 'wall',
        children: [
            {   type: 'window' },
            {   type: 'door' }
        ]
    }
];