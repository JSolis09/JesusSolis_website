import { render, screen, waitFor } from "@testing-library/react";
import Layout from './Base';

jest.mock('../../components/Header', () => () => <header>Header Component</header>);
jest.mock('../../components/Footer', () => () => <footer>Footer Component</footer>);


test('renders Layout correctly', async () => {
    render(
        <Layout>
            <div>Children component</div>
        </Layout>
    );
    await waitFor(async () => {
        expect(await screen.findByText(/Children component/i)).toBeInTheDocument();
    });
    expect(await screen.findByText(/Header Component/i)).toBeInTheDocument();
    expect(await screen.findByText(/Footer Component/i)).toBeInTheDocument();
});
