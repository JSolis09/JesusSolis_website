import { render, screen } from "@testing-library/react";
import TwoColumns from './TwoColumns';

test('renders TwoColumns correctly', async () => {
    render(
        <TwoColumns>
            <div>Column Left</div>
            <div>Column Right</div>
        </TwoColumns>
    );
    expect(await screen.findByText(/Column Left/i)).toBeInTheDocument();
    expect(await screen.findByText(/Column Right/i)).toBeInTheDocument();
});

test('renders null if has no children', async () => {
    const emptyList: React.ReactNode[] = [];
    const {container} = render(
        <TwoColumns>
            {emptyList}
        </TwoColumns>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).not.toBeInTheDocument();
});
