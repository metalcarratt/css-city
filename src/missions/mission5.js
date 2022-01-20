exports.blurb = `
<h1>Mission 5 - What's the time?</h1>
<p>Behold the clock-tower! We're really getting complicated now, but there shouldn't be anything really new. However see the hands on the clock? That's actually the
letter "L", and that means you can change it's colour using the "colour" property. Go on, try it.
</p>

`

exports.building = [
    {
        type: 'partition',
        children: [
            {   type: 'left-angled-roof' },
            {   
                type: 'wall',
                children: [{
                    type: 'narrow-window'
                }]
            }
        ]
    },
    {
        type: 'partition',
        children: [
            {   type: 'center-angled-roof' },
            {   
                type: 'wall',
                children: [{
                    type: 'clock'
                }]
            },
            {   
                type: 'wall',
                children: [{
                    type: 'door'
                }]
            }
        ]
    },
    {
        type: 'partition',
        children: [
            {   type: 'right-angled-roof' },
            {   
                type: 'wall',
                children: [{
                    type: 'narrow-window'
                }]
            }
        ]
    }
    
];