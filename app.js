const vm = new Vue({
  el: '#app',
  data() {
    return {
      userRole: undefined,
      houseRole: undefined,
      score: 0,
      winner: '',
      popup: false,
      round: 1,
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
    togglePopup() {
      this.popup == true ? (this.popup = false) : (this.popup = true);
    },
    backToChoice() {
      this.round = 1;
    },
    getHouseChoice(length) {
      return Math.floor(Math.random() * length);
    },
    determineWinner(user, house) {
      console.log(user.power, house.power);
      /*
      rock > scissors > paper > rock
      3 > 2 > 1 > 3
      */


    },
    pickedRole(role) {
      this.userRole = role;
      this.round = 2;
      const rng = this.getHouseChoice(this.roles.length);
      this.houseRole = this.roles[rng];
      this.determineWinner(this.userRole, this.houseRole);
    },
  },
});
