Package.describe({
    name: 'kevohagan:sweetalert',
    summary: "a beautiful replacement for javascript's alert() ",
    version: '0.0.1',
    git: 'https://github.com/kevohagan/meteor-sweetalert.git',
    upstreamVersion: "0.1.0"
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
        'lib/ramda.js',
    ], ['client', 'server']);

    if(api.export)
        // api.export('Ramda');
        // api.export('R');
})