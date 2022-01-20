exports.blurb = `
<h1>Mission 1 - Purple-ize the house</h1>
<p>The colour of this house is a bit bland. Can you make it more pretty?</p>
<h1>How to:</h1>
<p>First you need to target one of the building parts. Some parts have an id, and some have a class. To target a part with an id of 'roof', you can type:</p>
<pre><code>
#roof {
    ...
}
</code></pre>
<p>To target a part with a class of 'window', you can type:</p>
<pre><code>
.window {
    ...
}
</code></pre>
<p>Finally you can change the color by setting the 'background-color' property like so:</p>
<pre><code>
#roof {
    background-color: purple;
} 
</code></pre>

<p>Can you make the house more pretty?</p>
`

exports.building = [
    {   type: 'roof' },
    {
        type: 'wall',
        children: [
            {   type: 'window' },
            {   type: 'door' }
        ]
    }
];