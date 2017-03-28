import { Book } from './book'

export const  BOOKS : Book[] = [
  new Book(1, "Professional C#", "Wrox Press", new Date('2016/4/29'), `https://cnistorage.blob.core.windows.net/
cnibooks/ProfessionalCSharp6Cover.png`),
  new Book(2, "Programming Angular 2", "Manning", new Date('2016/12/30')),
  new Book(3, "Professional C# 7.2")
];