import { MediaItem, uiMediaItem } from '../models';
import { getMediaItem } from './';

test('should return null', () => {
    expect(getMediaItem()).toEqual(null);
});

test('should parse mediaItem correctly', () => {
    const mock: MediaItem[] = [
        {
            id: '1',
            sourceUrl: 'image.png',
            title: 'image title',
            altText: 'image alt',
            mediaDetails: {
                width: '100',
                height: '100',
            },
        }
    ];
    const expectedValue: uiMediaItem = {
        id: '1',
        alt: 'image alt',
        height: '100',
        width: '100',
        src: 'image.png',
        title: 'image title'
    }
    expect(getMediaItem(mock)).toEqual(expectedValue);
});

test('should set title as alt attr if alt prop is not defined', () => {
    const mock: MediaItem[] = [
        {
            id: '1',
            sourceUrl: 'image.png',
            title: 'image title',
        }
    ];
    const expectedValue: uiMediaItem = {
        id: '1',
        alt: 'image title',
        src: 'image.png',
        title: 'image title'
    };
    expect(getMediaItem(mock)).toEqual(expectedValue);
});

test('should set "default" as alt attr if alt and title prop are not defined', () => {
    const mock: MediaItem[] = [
        {
            id: '1',
            sourceUrl: 'image.png',
        }
    ];
    const expectedValue: uiMediaItem = {
        id: '1',
        alt: 'default',
        src: 'image.png',
    };
    expect(getMediaItem(mock)).toEqual(expectedValue);
});
