import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json' 
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';

describe('Pruebas en MultipleCustomHooks', () => { 
    test('Debe de mostrarse correctamente', () => {

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( toJson(wrapper )).toMatchSnapshot();
    })
 })