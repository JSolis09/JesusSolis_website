import { render, screen, waitFor } from "@testing-library/react";
import { Profile } from "../../models";
import Home from './Home';

jest.mock('../../containers/AboutMe', () => () => <div>AboutMe Component</div>);
jest.mock('../../containers/WorkExperience', () => () => <div>WorkExperience Component</div>);
jest.mock('../../containers/Skills', () => () => <div>Skills Component</div>);
jest.mock('../../containers/Projects', () => () => <div>Projects Component</div>);
jest.mock('../../components/Metadata', () => () => <div>Metadata Component</div>);
jest.mock('../../containers/GetInTouch', () => () => <div>GetInTouch Component</div>);

test('renders Home correctly', async () => {
    render(<Home profile={{} as Profile} />);
    await waitFor(async() => {
        expect(await screen.findByText(/AboutMe Component/i)).toBeInTheDocument();
    });
    expect(await screen.findByText(/WorkExperience Component/i)).toBeInTheDocument();
    expect(await screen.findByText(/Projects Component/i)).toBeInTheDocument();
    expect(await screen.findByText(/Metadata Component/i)).toBeInTheDocument();
    expect(await screen.findByText(/GetInTouch Component/i)).toBeInTheDocument();
});
