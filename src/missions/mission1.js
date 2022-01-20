exports.blurb = `
<h1>Mission 1 - Colour my house</h1>
<p>The colour of this house is a bit bland. Can you make it more pretty?</p>
<h1>"But how can I do that?"</h1>
<p>In the code editor on the bottom left you need to type something that looks like the following:</p>
<pre><code>
#roof {
    background-color: blue;
}
</code></pre>
<p>See the parts below? Those are the parts you can change colours of. You just need to put '#' in front of the id and then put '{ } ' after it. If that's
too hard you can also click the part you want to change and click the '{}' button. It will be added for you.</p>
<p>Next you need to actually need to say what colour to use. All the colours you see are 'background colours'. To change the background colour, type 'background-color: ' between
the '{ }', and then the name of the colour followed by ';'. If that's not easy, click 'bgColor' and then a colour you want. You can choose which colours are in the
quick menu using the 'Choose Colours' button.

<p>So, can you make the house more pretty?</p>
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