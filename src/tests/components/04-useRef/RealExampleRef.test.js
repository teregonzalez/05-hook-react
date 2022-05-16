import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef.js'

describe('Pruebas en <RealExampleRef />', () => { 
    
    const wrapper = shallow( <RealExampleRef /> );
    test('Debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })

    test('Debe mostrar el componente <MultiCustomHooks />', () => {

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
 })
