import { HttpLink, InMemoryCache } from '@apollo/client';
import client from './client';

test('should be defined', async () => {
    expect(client).toBeDefined();
    expect(client.link).toBeInstanceOf(HttpLink);
    expect(client.cache).toBeInstanceOf(InMemoryCache);
});
