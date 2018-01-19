
export const makeFact = (widget, dashboard) => {
  if (__DEV__) {
    const isWidget = require('../widgets/widgetsHelpers').isWidget;
    const isDashboard = require('../dashboards/dashboardsHelpers').isDashboard;
    if (isWidget(widget) === false || isDashboard(dashboard) === false) {
      throw new Error('Must provide widget and dashboard objects');
    }
    if (widget.type !== 'fact') {
      throw new Error('Must be of type "fact"');
    }
  }
  return {
    widget,
    dashboard
  }
};
