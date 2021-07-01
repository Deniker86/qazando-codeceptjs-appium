const { I } = inject();

module.exports = {

  button:{
    save: '~codigo',
    fail: '~lognFail',
  },

  fields:{
    code: '~codigo',
    name: '~aluno',
    search: '~search'
  },

  // //android.view.ViewGroup[@content-desc="12323"]

  login_sucesso() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  },

  login_fail() {
    I.waitForElement(this.button.fail, 5)
    I.seeElement(this.button.fail)
  }

}
