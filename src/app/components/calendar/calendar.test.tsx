import { Calendar } from ".";
import React from "react";
import renderer from 'react-test-renderer';

describe('<Calendar />', () => {
    it('renders without crashing', () => {
        const component = renderer.create(<Calendar />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})