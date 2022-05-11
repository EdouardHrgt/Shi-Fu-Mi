const vm = new Vue({
  el: '#app',
  data() {
    return {
      roles: [
        {
          name: 'paper',
          image: './misc/svg/icon-paper.svg',
          id: 'paper_outter',
        },
        {
          name: 'scissors',
          image: './misc/svg/icon-scissors.svg',
          id: 'scissors_outter',
        },
        {
          name: 'rock',
          image: './misc/svg/icon-rock.svg',
          id: 'rock_outter',
        },
      ],
      userRole: undefined,
      score: 0,
      popup: false,
      round: 1,
    };
  },
  methods: {
    togglePopup() {
      this.popup == true ? (this.popup = false) : (this.popup = true);
    },
    backToChoice() {
      this.round = 1;
    },
    pickedRole(role) {
      this.userRole = role;
      this.round = 2;
    },
  },
});
