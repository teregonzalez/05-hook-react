import { renderHook} from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";


describe('Pruebas en useFetch', () => { 
    
    test('debe de retornar la información por defecto', () => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve()
        }));
        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') )

        const { data, loading, error } = result.current;
        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error ).toBe(null);

    });

    test('Debe de tener la info deseada, loading en false, error false', async() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([1])
        }));
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') )
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect( data.length ).toBe( 1 );
        expect( loading ).toBe( false );
        expect( error ).toBe( null) ;

    });

    test('Debe de manejar el error', async() => {
        global.fetch = jest.fn(() => Promise.reject());
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2') )
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se pudo cargar la info');
    });
 });
