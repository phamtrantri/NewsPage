import React from 'react';
import { shallow } from 'enzyme';
import { news } from '../../commons/data';
import NewsModal from '../NewsModal';


describe('open Modal', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NewsModal
        showModal={true}
        closeModal={() => {}}
        source={news.docs[0].source}
        cover={news.docs[0].cover}
        pubDate={news.docs[0].pubDate} 
        snippet={news.docs[0].snippet}
      />
    )
  })
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  })

  it('contains open Modal', () => {
    expect(wrapper.find('Modal').prop('isOpen')).toEqual(true);
  })
})
