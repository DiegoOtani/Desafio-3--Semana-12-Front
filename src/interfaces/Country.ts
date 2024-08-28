export interface Country {
  id: string;
  name: string;
  urlImg: string;
};

export interface CountryByContinent {
  continent: string;
  countries: Country[];
};

export interface CountryByContReturned {
  countries: CountryByContinent[]
};