import React from 'react'
import { shallow } from 'enzyme'

import Articles from '../components/Articles'
import Article from '../components/Article'

test('The main view should display Articles', () => {
    const View = shallow(
        <Articles />
    )

    expect(View.find(Article))
})