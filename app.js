const vm = new Vue({
  el: '#app',
  data() {
    return {
      // Display booleans & texts
      popup: false,
      pickup: true,
      fight: false,
      btnText: '',
      // Game Datas storages
      userRole: undefined,
      houseRole: undefined,
      score: 0,
      winner: '',
      roles: [
        {
          name: 'paper',
          image: './misc/svg/icon-paper.svg',
          id: 'paper_outter',
          alt: 'icon of paper',
          power: '1',
        },
        {
          name: 'scissors',
          image: './misc/svg/icon-scissors.svg',
          id: 'scissors_outter',
          alt: 'icon of scissors',
          power: '2',
        },
        {
          name: 'rock',
          image: './misc/svg/icon-rock.svg',
          id: 'rock_outter',
          alt: 'icon of rock',
          power: '3',
        },
      ],
    };
  },
  methods: {
    // Hide / Show the rules
    togglePopup() {
      this.popup == true ? (this.popup = false) : (this.popup = true);
    },
    // Go back to pickup selection button
    backToChoice() {
      this.fight = false;
      this.pickup = true;
    },
    // Pick a random role for the AI
    getHouseChoice(length) {
      return Math.floor(Math.random() * length);
    },
    // Update the user's score (only if he wins)
    scoreIncrement() {
      if (this.winner == 'user') {
        this.score += 1;
        localStorage.setItem('score', JSON.stringify(this.score));
      }
    },
    // button text selector on who wins & tie
    btnTextDisplay() {
      if (this.winner == 'user') {
        this.btnText = 'YOU WIN';
      } else if (this.winner == 'house') {
        this.btnText = 'YOU LOSE';
      } else if (this.winner == 'tie') {
        this.btnText = "IT'S A TIE";
      }
    },
    // Condition on roles (user vs AI)
    determineWinner(player, program) {
      const user = player.power;
      const house = program.power;
      //TIE
      if (user === house) {
        this.winner = 'tie';
        // NOT A TIE
      } else {
        // USER = PAPER
        if (user == 1 && house == 2) {
          this.winner = 'house';
        } else if (user == 1 && house == 3) {
          this.winner = 'user';
          // USER = SCISSORS
        } else if (user == 2 && house == 1) {
          this.winner = 'user';
        } else if (user == 2 && house == 3) {
          this.winner = 'house';
          // USER = ROCK
        } else if (user == 3 && house == 1) {
          this.winner = 'house';
        } else if (user == 3 && house == 2) {
          this.winner = 'user';
        }
      }
      // ADD POINTS TO THE SCORE
      this.scoreIncrement();
      // MODIFY BUTTON "play again" TEXT
      this.btnTextDisplay();
    },
    // Function launched when user clic on a Role
    battle(role) {
      this.userRole = role;
      this.pickup = false;
      this.fight = true;
      const rng = this.getHouseChoice(this.roles.length);
      this.houseRole = this.roles[rng];
      this.determineWinner(this.userRole, this.houseRole);
    },
  },
  mounted() {
    if (!localStorage.getItem('score')) this.score = 0;
    this.score = JSON.parse(localStorage.getItem('score'));
  },
});
