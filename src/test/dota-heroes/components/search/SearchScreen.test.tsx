import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../../../dota-heroes/components/search/SearchScreen';
import { heroes } from '../../../../dota-heroes/data/heroes';

const mockNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
    ...( jest.requireActual( 'react-router-dom' ) as object ),
    useNavigate: () => mockNavigate,
}));

describe( "Tests in <SearchScreen />", () => {
    test( "Must show corretly with default values", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search' ]}>
                <SearchScreen />
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.card' ).length ).toBe( heroes.length );
    });
    test( "Must show Anti Mage and the input with value of queryString", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=anti' ]}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( 'anti' );
    });
    test( "Must show alert 'Search a hero'", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=' ]}>
                <SearchScreen />
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.alert' ).text().trim() ).toBe( "Search a hero" );
    });

    test( "Must show alert 'No Hero was found width the text $'", () => {
        const queryText = "test";
        const wrapper = mount(
            <MemoryRouter initialEntries={[ `/search?q=${ queryText }` ]}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.alert' ).text().trim() ).toBe( `No Hero was found with the text ${ queryText }` );
    });

    test( "Must call navigate with handleSubmit", () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search' ]}>
                <SearchScreen />
            </MemoryRouter>
        );

        wrapper.find( 'input' ).simulate( 'change', {
            target: {
                name: "searchText",
                value: "Anti Mage",
            },
        });
        // TODO: Change object to an Object of type Form Event

        wrapper.find( 'form' ).prop( 'onSubmit' )({
            preventDefault(){},
        });
        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledWith( '?q=Anti Mage' );
    });
    
});

