
import React from 'react';
import {connect} from 'react-redux';

import ChartWidget from './chartWidget_component';
import {getDenormalizedSlices} from '../../redux/slices/slicesSelectors';
// import {makeFact} from '../../redux/facts/factSelectors';
import {
  getWidgetType,
  getWidgetOptions,
  isKpi,
} from '../../utils/proposedApiChanges';
import transformForHighcharts from '../../utils/transformForHighcharts';


const mapStateToProps = (state, ownProps) => {

  let {widget, dashboard, slices} = ownProps;
  const {ui: {isHighContrastMode, viewport}} = state;

  if (slices && slices.length) { // 2 apis - can supply either "slices" or "widget and dashboard"
    widget = slices[0].widget;
  }

  const widgetType = getWidgetType(widget);

  if (widgetType === 'fact') {
    return {
      _type: 'fact',
      chartDescription: widget.description,
      // slices: makeFact(widget, dashboard)
    }
  }

  if (!(slices && slices.length)) {
    slices = getDenormalizedSlices(state, {
      widget,
      dashboard
    });
  }

  const transformedProps = transformForHighcharts(slices, isKpi(widgetType));

  return {
    // override ownProps
    widget: null,
    dashboard: null,
    slices: null,
    // end override ownProps

    ...transformedProps,

    viewport: viewport || 'sm',
    displayHighContrast: isHighContrastMode,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartWidget);
