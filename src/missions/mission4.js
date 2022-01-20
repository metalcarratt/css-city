exports.blurb = `
<h1>Mission 4 - A meaty shop</h1>
<p>This building has an angled roof. If you look at the parts below, it's still a roof, but it has a "class" of "angled". That's what makes the lines
straight instead of curved. To choose the roof, you could continue to use "#roof", or you could be more specific as below:</p>
<pre><code>
#roof.angled {
    ...
}
</code></pre>
<P>The "." is used for classes. Notice there is no space between '#roof' and '.angled'? That's because '#roof' and '.angled' are part of the same
part.</p>
<h1>"What about that nifty looking sign there?"</h1>
<p>Yep, you can change the colour of that too. Even better, you can change the text colour too. To change the text colour, use the 'color' property:</p>
<pre><code>
#sign {
  color: green;
  background-color: white;
}
</code></pre>

<p>Can you give my shop a make-over befitting of a mad butcher?</p>
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