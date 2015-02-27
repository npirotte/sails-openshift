import React from 'react'
import styles from './text.less'

export default React.createClass({
  displayName: 'Text',

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <span>{this.props.text}</span>
    )
  }
})
