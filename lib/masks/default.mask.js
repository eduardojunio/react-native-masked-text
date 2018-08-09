import BaseMask from './_base.mask'

export default class DefaultMask extends BaseMask {
  static getType () {
    return 'default'
  }

  // noinspection JSMethodCanBeStatic
  getValue (value) {
    return value
  }

  getRawValue (value) {
    return value
  }

  validate () {
    return true
  }

  getKeyboardType () {
    return 'default'
  }
}
