/* eslint-disable no-unused-vars */
import { render, screen, act } from '@testing-library/react';
import { BooksProvider, useBooks } from '../BooksContext.jsx';
import fetchMock from 'jest-fetch-mock';

// Importa funções de teste do Jest (caso não estejam disponíveis globalmente)
import { describe, test, expect, beforeEach } from '@jest/globals';

// Ativa o mock de fetch
fetchMock.enableMocks();

describe('BooksContext', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('calls API and loads books', async () => {
    const mockBooks = [
      { id: '1', title: 'Book 1' },
      { id: '2', title: 'Book 2' },
    ];

    // Mock da resposta da API
    fetchMock.mockResponseOnce(JSON.stringify(mockBooks));

    let booksData;

    // Componente consumidor do contexto
    function ConsumerComponent() {
      booksData = useBooks();
      return null;
    }

    // Renderiza o provider com o consumer dentro
    await act(async () => {
      render(
        <BooksProvider>
          <ConsumerComponent />
        </BooksProvider>
      );
    });

    // Verificações
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('/api/books');
    expect(booksData.books).toEqual(mockBooks);
    expect(booksData.loading).toBe(false);
    expect(booksData.error).toBe(null);
  });
});
