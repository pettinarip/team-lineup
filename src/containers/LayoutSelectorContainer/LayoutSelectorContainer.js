import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeLayoutSelection } from '../../actions'
import { getLayouts } from '../../reducers/layouts'
import LayoutSelector from '../../components/LayoutSelector'

const LayoutSelectorContainer = ({ layouts, changeLayoutSelection }) => {
  return (
    <LayoutSelector>
      <div className='list-container'>
        <div className='title'>Tactics</div>
        <div className='list'>
          <div className='item'>
            {layouts.map(layout =>
              <div
                className='layout-description'
                onClick={() => changeLayoutSelection(layout.id)}
                key={layout.id}
              >
                {layout.config.join('-')}
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutSelector>
  )
}

LayoutSelectorContainer.propTypes = {
  layouts: PropTypes.array.isRequired,
  changeLayoutSelection: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  layouts: getLayouts(state.layouts)
})

export default connect(
  mapStateToProps,
  { changeLayoutSelection }
)(LayoutSelectorContainer)
