import Component from '@ember/component';

export default Component.extend({

  categories: [
    'ene',
    'due',
    'rike',
    'fake'
  ],

  actions: {
    close(name) {
      this.set(name, false)
    },
    open(name) {
      this.set(name, true)
    },

    add() {

    }
  }
});
