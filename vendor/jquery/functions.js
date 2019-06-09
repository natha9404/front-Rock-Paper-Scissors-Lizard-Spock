var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Wordls!',
        iconComputer: 'icon-option fas fa-question',
        nameIconComputer: 'Question',
        winner: '',
        pointsComputer: 0,
        pointsPlayer: 0,
        options: {
            rock: 'rock',
            paper: 'paper',
            scissors: 'scissors',
            lizard: 'lizard',
            spock: 'spock',
        }
    },
    methods: {

        turn: function (option) {

            this.pointsComputer +=1;
            this.iconComputer = 'icon-option far fa-hand-lizard'
            this.nameIconComputer = 'Lizard'
            this.winner = 'Computer'
        },
        endGame: function (option) {

            this.pointsComputer = 0;
            this.iconComputer = 'icon-option fas fa-question'
            this.nameIconComputer = 'Question'
            this.winner = ''
        },

    }
});
