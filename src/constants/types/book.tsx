interface Book{
    title: string;

    imageLinks:  {
        smallThumbnail: string|undefined;
        thumbnail: string|undefined;
        medium: string|undefined;
        large: string|undefined;
        extraLarge: string|undefined;
    };

    authors: string[];
    
    publisher: string;
    publishedDate: Date;
    description: string;
    pageCount: number;

    dimensions: {
        height: string;
        width: string;
        thickness: string;
    };

    printType: string;
    mainCategory: string;
    categories: string[];

    averageRating: number;
    ractingsCount: number;

    contentVersion: string;
    language: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export default Book;