import ActivityInfoPage from '../../src/components/activity_info_page';
import { renderComponent } from '../test_helper';

describe("ActivityInfoPage", function() {
  let rootComponent;

  beforeEach(function() {
    rootComponent = renderComponent(ActivityInfoPage);
  });

  it("has the correct class", function() {
    expect(rootComponent).to.have.class('activity-info-page');
  });

  describe("validations", function() {
    it("shows error if Activity name is not given", function() {
      let component = rootComponent.find("input[name='name']");
      component.prop('value', "");
      rootComponent.find('form').simulate('submit');
      expect(component.parent().find('small')).to.have.class('error');
    });

    it("shows error if Min Age is not given", function() {
      let component = rootComponent.find("select[name='min_age']");
      component.prop('value', "");
      rootComponent.find('form').simulate('submit');
      expect(component.parent().find('small')).to.have.class('error');
    });

    it("shows error if Max Age is not given", function() {
      let component = rootComponent.find("select[name='max_age']");
      component.prop('value', "");
      rootComponent.find('form').simulate('submit');
      expect(component.parent().find('small')).to.have.class('error');
    });

    it("shows errors if Min Age is more than Max Age", function() {
      let componentMinAge = rootComponent.find("select[name='min_age']");
      let componentMaxAge = rootComponent.find("select[name='max_age']");
      componentMinAge.simulate('change', "4");
      componentMaxAge.simulate('change', "3");
      rootComponent.find('form').simulate('submit');
      expect(componentMinAge.parent().find('small').text()).to.equal("Must be no more than max age");
      expect(componentMaxAge.parent().find('small').text()).to.equal("Must be at least the min age");
    });
  });
});
