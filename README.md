# VaqBot
Repository for Rancho Alamitos High School Vaqcoders Discord server bot.

### Some Links
* [Discord.js Docs](https://discord.js.org/#/docs/main/stable/general/welcome)
* [VaqBot on Heroku](https://dashboard.heroku.com/apps/vaqbot/)
* [Bot Advice](https://gist.github.com/missingbinaries/b1e6ed00c25b393116f4d364c9359aac)

### How Commands Work in bot.js
* If you read the code in bot.js, you will find an event called "message"
* Within the event handler, I used a switch/case approach to functioning according to different bot commands
* So, for example, if you want to make a new command like `!bark`, you would put inside the switch block a `case "bark":` and proceed to program how the bot reacts
* Next, you would make the bot respond with `ruff ruff`, so you would indent and type `msg.channel.send("ruff ruff!"); break;`
* That is the minimum amount of knowledge you should need to be successful in programming your own bot commands

### How To Update on GitHub.com
* Fork the repository
* Edit the bot.js file
* Make sure that your JavaScript is syntactically correct and the code looks as clean
* Make commits and once you are happy with your changes, go to the main repo and click `New Pull Request`
* Click `compare across forks`
* Select your edited branch and click `Create Pull Request`
* An admin of the Vaqcoders GitHub account will review your changes and either merge your changes or request revisions before it gets merged

### How To Update on GitHub Desktop
* If you do not have GitHub Desktop, I recommend you download it at [desktop.github.com](https://desktop.github.com/)
* Fork the repository
* From your forked repo, click `Clone or Download` then `Open in Desktop`
* Once downloaded, open the bot.js file using your text editor of choice (I use [Atom](https://atom.io/))
* Make sure that your JavaScript is syntactically correct and the code looks as clean
* Once you are happy with your changes, in GitHub Desktop, click `commit to master` and then click `push origin`
* Go back to GitHub.com, go to the main repo, and click `New Pull Request`
* Click `compare across forks`
* Select your edited branch and click `Create Pull Request`
* An admin of the Vaqcoders GitHub account will review your changes and either merge your changes or request revisions before it gets merged

### Discord.js Object Response of a Message
```
Discord.js Message Object = Message {
  channel:
   TextChannel {
     type: 'text',
     id: '00000000000000',
     name: 'bot',
     position: 4,
     permissionOverwrites: Collection {},
     topic: null,
     lastMessageID: '0000000000000',
     guild:
      Guild {
        members: [Object],
        channels: [Object],
        roles: [Object],
        presences: [Object],
        available: true,
        id: '000000000000000000000000000',
        name: 'Vaqcoders',
        icon: '0000000000000000000000000000000000',
        splash: null,
        region: 'us-west',
        memberCount: 26,
        large: false,
        features: [],
        applicationID: null,
        afkTimeout: 300,
        afkChannelID: '000000000000000000',
        embedEnabled: undefined,
        verificationLevel: 0,
        explicitContentFilter: 0,
        joinedTimestamp: 1537156441923,
        ownerID: '0000000000000000000',
        _rawVoiceStates: Collection {},
        emojis: [Object] },
     messages: Collection { '000000000000000000000' => [Circular] },
     _typing: Map { '000000000000000000000' => [Object] },
     lastMessage: [Circular] },
  id: '00000000000000000',
  type: 'DEFAULT',
  content: '!vaq',
  author:
   User {
     id: '000000000000000000000000',
     username: 'EthanThatOneKid',
     discriminator: '3456',
     avatar: '000000000000000000',
     bot: false,
     lastMessageID: '00000000000000000000000',
     lastMessage: [Circular] },
  member:
   GuildMember {
     guild:
      Guild {
        members: [Object],
        channels: [Object],
        roles: [Object],
        presences: [Object],
        available: true,
        id: '0000000000000000000000000000',
        name: 'Vaqcoders',
        icon: '000000000000000000000000',
        splash: null,
        region: 'us-west',
        memberCount: 26,
        large: false,
        features: [],
        applicationID: null,
        afkTimeout: 300,
        afkChannelID: '0000000000000000000000000',
        embedEnabled: undefined,
        verificationLevel: 0,
        explicitContentFilter: 0,
        joinedTimestamp: 1537156441923,
        ownerID: '000000000000000000000000000000000',
        _rawVoiceStates: Collection {},
        emojis: [Object] },
     user:
      User {
        id: '00000000000000000000000000',
        username: 'EthanThatOneKid',
        discriminator: '3456',
        avatar: '0000000000000000000000000',
        bot: false,
        lastMessageID: '000000000000000000000',
        lastMessage: [Circular] },
     _roles: [ '000000000000000000000' ],
     serverDeaf: false,
     serverMute: false,
     selfMute: undefined,
     selfDeaf: undefined,
     voiceSessionID: undefined,
     voiceChannelID: undefined,
     speaking: false,
     nickname: 'Pres Ethan',
     joinedTimestamp: 1532560775154,
     lastMessageID: '0000000000000000000000',
     lastMessage: [Circular] },
  pinned: false,
  tts: false,
  nonce: '00000000000000000000',
  system: false,
  embeds: [],
  attachments: Collection {},
  createdTimestamp: 1537169049811,
  editedTimestamp: null,
  reactions: Collection {},
  mentions:
   MessageMentions {
     everyone: false,
     users: Collection {},
     roles: Collection {},
     _content: '!vaq',
     _client:
      Client {
        domain: null,
        _events: [Object],
        _eventsCount: 4,
        _maxListeners: 10,
        options: [Object],
        rest: [Object],
        dataManager: [Object],
        manager: [Object],
        ws: [Object],
        resolver: [Object],
        actions: [Object],
        voice: [Object],
        shard: null,
        users: [Object],
        guilds: [Object],
        channels: [Object],
        presences: Collection {},
        token: '000000000000000000000000000000000000000000',
        user: [Object],
        readyAt: 2018-09-17T07:24:01.417Z,
        broadcasts: [],
        pings: [Array],
        _timeouts: [Object],
        _intervals: [Object] },
     _guild:
      Guild {
        members: [Object],
        channels: [Object],
        roles: [Object],
        presences: [Object],
        available: true,
        id: '00000000000000000000000000000',
        name: 'Vaqcoders',
        icon: '0000000000000000000000000000000000',
        splash: null,
        region: 'us-west',
        memberCount: 26,
        large: false,
        features: [],
        applicationID: null,
        afkTimeout: 300,
        afkChannelID: '00000000000000000000000000',
        embedEnabled: undefined,
        verificationLevel: 0,
        explicitContentFilter: 0,
        joinedTimestamp: 00000000000000000000000000,
        ownerID: '00000000000000000000',
        _rawVoiceStates: Collection {},
        emojis: [Object] },
     _members: null,
     _channels: null },
  webhookID: null,
  hit: null,
  _edits: []
}
```
