<template>
    <div class="presentation">
        <h3>Available Commands: </h3>
        <h4 class="categoryCommand">Support Commands:</h4>
        <p  class="AvailableCommands" v-for="avcommand in props.support" :key="avcommand.command"> {{'● ' +  avcommand.command + ' : ' + avcommand.description}}</p>
        <h4 class="categoryCommand">Social Commands:</h4>
        <p  class="AvailableCommands" v-for="avcommand in props.social" :key="avcommand.command"> {{'● ' +  avcommand.command + ' : ' + avcommand.description}}</p>
        <h4 class="categoryCommand">Utility Commands:</h4>
        <p  class="AvailableCommands" v-for="avcommand in props.utility" :key="avcommand.command"> {{'● ' +  avcommand.command + ' : ' + avcommand.description}}</p>
        <h4 class="categoryCommand">Moderation Commands:</h4>
        <p  class="AvailableCommands" v-for="avcommand in props.moderation" :key="avcommand.command"> {{'● ' +  avcommand.command + ' : ' + avcommand.description}}</p>
        <h4 class="categoryCommand">Settings Commands:</h4>
        <p  class="AvailableCommands" v-for="avcommand in props.settings" :key="avcommand.command"> {{'● ' +  avcommand.command + ' : ' + avcommand.description}}</p>
    </div>




</template>

<script>
    export default {
        name: "AvailableCommands",
        data () {
            return {
                props: {
                    support: [
                        {command: 'invite', description: 'Get the invitation link of JamesBot'},
                        {command: 'partner', description: 'Get some information about our partners.'},
                        {command: 'submit', description: 'Upgrade the bot together !'},
                        {command: 'support', description: 'Get a little help for the bot.'},
                    ],
                    social: [
                        {command: 'bang', description: 'Shoot a member.'},
                        {command: 'coffee', description: 'Give coffee to a member of the server.'},
                        {command: 'cry', description: 'Crying a little bit.'},
                        {command: 'hug', description: 'Hug a member of the server.'},
                        {command: 'kiss', description: 'Kiss a member.'},
                        {command: 'pat', description: 'Make a caress to a member.'},
                        {command: 'punch', description: 'Punch a member.'},
                        {command: 'slap', description: 'Slap a member of the server.'},
                        {command: 'wink', description: 'Make a wink to a member of the serveur.'}
                    ],
                    utility: [
                        {command: 'help', description: 'Get the commands list and all specific information for a command.'},
                        {command: 'prefix', description: 'Define the prefix of the serveur.'},
                        {command: 'ping', description: 'Show the ping of the bot.'},
                        {command: 'bot-info', description: 'Show somes informations usefull about the bot.'},
                        {command: 'guild-info', description: 'Show somes informations usefull about the server.'}
                    ],
                    moderation: [
                        {command: 'delete', description: 'Delete a number of messages.'}
                    ],
                    settings: [
                        {command: 'language', description: 'Define the language of the bot.'},
                        {command: 'onjoin-role', description: 'Set a role which will be automatically given.'}
                    ],
                }
            }

        }
    }


</script>


<style scoped>

    .presentation{
        font-size: 50px;
        color: #ffffff;
        font-family: BebasBold,serif;
    }

    .categoryCommand {
        color: #ff5538;
        font-size: 40px;
    }

    .AvailableCommands {
        font-size: 30px;
        font-family: BebasLight, serif;
    }
</style>