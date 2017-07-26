import React from 'react'
import { shallow } from 'enzyme'

import SingleArticle from '../components/SingleArticle'

test('It should render a full article', () => {
    const View = shallow(
        <SingleArticle/>
    )

    expect(View).toMatchSnapshot()
})