import React from 'react';
import { shallow } from 'enzyme';
import { news } from '../../commons/data';
import News from '../News';

describe('News', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <News key={news.docs[0]._id}
        snippet={(news.docs[0].snippet) ? news.docs[0].snippet : ""}
        pubDate={(news.docs[0].pub_date) ? news.docs[0].pub_date : ""}
        source={(news.docs[0].source) ? news.docs[0].source : ""}
        multimedia={(news.docs[0].multimedia) ? news.docs[0].multimedia : []} />
    )
  })
  
  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  })
  it('contains News Modal', () => {
    expect(wrapper.find('NewsModal').length).toBe(1);
  })
  it('showModal should be true when click on News', () => {
    wrapper.find('.news-container').simulate('click');
    expect(wrapper.find('NewsModal').prop('showModal')).toEqual(true);
  })

})