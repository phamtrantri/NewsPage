import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import ListNews from '../ListNews';
import Pagination from "react-js-pagination/dist/Pagination";
import Footer from '../shareComponents/Footer';
import { news } from '../../commons/data';

describe('App', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = shallow(<App news={news} fetchNews={() => { }} />);
  })
  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('is a div', () => {
    expect(wrapper.is('div')).toBe(true);
  })
  it('contains header <h1>News</h1>', () => {
    expect(wrapper.contains(<h1>News</h1>)).toBe(true);
  })
  it('contains List News', () => {
    expect(wrapper.find('ListNews')).toHaveLength(1);
  })
  it('contains Footer', () => {
    expect(wrapper.find('Footer')).toHaveLength(1);
  })
})
