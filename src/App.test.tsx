import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from './App';
import { GET_MEDIAITEM, GET_MENU, GET_PROFILE } from "./graphql/queries";

jest.mock('./views/Home', () => () => <div>Home Component</div>);

const mockMediaItem = (title: string) => ({
  request: {
    query: GET_MEDIAITEM,
    variables: {
      title: title,
    }
  },
  result: {
    data: {
      mediaItems: { nodes: [
        {
          id: "1",
          altText: `${title} alt`,
          sourceUrl: "",
          srcSet: "",
          sizes: "",
          title,
          mediaDetails: {
              width: 100,
              height: 100,
          },
        }
      ]},
    }
  },
})

const mocks = [
  {
    request: {
      query: GET_MENU,
      variables: {
        slug: "principal"
      }
    },
    result: {
      data: {
        menus: { nodes: [{ menuItems: { nodes: [{ id: "1", url: "#about-me", label: "About me" }] } }] },
      }
    }
  },
  {
    ...mockMediaItem('logo-jesus-solis'),
  },
  {
    ...mockMediaItem('about-me'),
  },
  {
    request: { query: GET_PROFILE },
    result: {
      data: {
        myProfile: {
          fullname: 'JS',
          email: 'example@test.com',
          role: 'SW dev',
          summary: 'Enjoy coding...',
          avatar: '👽',
          social_media: [{
            name: 'Yin Yang',
            icon: '☯️',
            url: '',
          }],
        },
      }
    }
  },
];

test('renders app correctly', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByRole("spinbutton")).toBeInTheDocument();
  expect(await screen.findByText(/Home Component/i)).toBeInTheDocument();
});
