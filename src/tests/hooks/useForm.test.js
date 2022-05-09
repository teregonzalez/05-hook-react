import { renderHook, act } from '@testing-library/react-hooks';
import { useForm} from '../../hooks/useForm';
describe('Pruebas en useForm', () => { 
    
    const initialForm = {
        name: 'Fernando',
        email: 'fernando@gmail.com'
    }

    test('Debe regrear un formulario por defecto', () => { 

        const { result } = renderHook( () => useForm( initialForm ) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect(typeof handleInputChange ).toBe( 'function' )
        expect(typeof reset ).toBe( 'function' )
     })

     test('Debe de cambiar el valor del formulario (cambiar nombre)', () => { 
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ ,handleInputChange, reset ] = result.current;

        act( () => {

            handleInputChange ({
                target: {
                    name: 'name',
                    value: 'Melisa'
                }
            });
        })

        const [ formValue ] = result.current;

        expect( formValue ).toEqual( {... initialForm, name: 'Melisa'} )

    })



    test('Debe de re establecer el formulario con RESET', () => { 
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ ,handleInputChange, reset ] = result.current;

        act( () => {

            handleInputChange ({
                target: {
                    name: 'name',
                    value: 'Melisa'
                }
            });
            reset()
        })

        const [ formValue ] = result.current;

        expect( formValue ).toEqual( initialForm )
        
    })
 })