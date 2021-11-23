import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../../dota-heroes/components/heroes/HeroScreen';

const mockNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
    ...( jest.requireActual( 'react-router-dom' ) as object ),
    useNavigate: () => mockNavigate,
}));

describe( "Tests in <HeroScreen />", () => {
    test( "Must not show if hero is not found", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/hero' ]}>
                <Routes>
                    <Route path="/hero" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1> No Hero Page </h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'No Hero Page' );
    });

    test( "Must show correctly a hero if the parameter is correcty", () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/hero/agility-anti-mage' ]}>
                <Routes>
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1> No Hero Page </h1> } />
                </Routes>
            </MemoryRouter>
        );
        expect( wrapper.find( 'h3' ).text().trim() ).toBe( "Anti Mage" );
    });

    test( "Must go back with navigate", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/hero/agility-anti-mage' ]}>
                <Routes>
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />
                </Routes>
            </MemoryRouter>
        );
        wrapper.find( 'button' ).simulate( 'click' );
        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledWith( -1 );
    });
});
