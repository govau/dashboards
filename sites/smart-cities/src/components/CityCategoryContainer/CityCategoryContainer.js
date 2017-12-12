import { connect } from 'react-redux';
import CityCategory from './CityCategory/CityCategory';
import { toggleCitySelected } from '../../redux/ducks/cities';
import { setShowChartPatterns } from '../../redux/ducks/ui';

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.find(item => (
    item.id === ownProps.match.params.categoryId
  )),
  city: state.cities.find(item => (
    item.id === ownProps.match.params.cityId
  )),
  cities: state.cities,
  showChartPatterns: state.ui.showChartPatterns,
});

export default connect(
  mapStateToProps,
  {
    toggleCitySelected,
    setShowChartPatterns,
  },
)(CityCategory);
