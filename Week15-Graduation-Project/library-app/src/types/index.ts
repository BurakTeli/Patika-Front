// src/types/index.ts

export interface Author {
  id: number;
  name: string;
  birthDate: string;
  country: string;
}

export interface AuthorRequest {
  name: string;
  birthDate: string;
  country: string;
}
export interface Publisher {
  id: number;
  name: string;
  establishmentYear: number;
  address: string;
}

export interface PublisherRequest {
  name: string;
  establishmentYear: number;
  address: string;
}
export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface CategoryRequest {
  name: string;
  description: string;
}

export interface Book {
  id: number;
  name: string;
  publicationYear: number;
  stock: number;
  author: {
    id: number;
    name: string;
  };
  publisher: {
    id: number;
    name: string;
  };
  categories: {
    id: number;
    name: string;
  }[];
}

export interface BookRequest {
  name: string;
  publicationYear: number;
  stock: number;
  authorId: number;
  publisherId: number;
  categoryIds: number[];
}


export interface BookBorrowing {
  id: number;
  borrowerName: string;
  borrowerMail: string;
  borrowingDate: string;
  returnDate: string;
  book: {
    id: number;
    name: string;
    publicationYear: number;
    stock: number;
    author: {
      id: number;
      name?: string;
    };
    publisher: {
      id: number;
      name?: string;
    };
    categories: {
      id: number;
      name?: string;
    }[];
  };
}

export interface BookBorrowingRequest {
  borrowerName: string;
  borrowerMail: string;
  borrowingDate: string;
  returnDate: string;
  bookId: number;
}
