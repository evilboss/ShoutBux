const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ShoutBox from '../shout_box';

describe('shouts.components.shout_box', () => {
  it('should show the error if there are any', () => {
    const error = 'TheError';
    const el = shallow(<ShoutBox err={error}/>);
    expect(el.html()).to.match(/TheError/);
  });

  it('should display the create shout textArea', () => {
    const el = shallow(<ShoutBox />);
    const textarea = el.find('textarea').first();
    const button = el.find('button').first();

    expect(textarea.node.ref).to.be.equal('shout');
    expect(button.prop('onClick')).to.be.a('function');
  });
  it('should create a new shout when click on the button', done => {
    const text = 'the-text';

    const onCreate = () => {
      expect(text).to.be.equal(text);
      done();
    };

    const el = shallow(<ShoutBox create={onCreate}/>);
    const instance = el.instance();
    instance.refs = {
      shout: {value: text}
    };
    el.find('button').simulate('click');
  });

});
