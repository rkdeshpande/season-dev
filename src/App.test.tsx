import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App Component', () => {
  beforeEach(() => {
    // Mock successful weather API response
    mockedAxios.get.mockResolvedValue({
      data: {
        main: {
          temp_max: 293.15 // 20°C = 68°F
        }
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the title', () => {
    render(<App />);
    expect(screen.getByText('What Boston Season Is It?')).toBeInTheDocument();
  });

  it('fetches weather data on mount', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.openweathermap.org/data/2.5/weather',
        expect.objectContaining({
          params: expect.objectContaining({
            q: 'Boston',
            appid: expect.any(String)
          })
        })
      );
    });
  });

  it('handles weather API error gracefully', async () => {
    // Mock failed weather API response
    mockedAxios.get.mockRejectedValue(new Error('API Error'));
    
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    render(<App />);
    
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching weather:', expect.any(Error));
    });
    
    consoleSpy.mockRestore();
  });
});
