export default {
  computed: {
    uiProps () {
      if (!this.ui || !this.ui.trim()) {
        return []
      }
      return this.ui.split(/\s+/)
    }
  }
}
